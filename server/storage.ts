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
        title: "Chasing vs. Pursuing: Why good dates sometimes fizzle out",
        content: "One of the most common reasons we see promising connections fade is because someone mistakes healthy pursuit for desperate chasing. After a good date, both people might hesitate to follow up, afraid of coming on too strong or looking too eager. But often, that hesitation comes from insecurity, the fear of being rejected or appearing vulnerable. The irony? People who are secure in themselves don't see expressing interest as risky — they see it as honest and mature. When both sides hold back, what could have been a meaningful connection quietly fizzles into silence.\n\nPursuing means showing genuine interest: replying in a timely way, suggesting to meet again, being warm and curious. Chasing, on the other hand, is when effort feels one-sided or driven by anxiety. The key difference? If you're sending a message because you want to, not because you need a reply to feel okay, it's pursuing. We encourage you to follow up with confidence when the date went well. A short message like \"I had a great time — would love to see you again\" goes a long way in keeping the spark alive.\n\nTexting is often misinterpreted, especially in early dating. So don't overthink it. Be clear, be kind, and don't let a potential match slip away just because of a communication gap.",
        excerpt: "One of the most common reasons we see promising connections fade is because someone mistakes healthy pursuit for desperate chasing...",
        imageUrl: "/attached_assets/MRcyldZioQlMWAEtfToUIypRhEWz6L1LpKFudi8A_1754162893537.png",
        category: "Dating Tips",
        tags: ["communication", "dating advice", "confidence"],
        published: true,
      },
      {
        title: "How to spot a cheater?",
        content: "The recent Coldplay concert scandal — where two high-ranking executives were caught mid-affair on the big screen — went viral for a reason: it hit a nerve. Cheating is one of the biggest dealbreakers in relationships, especially for women, and moments like these reinforce the fear that even \"normal,\" high-functioning people can betray trust. But what makes someone more likely to cheat and can you spot the signs early?\n\nA study by the Reichman University in Israël found that people with more relationship power — due to looks, status, or emotional control — are more likely to notice alternative partners and feel less committed. Another study from the University of Innsbruck, Innsbruck, Austria linked moral disengagement (the ability to justify harmful behavior) with a greater likelihood of infidelity.\n\nMany of our clients are searching for that elusive spark, but it's worth asking: who else feels it around this person? Effortless charm can be magnetic, but also widespread. If someone sparks chemistry with you instantly, chances are they spark it just as easily with others. The absence of that instant thrill isn't necessarily a red flag — in fact, it can be a good thing in this specific context.\n\nResearch also highlights that infidelity is not necessarily about the character of someone and is also rarely just about the act of sex itself. It's about disconnection. Couples need to stay vigilant against the quiet drift of resentment and routine. What matters most is continuing the conversations about our emotional needs, our desires, and how we're evolving as individuals. When those dialogues fade, so does the connection. And in that emotional distance, some people make the painful mistake of seeking attention in the most damaging way possible.",
        excerpt: "The recent Coldplay concert scandal went viral for a reason: it hit a nerve about trust and betrayal in relationships...",
        imageUrl: "/attached_assets/deITrAHgKgmgweITEsWuVWtBa8CMBWKhm5pIL4BN_1754163032993.jpg",
        category: "Relationship Science",
        tags: ["infidelity", "relationship red flags", "trust"],
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
