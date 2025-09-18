import { type User, type InsertUser, type BlogPost, type InsertBlogPost, type Setting, type InsertSetting, type Event, type InsertEvent } from "@shared/schema";
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
  
  // Events
  getEvents(published?: boolean): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: string, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: string): Promise<boolean>;
  
  // Settings
  getSetting(key: string): Promise<Setting | undefined>;
  setSetting(setting: InsertSetting): Promise<Setting>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private events: Map<string, Event>;
  private settings: Map<string, Setting>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.events = new Map();
    this.settings = new Map();
    
    // Initialize with default settings
    this.initializeDefaultData();
  }

  private async initializeDefaultData() {
    // Set default active members count
    await this.setSetting({ key: "active_members_count", value: "225" });
    
    // Initialize sample events
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
      await this.createEvent(event);
    }
    
    console.log("Initializing default blog posts...");
    
    // Create sample blog posts in the order requested with correct dates
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
      {
        title: "When AI becomes \"the one\"",
        content: "We're hearing it more and more in the media—stories of people forming deep emotional connections with AI chatbots, even going as far as marrying them in digital ceremonies. The latest example, featured in The Guardian, explores the lives of Replika and Character AI users who describe their chatbot companions as soulmates, offering them emotional intimacy, comfort, and what one user called \"pure, unconditional love.\" For many, especially those feeling isolated or misunderstood, the AI feels like the only place where they can be fully seen and accepted. What once seemed like science fiction—think of the 2013 film Her (excellent movie, by the way), where a man falls in love with his operating system—is now a lived reality for thousands.\n\nIt's easy to understand the appeal. An AI will never reject you, never argue, and is designed to please—down to the smallest emotional cue. But relationships that challenge us, that require emotional investment and vulnerability, are the ones that help us grow. AI can feel like love, but it's still a one-way mirror: you're reflected back, not truly met.\n\nIt's important to approach this trend with compassion and caution. As highlighted in a 2025 study by OpenAI's Kim Malfacini published in AI & Society, \"companion AI users may have more fragile mental states than the average population.\" Malfacini warns that if people use AI to fulfill emotional needs that human relationships are not, it may cause them to avoid the effort and transformation real relationships require—leading to emotional complacency and deeper isolation over time.\n\nIt raises a deeper question when seeking connection: are we looking for a perfect match who always agrees with us—or a real relationship that challenges us, stretches us, and helps us grow?",
        excerpt: "Stories of people forming deep emotional connections with AI chatbots are becoming more common. But are we seeking perfect agreement or real relationships that help us grow?",
        imageUrl: "/attached_assets/8b96dfb6-32d9-41c9-9b73-0adfb317d6a4_1754736146100.avif",
        tags: ["AI relationships", "technology and dating", "human connection", "modern relationships"],
        published: true,
      },
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
        imageUrl: null,
        tags: ["psychology", "dating questions", "connection", "intimacy", "relationships"],
        published: true,
      },
      {
        title: "The Materialists exposes the tendency and cost of treating potential partners like commodities",
        content: "Celine Song's new film The Materialists <a href=\"https://cinema.mu/movies/materialists/\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">hits screens in Mauritius tomorrow (2nd of July)</a>, and our team is very excited about it! The movie is described as a sharp and stylish look at modern dating through the eyes of Lucy (Dakota Johnson), a professional NYC matchmaker navigating the dizzying intersection of love and money.\n\nThe director of the movie, who was nominated for an Academy Award for her previous film, previously worked as a matchmaker in Manhattan and draws directly from that experience. In her matchmaking days, clients would obsessively quantify potential partners by metrics like BMI, income, and height—highlighting how modern dating has become a \"marketplace\" driven by commodification.\n\nThrough her intelligent script, the film argues that love isn't something you can algorithmically engineer—it demands acceptance, risk, and emotional bravery. We can't agree more...\n\nThe movie reminds us that while practical compatibility matters, it's ultimately the intangible qualities—trust, commitment, empathy—that form the foundation of lasting love. It's a timely invitation to reassess how we value ourselves and our partners—not by height or salary, but by how we truly feel when we're together.",
        excerpt: "Celine Song's new film The Materialists offers a sharp look at modern dating, exposing how we've turned love into a marketplace driven by commodification.",
        imageUrl: "/attached_assets/blfMatrVNwr5eJM4yhpN8ZacjpZ7cDy97gCW2n7u_1754224420473.jpg",
        tags: ["film review", "modern dating", "commodification", "love", "relationships"],
        published: true,
      },
    ];

    // Create posts with exact dates as requested
    const postDates = [
      new Date('2025-08-21'), // "Connecting through shared intense experiences" - August 21st
      new Date('2025-08-21'), // "Are dating and marriage out of date?" - August 21st
      new Date('2025-08-07'), // "Dating with intention" - August 7th
      new Date('2025-08-07'), // "When AI becomes the one" - August 7th (same day)
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
        category: post.category ?? null,
      };
      this.blogPosts.set(id, blogPost);
    }
    
    console.log(`Initialized ${this.blogPosts.size} blog posts`);
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
    let posts = Array.from(this.blogPosts.values());
    
    if (published !== undefined) {
      posts = posts.filter(post => post.published === published);
    }
    
    // Always sort by creation date (newest first)
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
      category: insertPost.category ?? null,
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

  async getEvents(published?: boolean): Promise<Event[]> {
    let events = Array.from(this.events.values());
    
    if (published !== undefined) {
      events = events.filter(event => event.published === published);
    }
    
    // Sort by date (earliest first)
    return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  async getEvent(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const now = new Date();
    const event: Event = {
      ...insertEvent,
      id,
      createdAt: now,
      updatedAt: now,
      published: insertEvent.published ?? true,
      description: insertEvent.description ?? null,
      location: insertEvent.location ?? "Central Mauritius",
      maxGuests: insertEvent.maxGuests ?? "6-8",
    };
    this.events.set(id, event);
    return event;
  }

  async updateEvent(id: string, updateData: Partial<InsertEvent>): Promise<Event | undefined> {
    const existingEvent = this.events.get(id);
    if (!existingEvent) {
      return undefined;
    }

    const updatedEvent: Event = {
      ...existingEvent,
      ...updateData,
      updatedAt: new Date(),
    };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  async deleteEvent(id: string): Promise<boolean> {
    return this.events.delete(id);
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

import { DatabaseStorage } from './database';
import { SupabaseStorage } from './supabase';

// Storage selection logic:
// TEMPORARILY FORCING MemStorage to restore events for Oct/Nov/Dec
// 1. If USE_SUPABASE=true, use Supabase storage (for migration)
// 2. If DATABASE_URL is set and not in development, use database storage
// 3. Otherwise, use memory storage (development)
const isDevelopment = process.env.NODE_ENV === 'development';
const useSupabase = false; // Temporarily forced to false to use MemStorage with events
const shouldUseDatabaseStorage = process.env.DATABASE_URL && !isDevelopment;

let storageInstance: IStorage;

if (useSupabase) {
  storageInstance = new SupabaseStorage();
  console.log('Using SupabaseStorage for data persistence');
} else if (shouldUseDatabaseStorage) {
  storageInstance = new DatabaseStorage();
  console.log('Using DatabaseStorage (Neon) for data persistence');
} else {
  storageInstance = new MemStorage();
  console.log('Using MemStorage for data persistence - Events restored for Oct/Nov/Dec');
  if (isDevelopment && process.env.DATABASE_URL) {
    console.log('Note: Database configured but using memory storage in development');
  }
}

export const storage = storageInstance;

// Initialize default data for database/supabase storage in production
if ((shouldUseDatabaseStorage && storage instanceof DatabaseStorage) ||
    (useSupabase && storage instanceof SupabaseStorage)) {
  storage.initializeDefaultData().catch(console.error);
}
