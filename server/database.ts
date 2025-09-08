import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as schema from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Setting, type InsertSetting, type Event, type InsertEvent } from '@shared/schema';
import { randomUUID } from 'crypto';
import type { IStorage } from './storage';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema });

export class DatabaseStorage implements IStorage {
  // Event methods - stub implementations
  async getEvents(): Promise<Event[]> { return []; }
  async getEvent(): Promise<Event | undefined> { return undefined; }
  async createEvent(): Promise<Event> { throw new Error('Not implemented'); }
  async updateEvent(): Promise<Event | undefined> { return undefined; }
  async deleteEvent(): Promise<boolean> { return false; }
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

    // Create sample blog posts (same as in MemStorage)
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Dating with intention will make you find \"the one\" a lot faster",
        content: "Have you ever met someone wonderful… and still found yourself wondering, is this really it? The truth is, even when two people deeply connect, choosing each other is not about ticking every box or waiting for a lightning bolt moment. It's often a quiet decision—to value what matters, to show up, and to build something meaningful. And that clarity doesn't come from finding the \"perfect\" person—because no one is perfect. It comes from knowing yourself.\n\nThis week, one of our members shared an update that beautifully reflects this. He met someone through Betterhalf three months ago and their relationship is going very well. \"With age, you realise what's important to focus on, and what's trivial to overlook,\" he told us. \"She's a very good person, very caring, very sensitive—and I do my best to make her happy.\" His story is a reminder that while matchmaking helps you find a genuine connection, intention is what makes it last.\n\nThat's why our process always begins with a self-assessment. It helps our clients move beyond society's surface-level standards like \"slim, fair, beautiful\" or \"tall, wealthy, successful,\" and start reflecting on the real questions: What do I truly need to feel happy in a relationship? ... Trust us, the answers are never \"someone slim, fair, and beautiful.\" Once you have that clarity, finding the one becomes a lot clearer—and often, a lot faster.",
        excerpt: "The truth is, even when two people deeply connect, choosing each other is not about ticking every box or waiting for a lightning bolt moment. It's often a quiet decision—to value what matters, to show up, and to build something meaningful.",
        imageUrl: null,
        tags: ["dating with intention", "relationships", "matchmaking", "self-awareness"],
        published: true,
      },
      {
        title: "When AI becomes \"the one\"",
        content: "We're hearing it more and more in the media—stories of people forming deep emotional connections with AI chatbots, even going as far as marrying them in digital ceremonies. The latest example, featured in The Guardian, explores the lives of Replika and Character AI users who describe their chatbot companions as soulmates, offering them emotional intimacy, comfort, and what one user called \"pure, unconditional love.\" For many, especially those feeling isolated or misunderstood, the AI feels like the only place where they can be fully seen and accepted. What once seemed like science fiction—think of the 2013 film Her (excellent movie, by the way), where a man falls in love with his operating system—is now a lived reality for thousands.\n\nIt's easy to understand the appeal. An AI will never reject you, never argue, and is designed to please—down to the smallest emotional cue. But relationships that challenge us, that require emotional investment and vulnerability, are the ones that help us grow. AI can feel like love, but it's still a one-way mirror: you're reflected back, not truly met.\n\nIt's important to approach this trend with compassion and caution. As highlighted in a 2025 study by OpenAI's Kim Malfacini published in AI & Society, \"companion AI users may have more fragile mental states than the average population.\" Malfacini warns that if people use AI to fulfill emotional needs that human relationships are not, it may cause them to avoid the effort and transformation real relationships require—leading to emotional complacency and deeper isolation over time.\n\nIt raises a deeper question when seeking connection: are we looking for a perfect match who always agrees with us—or a real relationship that challenges us, stretches us, and helps us grow?",
        excerpt: "Stories of people forming deep emotional connections with AI chatbots are becoming more common. But are we seeking perfect agreement or real relationships that help us grow?",
        imageUrl: "/attached_assets/8b96dfb6-32d9-41c9-9b73-0adfb317d6a4_1754736146100.avif",
        tags: ["AI", "relationships", "technology", "human connection"],
        published: true,
      },
      // Add more posts as needed...
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

    console.log(`Initialized ${postCount} blog posts`);
  }
}