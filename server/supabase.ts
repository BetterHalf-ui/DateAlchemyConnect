import { createClient } from '@supabase/supabase-js';
import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Setting, type InsertSetting, type Event, type InsertEvent } from '@shared/schema';
import { randomUUID } from 'crypto';
import type { IStorage } from './storage';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required');
}

// Create Supabase client for admin operations
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
export const supabase = createClient(supabaseUrl, supabaseServiceKey);

export class SupabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = not found
      throw error;
    }
    
    return data || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      throw error;
    }
    
    return data || undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    const id = randomUUID();
    const newUser = {
      ...user,
      id,
    };
    
    const { data, error } = await supabase
      .from('users')
      .insert(newUser)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (published !== undefined) {
      query = query.eq('published', published);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Convert Supabase format to our BlogPost format
    return (data || []).map(post => ({
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      imageUrl: post.image_url,
      category: post.category,
      tags: post.tags || [],
      published: post.published,
      createdAt: new Date(post.created_at),
      updatedAt: new Date(post.updated_at)
    }));
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      throw error;
    }
    
    if (!data) return undefined;
    
    // Convert Supabase format to our BlogPost format
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      imageUrl: data.image_url,
      category: data.category,
      tags: data.tags || [],
      published: data.published,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        id,
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        image_url: post.imageUrl,
        category: post.category,
        tags: post.tags || [],
        published: post.published ?? false,
        created_at: now.toISOString(),
        updated_at: now.toISOString()
      })
      .select()
      .single();
    
    if (error) throw error;
    
    // Convert Supabase format to our BlogPost format
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      imageUrl: data.image_url,
      category: data.category,
      tags: data.tags || [],
      published: data.published,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const now = new Date();
    
    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        ...(updateData.title && { title: updateData.title }),
        ...(updateData.content && { content: updateData.content }),
        ...(updateData.excerpt && { excerpt: updateData.excerpt }),
        ...(updateData.imageUrl !== undefined && { image_url: updateData.imageUrl }),
        ...(updateData.category !== undefined && { category: updateData.category }),
        ...(updateData.tags && { tags: updateData.tags }),
        ...(updateData.published !== undefined && { published: updateData.published }),
        updated_at: now.toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error && error.code !== 'PGRST116') {
      throw error;
    }
    
    if (!data) return undefined;
    
    // Convert Supabase format to our BlogPost format
    return {
      id: data.id,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      imageUrl: data.image_url,
      category: data.category,
      tags: data.tags || [],
      published: data.published,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }

  async getSetting(key: string): Promise<Setting | undefined> {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('key', key)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      throw error;
    }
    
    if (!data) return undefined;
    
    return {
      id: data.id,
      key: data.key,
      value: data.value,
      updatedAt: new Date(data.updated_at)
    };
  }

  async setSetting(insertSetting: InsertSetting): Promise<Setting> {
    const existing = await this.getSetting(insertSetting.key);
    const now = new Date();
    
    if (existing) {
      // Update existing setting
      const { data, error } = await supabase
        .from('settings')
        .update({
          value: insertSetting.value,
          updated_at: now.toISOString()
        })
        .eq('key', insertSetting.key)
        .select()
        .single();
      
      if (error) throw error;
      
      return {
        id: data.id,
        key: data.key,
        value: data.value,
        updatedAt: new Date(data.updated_at)
      };
    } else {
      // Create new setting
      const id = randomUUID();
      const { data, error } = await supabase
        .from('settings')
        .insert({
          id,
          key: insertSetting.key,
          value: insertSetting.value,
          updated_at: now.toISOString()
        })
        .select()
        .single();
      
      if (error) throw error;
      
      return {
        id: data.id,
        key: data.key,
        value: data.value,
        updatedAt: new Date(data.updated_at)
      };
    }
  }

  // Events Management
  async getEvents(published?: boolean): Promise<Event[]> {
    let query = supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true });
    
    if (published !== undefined) {
      query = query.eq('published', published);
    }
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Convert Supabase format to our Event format
    return (data || []).map(event => ({
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
  }

  async getEvent(id: string): Promise<Event | undefined> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error && error.code !== 'PGRST116') {
      throw error;
    }
    
    if (!data) return undefined;
    
    // Convert Supabase format to our Event format
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
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const now = new Date();
    
    const { data, error } = await supabase
      .from('events')
      .insert({
        id,
        title: event.title,
        date: event.date,
        time: event.time,
        price: event.price,
        type: event.type,
        description: event.description || null,
        location: event.location || 'Central Mauritius',
        max_guests: event.maxGuests || '6-8',
        published: event.published ?? true,
        created_at: now.toISOString(),
        updated_at: now.toISOString()
      })
      .select()
      .single();
    
    if (error) throw error;
    
    // Convert Supabase format to our Event format
    return {
      id: data.id,
      title: data.title,
      date: data.date,
      time: data.time,
      price: data.price,
      type: data.type,
      description: data.description,
      location: data.location,
      maxGuests: data.max_guests,
      published: data.published,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }

  async updateEvent(id: string, updateData: Partial<InsertEvent>): Promise<Event | undefined> {
    const now = new Date();
    
    const updateObject: any = {
      updated_at: now.toISOString()
    };
    
    if (updateData.title !== undefined) updateObject.title = updateData.title;
    if (updateData.date !== undefined) updateObject.date = updateData.date;
    if (updateData.time !== undefined) updateObject.time = updateData.time;
    if (updateData.price !== undefined) updateObject.price = updateData.price;
    if (updateData.type !== undefined) updateObject.type = updateData.type;
    if (updateData.description !== undefined) updateObject.description = updateData.description;
    if (updateData.location !== undefined) updateObject.location = updateData.location;
    if (updateData.maxGuests !== undefined) updateObject.max_guests = updateData.maxGuests;
    if (updateData.published !== undefined) updateObject.published = updateData.published;
    
    const { data, error } = await supabase
      .from('events')
      .update(updateObject)
      .eq('id', id)
      .select()
      .single();
    
    if (error && error.code !== 'PGRST116') {
      throw error;
    }
    
    if (!data) return undefined;
    
    // Convert Supabase format to our Event format
    return {
      id: data.id,
      title: data.title,
      date: data.date,
      time: data.time,
      price: data.price,
      type: data.type,
      description: data.description,
      location: data.location,
      maxGuests: data.max_guests,
      published: data.published,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at)
    };
  }

  async deleteEvent(id: string): Promise<boolean> {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  }

  async initializeDefaultData(): Promise<void> {
    try {
      // Set default active members count if not exists
      const existingSetting = await this.getSetting("active_members_count");
      if (!existingSetting) {
        await this.setSetting({ key: "active_members_count", value: "225" });
        console.log("Created default active_members_count setting");
      }

      // Check if blog posts already exist
      const existingPosts = await this.getBlogPosts();
      console.log(`Found ${existingPosts.length} existing blog posts in Supabase`);
      
      // Try to check events but don't fail if table doesn't exist
      try {
        const existingEvents = await this.getEvents();
        console.log(`Found ${existingEvents.length} existing events in Supabase`);
        
        if (existingEvents.length === 0) {
          console.log("Creating sample events...");
          
          const sampleEvents: InsertEvent[] = [
            {
              title: "Singles Socials #6 - Dinner Experience",
              date: "September 6",
              time: "6:30 pm - 9:30 pm",
              price: "Rs1000",
              type: "Dinner",
              description: "An intimate dinner experience with carefully selected singles.",
              published: true,
            },
            {
              title: "Singles Socials #7 - Brunch Edition!",
              date: "October 4",
              time: "11:30 am - 1:30 pm",
              price: "Rs1000",
              type: "Brunch",
              description: "A relaxed brunch experience with like-minded singles.",
              published: true,
            },
            {
              title: "Singles Socials #8 - Dinner Experience",
              date: "November 8",
              time: "6:30 pm - 8:30 pm",
              price: "Rs1000",
              type: "Dinner",
              description: "Another wonderful dinner experience for connections.",
              published: true,
            },
            {
              title: "Singles Socials #9 - Brunch Edition!",
              date: "December 6",
              time: "11:30 am - 1:30 pm",
              price: "Rs1000",
              type: "Brunch",
              description: "End the year with a fantastic brunch experience.",
              published: true,
            }
          ];

          for (const event of sampleEvents) {
            try {
              await this.createEvent(event);
            } catch (eventError) {
              console.log("Error creating individual event:", eventError);
            }
          }
          
          console.log(`Attempted to create ${sampleEvents.length} sample events`);
        }
      } catch (eventsError) {
        console.log("Events table not ready yet, skipping events initialization");
        console.log("You may need to create the events table manually in Supabase dashboard");
      }
      
      console.log("Supabase initialization completed successfully");
      
    } catch (error) {
      console.error("Error during Supabase initialization:", error);
    }
  }
}