import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

// Event type definition
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  price: string;
  type: string;
  description?: string;
  location: string;
  maxGuests: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface CreateEvent {
  title: string;
  date: string;
  time: string;
  price: string;
  type: string;
  description?: string;
  location?: string;
  maxGuests?: string;
  published?: boolean;
}

// Simple Supabase client setup
async function createSupabaseClient() {
  const { createClient } = await import('@supabase/supabase-js');
  
  const supabaseUrl = process.env.SUPABASE_URL!;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  
  return createClient(supabaseUrl, supabaseKey);
}

// Fallback events data for when Supabase is unavailable
const fallbackEvents: Event[] = [
  {
    id: "fallback-oct",
    title: "Singles Socials #7 - Brunch Edition!",
    date: "October 4",
    time: "11:30 am - 1:30 pm", 
    price: "Rs1000",
    type: "Brunch",
    description: "A relaxed brunch experience with like-minded singles.",
    location: "Central Mauritius",
    maxGuests: "6-8",
    published: true,
    createdAt: new Date("2024-10-01"),
    updatedAt: new Date("2024-10-01")
  },
  {
    id: "fallback-nov",
    title: "Singles Socials #8 - Dinner Experience",
    date: "November 8", 
    time: "6:30 pm - 8:30 pm",
    price: "Rs1000", 
    type: "Dinner",
    description: "Another wonderful dinner experience for connections.",
    location: "Central Mauritius",
    maxGuests: "6-8",
    published: true,
    createdAt: new Date("2024-11-01"),
    updatedAt: new Date("2024-11-01")
  },
  {
    id: "fallback-dec",
    title: "Singles Socials #9 - Brunch Edition!",
    date: "December 6",
    time: "11:30 am - 1:30 pm",
    price: "Rs1000",
    type: "Brunch", 
    description: "End the year with a fantastic brunch experience.",
    location: "Central Mauritius",
    maxGuests: "6-8",
    published: true,
    createdAt: new Date("2024-12-01"),
    updatedAt: new Date("2024-12-01")
  }
];

async function getEvents(published?: boolean): Promise<Event[]> {
  try {
    console.log('[Events API] Fetching events with published filter:', published);
    const supabase = await createSupabaseClient();
    
    let query = supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (published !== undefined) {
      query = query.eq('published', published);
    }
    
    const { data, error } = await query;
    
    console.log('[Events API] Query result:', { 
      dataCount: data?.length, 
      hasError: !!error,
      errorMessage: error?.message 
    });
    
    if (error) {
      console.error('[Events API] Supabase query error:', error);
      throw error;
    }
    
    if (!data || data.length === 0) {
      console.log('[Events API] No events found in Supabase, using fallback data');
      return published === false ? [] : fallbackEvents;
    }
    
    console.log('[Events API] Returning', data.length, 'events from Supabase');
    return data.map(event => ({
      id: event.id,
      title: event.title,
      date: event.date,
      time: event.time,
      price: event.price,
      type: event.type,
      description: event.description,
      location: event.location || 'Central Mauritius',
      maxGuests: event.max_guests || '6-8',
      published: event.published,
      createdAt: new Date(event.created_at),
      updatedAt: new Date(event.updated_at)
    }));
  } catch (error) {
    console.error('[Events API] Database connection failed, using fallback events:', error);
    return published === false ? [] : fallbackEvents;
  }
}

async function getEvent(id: string): Promise<Event | null> {
  try {
    const supabase = await createSupabaseClient();
    
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error || !data) {
      // Check fallback data
      const fallbackEvent = fallbackEvents.find(e => e.id === id);
      return fallbackEvent || null;
    }
    
    return {
      id: data.id,
      title: data.title,
      date: data.date,
      time: data.time,
      price: data.price,
      type: data.type,
      description: data.description,
      location: data.location || 'Central Mauritius',
      maxGuests: data.max_guests || '6-8',
      published: data.published,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  } catch (error) {
    console.error('Database connection failed, checking fallback events:', error);
    const fallbackEvent = fallbackEvents.find(e => e.id === id);
    return fallbackEvent || null;
  }
}

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS for all requests
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    // Parse path - handle both Netlify internal path and custom domain path
    let path = event.path
      .replace("/.netlify/functions/events-api", "")
      .replace("/api", "");
    
    // Ensure path starts with / or is empty
    if (path && !path.startsWith("/")) {
      path = "/" + path;
    }
    
    const method = event.httpMethod;
    
    console.log('[Events API] Incoming request - method:', method, 'path:', event.path, 'normalized:', path);

    // GET /events - get all events
    if (method === "GET" && (path === "/events" || path === "")) {
      const published = event.queryStringParameters?.published;
      const publishedBool = published === 'true' ? true : published === 'false' ? false : undefined;
      
      const events = await getEvents(publishedBool);
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(events),
      };
    }

    // GET /events/:id - get single event
    if (method === "GET" && path.startsWith("/events/")) {
      const eventId = path.split("/")[2];
      const eventData = await getEvent(eventId);
      
      if (!eventData) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: "Event not found" }),
        };
      }
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(eventData),
      };
    }

    // Route not found
    console.log('[Events API] No route matched for path:', path);
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ message: `API route not found: ${path}` }),
    };

  } catch (error) {
    console.error("Events API Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error"
      }),
    };
  }
};