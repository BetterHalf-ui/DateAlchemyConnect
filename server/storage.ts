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
    
    // Create sample blog posts in the order requested with correct dates
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
      {
        title: "The 36 questions that can spark a real connection: try it on your next date!",
        content: "Looking for a meaningful activity for a second or third date? Forget trying to impress—focus instead on connecting. In fact, one of the best ways to bond is by being curious about your date, not by showing off. A <a href=\"https://journals.sagepub.com/doi/10.1177/0146167297234003\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">fascinating 1997 study</a> by psychologist Arthur Aron and his team explored whether intimacy between two strangers could be fast-tracked. The result? A set of 36 questions designed to gradually build trust, openness, and emotional closeness.\n\nThe questions start light—like \"Would you like to be famous?\"—and become more personal as you go, with questions like \"What's your most treasured memory?\" or \"When did you last cry in front of someone?\" They've since been used in numerous psychology studies to deepen connection not just between potential couples, but between friends, coworkers, and even strangers from different backgrounds. While the goal isn't necessarily to fall in love, many people have reported a noticeable shift in how close they feel after doing the full exercise. If you're ready for a deeper kind of date, try it out: <a href=\"https://amorebeautifulquestion.com/wp-content/uploads/2018/06/Arthur-Arons-36-questions.pdf\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Read the full list of 36 questions here.</a>\n\nIt's a fun way to go beyond small talk and really see each other—not just in terms of compatibility, but humanity. One tip? Save this for a second or third date when you've already built some trust and are ready to be a little more vulnerable. You might be surprised by how powerful asking (and answering) the right questions can be.",
        excerpt: "Looking for a meaningful activity for a second or third date? Discover the 36 questions that psychology research shows can spark real connection and intimacy.",
        category: "Dating Tips",
        imageUrl: null,
        tags: ["psychology", "dating questions", "connection", "intimacy", "relationships"],
        published: true,
      },
      {
        title: "The Materialists exposes the tendency and cost of treating potential partners like commodities",
        content: "Celine Song's new film The Materialists <a href=\"https://cinema.mu/movies/materialists/\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">hits screens in Mauritius tomorrow (2nd of July)</a>, and our team is very excited about it! The movie is described as a sharp and stylish look at modern dating through the eyes of Lucy (Dakota Johnson), a professional NYC matchmaker navigating the dizzying intersection of love and money.\n\nThe director of the movie, who was nominated for an Academy Award for her previous film, previously worked as a matchmaker in Manhattan and draws directly from that experience. In her matchmaking days, clients would obsessively quantify potential partners by metrics like BMI, income, and height—highlighting how modern dating has become a \"marketplace\" driven by commodification.\n\nThrough her intelligent script, the film argues that love isn't something you can algorithmically engineer—it demands acceptance, risk, and emotional bravery. We can't agree more...\n\nThe movie reminds us that while practical compatibility matters, it's ultimately the intangible qualities—trust, commitment, empathy—that form the foundation of lasting love. It's a timely invitation to reassess how we value ourselves and our partners—not by height or salary, but by how we truly feel when we're together.",
        excerpt: "Celine Song's new film The Materialists offers a sharp look at modern dating, exposing how we've turned love into a marketplace driven by commodification.",
        category: "Relationship Insights",
        imageUrl: "/attached_assets/blfMatrVNwr5eJM4yhpN8ZacjpZ7cDy97gCW2n7u_1754224420473.jpg",
        tags: ["film review", "modern dating", "commodification", "love", "relationships"],
        published: true,
      },
    ];

    // Create posts with exact dates as requested
    const postDates = [
      new Date('2025-07-24'), // "Chasing vs. Pursuing" - July 24th
      new Date('2025-07-24'), // "How to spot a cheater?" - July 24th (same day as requested)  
      new Date('2025-07-10'), // "Is fighting a red flag?" - July 10th
      new Date('2025-07-10'), // "New cool cafés" - July 10th (same day as requested)
      new Date('2025-07-01'), // "The 36 questions" - July 1st
      new Date('2025-07-01'), // "The Materialists" - July 1st (same day as requested)
    ];

    for (let i = 0; i < samplePosts.length; i++) {
      const post = samplePosts[i];
      const id = randomUUID();
      const publishDate = postDates[i];
      const blogPost: BlogPost = {
        ...post,
        id,
        createdAt: publishDate,
        updatedAt: publishDate,
        published: post.published ?? false,
        imageUrl: post.imageUrl ?? null,
        tags: post.tags ?? [],
      };
      this.blogPosts.set(id, blogPost);
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
