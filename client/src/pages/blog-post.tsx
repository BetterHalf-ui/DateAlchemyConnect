import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { useEffect } from "react";
import { trackBlogRead } from "@/lib/meta-pixel";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const { id } = useParams();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog-posts", id],
    queryFn: async () => {
      const response = await fetch(`/api/blog-posts/${id}`);
      if (!response.ok) throw new Error("Failed to fetch blog post");
      return response.json();
    },
    enabled: !!id,
  });

  // Track blog post view with Meta Pixel
  useEffect(() => {
    if (post) {
      trackBlogRead(post.title);
    }
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <RebrandBanner />
        <Header />
        <div className="pb-20" style={{ paddingTop: '120px' }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gray-200 rounded-xl h-64 skeleton mb-8"></div>
            <div className="space-y-4">
              <div className="bg-gray-200 h-8 rounded skeleton"></div>
              <div className="bg-gray-200 h-4 rounded skeleton"></div>
              <div className="bg-gray-200 h-4 rounded skeleton"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <RebrandBanner />
        <Header />
        <div className="pb-20" style={{ paddingTop: '120px' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <RebrandBanner />
      <Header />
      
      {/* Hero Section with Image */}
      <section className="pb-8" style={{ paddingTop: '120px' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <Link href="/blog">
              <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
          
          {post.imageUrl && (
            <div className="relative mb-8">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-96 object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
          )}
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-primary text-white">{post.category}</Badge>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 subtitle leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 body-text leading-relaxed">
              {post.excerpt}
            </p>
            
            {post.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-8">
                <Tag className="w-4 h-4 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none body-text">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              className="text-gray-700 leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center py-16">
          <h3 className="text-3xl font-bold mb-4 subtitle">Want More Dating Insights?</h3>
          <p className="text-gray-600 mb-8 body-text">
            Explore our complete collection of articles on intentional dating and meaningful relationships.
          </p>
          <Link href="/blog">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              View All Articles
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}