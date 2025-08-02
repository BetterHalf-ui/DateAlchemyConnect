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
        tags: ["communication", "dating advice", "confidence"],
        published: true,
      },
      {
        title: "How to spot a cheater?",
        content: "The recent Coldplay concert scandal — where two high-ranking executives were caught mid-affair on the big screen — went viral for a reason: it hit a nerve. Cheating is one of the biggest dealbreakers in relationships, especially for women, and moments like these reinforce the fear that even \"normal,\" high-functioning people can betray trust. But what makes someone more likely to cheat and can you spot the signs early?\n\nA <a href=\"https://link.springer.com/article/10.1007/s10508-024-02997-0\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">study by the Reichman University in Israël</a> found that people with more relationship power — due to looks, status, or emotional control — are more likely to notice alternative partners and feel less committed. <a href=\"https://onlinelibrary.wiley.com/doi/10.1111/pere.12552\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Another study from the University of Innsbruck, Innsbruck, Austria</a> linked moral disengagement (the ability to justify harmful behavior) with a greater likelihood of infidelity.\n\nMany of our clients are searching for that elusive spark, but it's worth asking: who else feels it around this person? Effortless charm can be magnetic, but also widespread. If someone sparks chemistry with you instantly, chances are they spark it just as easily with others. The absence of that instant thrill isn't necessarily a red flag — in fact, it can be a good thing in this specific context.\n\nResearch also highlights that infidelity is not necessarily about the character of someone and is also rarely just about the act of sex itself. It's about disconnection. Couples need to stay vigilant against the quiet drift of resentment and routine. What matters most is continuing the conversations about our emotional needs, our desires, and how we're evolving as individuals. When those dialogues fade, so does the connection. And in that emotional distance, some people make the painful mistake of seeking attention in the most damaging way possible.",
        excerpt: "The recent Coldplay concert scandal went viral for a reason: it hit a nerve about trust and betrayal in relationships...",
        imageUrl: "/attached_assets/deITrAHgKgmgweITEsWuVWtBa8CMBWKhm5pIL4BN_1754163032993.jpg",
        tags: ["infidelity", "relationship red flags", "trust"],
        published: true,
      },
      {
        title: "Is fighting a red flag? Not necessarily. But how someone fights might be.",
        content: "When we imagine our ideal partner, most of us hope for someone calm, kind, and compatible—someone we never really fight with. But as Charles Duhigg explains in his bestselling book <a href=\"https://www.amazon.com/Supercommunicators-Unlock-Secret-Language-Connection/dp/0593243919\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Supercommunicators</a>, conflict in a relationship is not only normal—it's inevitable. In fact, a team of psychologists known as the \"Love Shrinks\" spent years recording over 1,000 arguments between couples to understand what actually separates happy relationships from unhappy ones. The answer? It's not whether couples fight, but how they fight.\n\nTheir research revealed that happy couples didn't necessarily fight about lighter issues or forgive more easily. Many had the same arguments again and again—about parenting, money, or workload—but with one key difference: they fought in a way that protected the relationship. Instead of trying to control their partner, they focused on controlling themselves. Instead of saying \"you need to...,\" they used \"I feel…\" statements. They avoided dragging in old arguments or making sweeping generalizations like \"you always\" or \"you never.\"\n\nAnother major insight from Duhigg's work is that many conflicts start simply because partners are misaligned on the type of conversation they're having. One person may just want to vent and feel emotionally heard and validated, while the other quickly switches into problem-solving mode, offering solutions instead of empathy. When that happens, both partners can end up feeling frustrated and unseen. There's actually <a href=\"https://www.youtube.com/watch?v=4sdklRySETU\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">a hilarious and insightful scene in Modern Family</a> where women complain about this exact dynamic—men immediately jumping to fix things when all they want is to be heard.\n\nSo if you're dating to find a life partner, it's worth asking: how does this person handle conflict? Because that, more than charm, chemistry, or charisma, is one of the strongest predictors of a relationship that can truly go the distance.",
        excerpt: "Conflict in a relationship is not only normal—it's inevitable. But how couples fight makes all the difference...",
        imageUrl: "/attached_assets/49X4UJTeCDeJiLLuBuAffAnHgFhSJcbHfmmbdsnJ_1754163160026.png",
        tags: ["conflict resolution", "relationship dynamics", "communication"],
        published: true,
      },
      {
        title: "New cool cafés in Mauritius for your next first date",
        content: "As matchmakers, we've noticed that for most singles, a cozy coffee place is the preferred choice for a first date—and it makes a lot of sense. Cafés offer a relaxed, neutral setting with just the right mix of intimacy and safety. They're low-pressure, affordable, and flexible—you can keep it short if there's no spark or linger longer if the conversation flows.\n\nSitting at an angle rather than face-to-face also helps the interaction feel more natural (and less like an interview) and tends to reduce the pressure even further.\n\nIn Mauritius, many new cool cafes are popping up - 2025 has seen a wave of trendy openings all across the island. If you're looking for a new spot for your next date, check Frolic's list of Cool New Cafes in Mauritius!\n\n<a href=\"https://frolic.mu/cool-new-cafes-in-mauritius-july-2025-edition/\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Read it here →</a>",
        excerpt: "As matchmakers, we've noticed that for most singles, a cozy coffee place is the preferred choice for a first date...",
        imageUrl: "/attached_assets/YDpA99H6eiIdIdfiqpQd16Lf4RdbcBlIiT3RoFZg_1754163653837.jpg",
        tags: ["first dates", "mauritius", "dating venues", "café recommendations"],
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
