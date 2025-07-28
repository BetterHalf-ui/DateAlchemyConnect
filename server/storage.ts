import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Setting, type InsertSetting } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog Posts
  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  
  // Settings
  getSetting(key: string): Promise<Setting | undefined>;
  setSetting(setting: InsertSetting): Promise<Setting>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private settings: Map<string, Setting>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.settings = new Map();
    
    // Initialize with default settings
    this.initializeDefaultData();
  }

  private async initializeDefaultData() {
    // Set default active members count
    await this.setSetting({ key: "active_members_count", value: "222" });
    
    // Create sample blog posts
    const samplePosts: InsertBlogPost[] = [
      {
        title: "5 Signs You're Ready for Intentional Dating",
        content: "Discover the key indicators that show you're prepared for a more meaningful approach to finding love. In this comprehensive guide, we explore the psychological and emotional markers that suggest you're ready to move beyond casual dating...",
        excerpt: "Discover the key indicators that show you're prepared for a more meaningful approach to finding love...",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "Dating Tips",
        tags: ["intentional dating", "relationship readiness", "self-awareness"],
        published: true,
      },
      {
        title: "The Science Behind Lasting Relationships",
        content: "Explore the research-backed principles that help couples build strong, enduring connections. From attachment theory to communication patterns, we dive deep into what science tells us about successful partnerships...",
        excerpt: "Explore the research-backed principles that help couples build strong, enduring connections...",
        imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "Relationship Science",
        tags: ["relationship science", "attachment theory", "psychology"],
        published: true,
      },
      {
        title: "Dating with Purpose: A Professional's Guide",
        content: "Learn how to navigate modern dating while maintaining your high standards and busy lifestyle. This guide offers practical strategies for busy professionals who want to find love without compromising their career goals...",
        excerpt: "Learn how to navigate modern dating while maintaining your high standards and busy lifestyle...",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "Professional Dating",
        tags: ["professional dating", "work-life balance", "busy professionals"],
        published: true,
      },
    ];

    for (const post of samplePosts) {
      await this.createBlogPost(post);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(published?: boolean): Promise<BlogPost[]> {
    const posts = Array.from(this.blogPosts.values());
    if (published !== undefined) {
      return posts.filter(post => post.published === published);
    }
    return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const now = new Date();
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: now,
      updatedAt: now,
      published: insertPost.published ?? false,
      imageUrl: insertPost.imageUrl ?? null,
      tags: insertPost.tags ?? [],
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async updateBlogPost(id: string, updateData: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const existingPost = this.blogPosts.get(id);
    if (!existingPost) {
      return undefined;
    }

    const updatedPost: BlogPost = {
      ...existingPost,
      ...updateData,
      updatedAt: new Date(),
    };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async getSetting(key: string): Promise<Setting | undefined> {
    return this.settings.get(key);
  }

  async setSetting(insertSetting: InsertSetting): Promise<Setting> {
    const existingSetting = this.settings.get(insertSetting.key);
    const setting: Setting = {
      id: existingSetting?.id || randomUUID(),
      ...insertSetting,
      updatedAt: new Date(),
    };
    this.settings.set(insertSetting.key, setting);
    return setting;
  }
}

export const storage = new MemStorage();
