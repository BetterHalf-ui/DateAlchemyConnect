type MetaEntry = { title: string; description: string };
type MetaMap = Record<string, MetaEntry>;

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const url = new URL(request.url);
  const response = await context.next();

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  const mapUrl = new URL('/build-data/meta-map.json', request.url).toString();
  let metaMap: MetaMap = {};
  try {
    const mapResponse = await fetch(mapUrl);
    if (mapResponse.ok) metaMap = await mapResponse.json();
  } catch {
    // If the map is unavailable, serve unmodified HTML
  }

  const meta = metaMap[url.pathname] ?? metaMap['/'];
  if (!meta) return response;

  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  const canonicalUrl = `https://thedatealchemy.com${url.pathname}`;

  let html = await response.text();

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  html = html.replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/,
    `$1${description}$2`
  );

  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
    `$1${title}$2`
  );
  html = html.replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
    `$1${description}$2`
  );
  html = html.replace(
    /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
    `$1${canonicalUrl}$2`
  );
  html = html.replace(
    /(<meta\s+(?:name|property)="twitter:title"\s+content=")[^"]*(")/,
    `$1${title}$2`
  );
  html = html.replace(
    /(<meta\s+(?:name|property)="twitter:description"\s+content=")[^"]*(")/,
    `$1${description}$2`
  );
  html = html.replace(
    /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
    `$1${canonicalUrl}$2`
  );

  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
};

export const config = { path: '/*' };
