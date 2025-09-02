import { createClient } from '@supabase/supabase-js';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as schema from '@shared/schema';
import { eq } from 'drizzle-orm';
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

// Create Drizzle client using Supabase connection string 
// Note: DATABASE_URL should be configured to point to Supabase when migrating
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required for Supabase connection');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema });

export class SupabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(schema.users).where(eq(schema.users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(schema.users).where(eq(schema.users.username, username)).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const id = randomUUID();
    const newUser = {
      ...user,
      id,
    };
    
    const result = await db.insert(schema.users).values(newUser).returning();
    return result[0];
  }

  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    if (published !== undefined) {
      return await db.select().from(schema.blogPosts)
        .where(eq(schema.blogPosts.published, published))
        .orderBy(schema.blogPosts.createdAt);
    }
    
    return await db.select().from(schema.blogPosts)
      .orderBy(schema.blogPosts.createdAt);
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const result = await db.select().from(schema.blogPosts).where(eq(schema.blogPosts.id, id)).limit(1);
    return result[0];
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const newPost: BlogPost = {
      ...post,
      id,
      createdAt: now,
      updatedAt: now,
      published: post.published ?? false,
      imageUrl: post.imageUrl ?? null,
      tags: post.tags ?? [],
      category: post.category ?? null,
    };
    
    await db.insert(schema.blogPosts).values(newPost);
    return newPost;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const now = new Date();
    const updateWithTimestamp = {
      ...updateData,
      updatedAt: now,
    };
    
    await db.update(schema.blogPosts)
      .set(updateWithTimestamp)
      .where(eq(schema.blogPosts.id, id));
    
    return this.getBlogPost(id);
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    const result = await db.delete(schema.blogPosts).where(eq(schema.blogPosts.id, id));
    return result.rowCount ? result.rowCount > 0 : false;
  }

  async getSetting(key: string): Promise<Setting | undefined> {
    const result = await db.select().from(schema.settings).where(eq(schema.settings.key, key)).limit(1);
    return result[0];
  }

  async setSetting(insertSetting: InsertSetting): Promise<Setting> {
    const existing = await this.getSetting(insertSetting.key);
    const now = new Date();
    
    if (existing) {
      // Update existing setting
      const updated: Setting = {
        ...existing,
        ...insertSetting,
        updatedAt: now,
      };
      
      await db.update(schema.settings)
        .set({ value: insertSetting.value, updatedAt: now })
        .where(eq(schema.settings.key, insertSetting.key));
      
      return updated;
    } else {
      // Create new setting
      const newSetting: Setting = {
        id: randomUUID(),
        ...insertSetting,
        updatedAt: now,
      };
      
      await db.insert(schema.settings).values(newSetting);
      return newSetting;
    }
  }

  async initializeDefaultData(): Promise<void> {
    // Set default active members count if not exists
    const existingSetting = await this.getSetting("active_members_count");
    if (!existingSetting) {
      await this.setSetting({ key: "active_members_count", value: "225" });
    }

    console.log("Initializing default blog posts...");
    
    // Check if blog posts already exist
    const existingPosts = await this.getBlogPosts();
    if (existingPosts.length > 0) {
      console.log(`Found ${existingPosts.length} existing blog posts, skipping initialization`);
      return;
    }

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