import { createClient } from '@supabase/supabase-js';
import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Setting, type InsertSetting } from '@shared/schema';
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
      
      if (existingPosts.length > 0) {
        console.log("Supabase data already populated, skipping initialization");
        return;
      }
      
      console.log("Supabase appears empty, but this is expected after migration");

    // Create sample blog posts with authentic content from The Date Alchemy
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Connecting through shared intense experiences",
        content: "The success of a date isn't just about who we date, but also how we date. This is where a recent trend, highlighted by a Virgin survey on \"adrenaline dating,\" offers a fascinating insight. The study found that 93% of American respondents were open to high-energy dates like go-kart racing or ziplining, with many believing these activities could accelerate a connection. This isn't just about fun; it's rooted in a psychological principle known as misattribution of arousal. The theory suggests that the physiological arousal—like a racing heart or sweaty palms—we feel during an exciting activity can be mistakenly attributed to the person we are with, enhancing feelings of attraction and connection. This is why a simple coffee or drinks might not always be enough. While they provide a safe space for conversation, they lack the kind of shared, exhilarating experience that can create a more powerful bond.\n\nActivities like rock climbing or attending a concert can reduce the pressure of constant small talk, allowing two people to connect through shared experiences and a sense of adventure. Ultimately, it's about moving past passive, scripted interactions and into active, engaging ones that help reveal a person's true character and create a more authentic, memorable connection from the start.\n\n(Image source: Ziplining at Domaine de L'Etoile)",
        excerpt: "The success of a date isn't just about who we date, but also how we date. Recent research on \"adrenaline dating\" reveals how shared intense experiences can accelerate connection through psychological principles...",
        imageUrl: "/attached_assets/ziplining-domaine-de-l-etoile-1_1755786288265.jpg",
        tags: ["adrenaline dating", "date ideas", "psychology", "connection", "adventure"],
        published: true,
      },
      {
        title: "Are dating and marriage \"out of date\"?",
        content: "In a recent WhatsApp group discussion, a few people shared a provocative thought: perhaps both dating and marriage are \"out of date.\" They suggested that men and women are \"more divided than ever\" and that people should instead focus on a \"journey back to themselves.\"\n\nThis perspective resonates with a sentiment many of us have encountered at some point: a deep disillusionment with romantic relationships. It's understandable. In a world where we're constantly exposed to stories of heartbreak and betrayal, and where many of us carry the weight of past relational traumas, it's easy to lose faith in the idea of shared love.\n\nBut a repeated pattern of \"bad relationships\" often isn't just bad luck. It can be a cycle that we are a part of.\n\nAre we consistently drawn to partners who are emotionally unavailable? Do we prioritize superficial qualities like looks or wealth over core values and character?\n\nAttachment theory, one of the most widely recognized frameworks to explain certain dynamics in relationships, offers a powerful way to understand how people can get attracted to the wrong people and get into toxic relationships.\n\nIt says that certain individuals - with an anxious attachment style - have a deep-seated fear of abandonment and a strong desire for closeness, which leads them to constantly seek reassurance and intimacy from their partners. Other individuals - with an avoidant attachment style -, on the other hand, have a fear of being \"trapped\" or losing their independence, and they tend to pull away when a relationship becomes too close.\n\nThis dynamic creates a self-reinforcing cycle. The anxious partner's pursuit of closeness and their need for reassurance can be interpreted by the avoidant partner as a threat to their independence, causing them to withdraw. This withdrawal, in turn, intensifies the anxious partner's fear of abandonment, causing them to pursue even more aggressively. In this cycle, each person's coping mechanism inadvertently triggers the other's core wound. The avoidant partner gets the \"space\" they think they need, but at the cost of genuine intimacy. The anxious partner gets attention, but only through conflict and drama.\n\nWhat is interesting is that ultimately, they are attracted to each other because they are familiar with this relational dance from their earliest childhood experiences. For the anxious partner, the avoidant's unavailability feels familiar because it mirrors the inconsistent or distant care they might have received. For the avoidant partner, the anxious partner's neediness validates their belief that others are too demanding and that they are better off relying on themselves.\n\nRecognizing our own attachment style and the types of people we gravitate toward is a crucial step in breaking these cycles and opening ourselves up to healthier possibilities.\n\nEventually, we can't agree more with the call to \"journey back to yourself\". It's about healing, self-discovery, and understanding our own needs and worth, and sometimes even learning to meet some of our needs by ourselves. However, at the Date Alchemy, we strongly believe that this isn't the final destination. It's a journey that prepares us for a new one—the possibility of a healthy, fulfilling connection with a deserving partner.",
        excerpt: "In a recent WhatsApp group discussion, a few people shared a provocative thought: perhaps both dating and marriage are \"out of date.\" This perspective resonates with a sentiment many of us have encountered at some point...",
        imageUrl: "/attached_assets/artem-manchenkov-Et3naoorgSw-unsplash_1755786022875.jpg",
        tags: ["attachment theory", "self-discovery", "relationship patterns", "emotional healing"],
        published: true,
      },
      {
        title: "Dating with intention will make you find \"the one\" a lot faster",
        content: "Have you ever met someone wonderful… and still found yourself wondering, is this really it? The truth is, even when two people deeply connect, choosing each other is not about ticking every box or waiting for a lightning bolt moment. It's often a quiet decision—to value what matters, to show up, and to build something meaningful. And that clarity doesn't come from finding the \"perfect\" person—because no one is perfect. It comes from knowing yourself.\n\nThis week, one of our members shared an update that beautifully reflects this. He met someone through Betterhalf three months ago and their relationship is going very well. \"With age, you realise what's important to focus on, and what's trivial to overlook,\" he told us. \"She's a very good person, very caring, very sensitive—and I do my best to make her happy.\" His story is a reminder that while matchmaking helps you find a genuine connection, intention is what makes it last.\n\nThat's why our process always begins with a self-assessment. It helps our clients move beyond society's surface-level standards like \"slim, fair, beautiful\" or \"tall, wealthy, successful,\" and start reflecting on the real questions: What do I truly need to feel happy in a relationship? ... Trust us, the answers are never \"someone slim, fair, and beautiful.\" Once you have that clarity, finding the one becomes a lot clearer—and often, a lot faster.",
        excerpt: "The truth is, even when two people deeply connect, choosing each other is not about ticking every box or waiting for a lightning bolt moment. It's often a quiet decision—to value what matters, to show up, and to build something meaningful.",
        imageUrl: null,
        tags: ["dating with intention", "relationships", "matchmaking", "self-awareness"],
        published: true,
      },
    ];

    let postCount = 0;
    for (const post of samplePosts) {
      try {
        await this.createBlogPost(post);
        postCount++;
      } catch (error) {
        console.error(`Error creating blog post "${post.title}":`, error);
      }
    }

    console.log(`Initialized ${postCount} blog posts in Supabase`);
  }
}