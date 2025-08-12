const express = require('express');
const serverless = require('serverless-http');

// Simple in-memory storage for Netlify functions
const blogPosts = [
  {
    id: "1",
    title: "Dating with intention will make you find \"the one\" a lot faster",
    content: "Have you ever met someone wonderful… and still found yourself wondering, is this really it? The truth is, even when two people deeply connect, choosing each other is not about ticking every box or waiting for a lightning bolt moment. It's often a quiet decision—to value what matters, to show up, and to build something meaningful. And that clarity doesn't come from finding the \"perfect\" person—because perfection doesn't exist. It comes from understanding what you want and dating with intention.\n\nIntentional dating isn't about creating a checklist or being impossibly picky. It's about clarity. It's knowing what makes you happy in a relationship and being brave enough to seek it out. It's about dating to build something real, rather than just seeing what happens.\n\nWhen you date with intention, everything changes. Instead of endless coffee dates that go nowhere, you start having conversations that matter. Instead of wondering where someone stands, you create space for honest connection. And instead of getting stuck in situationships, you move toward relationships that actually fulfill you.\n\nHere's the thing: dating with intention makes you faster at recognizing what works. You stop wasting time on people who aren't aligned with what you want. You stop second-guessing yourself when someone shows you who they are. And you stop settling for \"maybe\" when you deserve \"absolutely.\"",
    excerpt: "When you date with intention, everything changes - from endless coffee dates to relationships that actually fulfill you.",
    published: true,
    createdAt: "2025-08-12T10:00:00.000Z",
    updatedAt: "2025-08-12T10:00:00.000Z",
    category: "relationships",
    tags: ["dating", "intention", "relationships"],
    imageUrl: "/attached_assets/candice-picard-VDihQhOiOkI-unsplash_1754161962252.jpg",
    author: "The Date Alchemy Team"
  },
  {
    id: "2",
    title: "When AI becomes \"the one\"",
    content: "In a world where technology increasingly mediates human connection, a fascinating question emerges: what happens when artificial intelligence becomes not just a tool for finding love, but a substitute for it?\n\nRecent studies show that more people are forming emotional attachments to AI companions. These relationships offer consistency, availability, and the promise of unconditional acceptance—qualities that human relationships, with all their beautiful messiness, can't always guarantee.\n\nBut here's what we're learning: while AI can simulate conversation and even empathy, it can't replicate the growth that comes from navigating real human complexity. It can't challenge you in the way a partner does, can't surprise you with their own needs and dreams, and can't offer the deep satisfaction that comes from being truly known by another person.\n\nThe rise of AI companionship isn't necessarily a threat to human relationships—it might be a mirror, showing us what we're really craving: consistent connection, emotional safety, and genuine understanding. The question isn't whether AI can replace human love, but whether we can create human relationships that offer the emotional reliability we seek in artificial ones.\n\nAs we navigate this new landscape, perhaps the goal isn't to compete with AI, but to use its appeal as a guide for building better human connections.",
    excerpt: "Exploring what AI companionship reveals about our deepest relationship needs and desires.",
    published: true,
    createdAt: "2025-08-11T10:00:00.000Z",
    updatedAt: "2025-08-11T10:00:00.000Z",
    category: "technology",
    tags: ["AI", "technology", "modern dating"],
    imageUrl: "/attached_assets/8b96dfb6-32d9-41c9-9b73-0adfb317d6a4_1754736146100.avif",
    author: "Dr. Sarah Chen"
  },
  {
    id: "3",
    title: "Chasing vs. Pursuing: Why good dates sometimes fizzle out",
    content: "There's a crucial difference between chasing and pursuing that most people miss—and it explains why so many promising connections fade after great first dates.\n\nChasing is about you. It's texting because you're anxious, calling because you need reassurance, or planning elaborate dates because you're trying to prove your worth. Chasing is reactive, desperate, and ultimately exhausting for everyone involved.\n\nPursuing is about them. It's reaching out because you're genuinely interested in their thoughts, making plans because you want to create shared experiences, and being consistent because you value the connection you're building together.\n\nHere's the difference in practice: a chaser texts \"good morning\" every day because they need acknowledgment. A pursuer texts when they have something meaningful to share or ask. A chaser plans expensive dates to impress. A pursuer suggests activities they think the other person will genuinely enjoy.\n\nWhen you chase, you put pressure on the other person to reciprocate your energy rather than their own genuine interest. When you pursue, you create space for authentic connection to grow.\n\nThe next time you feel that urge to chase—to text again, to plan another elaborate gesture, to prove your interest—pause. Ask yourself: am I doing this because I'm anxious, or because I'm genuinely interested in this person? The answer will guide you toward the kind of pursuit that actually builds lasting connections.",
    excerpt: "Understanding the crucial difference between chasing and pursuing in early relationship dynamics.",
    published: true,
    createdAt: "2025-08-10T10:00:00.000Z",
    updatedAt: "2025-08-10T10:00:00.000Z",
    category: "dating tips",
    tags: ["dating", "psychology", "relationships"],
    imageUrl: "/attached_assets/MRcyldZioQlMWAEtfToUIypRhEWz6L1LpKFudi8A_1754162893537.png",
    author: "Marcus Rivera"
  },
  {
    id: "4",
    title: "The psychology of \"spark\" - and why it might be misleading you",
    content: "We've all been told to look for \"the spark\"—that immediate, electric feeling that supposedly signals relationship potential. But what if this cultural obsession with instant chemistry is actually steering us away from lasting love?\n\nPsychological research reveals something counterintuitive: the most stable, satisfying long-term relationships often begin with a slow burn rather than fireworks. That immediate \"spark\" you feel? It's usually driven by factors like physical attraction, novelty, or even anxiety—not compatibility.\n\nReal compatibility often feels quieter. It's the ease of conversation, the alignment of values, the way someone's presence brings out your best self. These deeper connections don't always announce themselves with butterflies and racing hearts.\n\nConsider this: think about your closest friendships. How many of them began with dramatic, instant connection versus gradually deepening appreciation? Most likely, your most meaningful relationships grew over time as you discovered shared interests, complementary personalities, and mutual respect.\n\nThis isn't to say physical attraction doesn't matter—it absolutely does. But when we prioritize spark over substance, we often overlook people who could become incredible partners. We dismiss potential matches because they don't create immediate excitement, while pursuing people who create excitement but lack deeper compatibility.\n\nThe next time you're evaluating a potential partner, try looking beyond that initial spark. Ask yourself: Do I feel comfortable being myself around this person? Do our life goals align? Do they bring out qualities in me that I like? Sometimes the best relationships are the ones that surprise you with their staying power.",
    excerpt: "Why that instant 'spark' might be keeping you from finding lasting love.",
    published: true,
    createdAt: "2025-08-09T10:00:00.000Z",
    updatedAt: "2025-08-09T10:00:00.000Z",
    category: "psychology",
    tags: ["psychology", "attraction", "relationships"],
    imageUrl: "/attached_assets/deITrAHgKgmgweITEsWuVWtBa8CMBWKhm5pIL4BN_1754163032993.jpg",
    author: "Dr. Elena Rodriguez"
  },
  {
    id: "5",
    title: "Why successful people struggle with dating (and how to fix it)",
    content: "High achievers often excel in every area of life except one: dating. If you're successful in your career but struggling to find lasting love, you're not alone—and there are specific reasons why your professional strengths might be working against you romantically.\n\nFirst, the achievement mindset. In your career, you're used to setting goals, creating strategies, and executing plans. You measure progress and optimize for results. But relationships aren't projects to be managed or problems to be solved—they're dynamic, emotional experiences that require vulnerability and patience.\n\nSecond, the scarcity of time. Your professional success likely came from prioritizing work and being selective with your time. But building relationships requires time investment upfront, often without guaranteed returns. You might be too quick to write off potential partners because getting to know someone feels inefficient.\n\nThird, the perfectionist trap. You're used to high standards and exceptional results. While having standards is important, perfectionism in dating often leads to dismissing good people for minor incompatibilities while holding out for someone who checks every impossible box.\n\nHere's how to adapt your success-oriented mindset for better dating:\n\n1. Approach dating like networking, not like a job interview. Focus on building genuine connections rather than evaluating candidates.\n\n2. Invest time like you would in any important project. Relationships require consistent effort, not just when it's convenient.\n\n3. Measure success differently. Instead of checking boxes, focus on how someone makes you feel and whether you enjoy spending time together.\n\n4. Use your analytical skills wisely. Observe patterns in your dating life, but don't overthink individual interactions.\n\nYour success-driven qualities—ambition, reliability, goal-orientation—are actually attractive to many people. The key is learning when to apply them and when to simply be present and open to connection.",
    excerpt: "How to leverage your professional strengths while avoiding common dating pitfalls.",
    published: true,
    createdAt: "2025-08-08T10:00:00.000Z",
    updatedAt: "2025-08-08T10:00:00.000Z",
    category: "career and dating",
    tags: ["success", "career", "dating"],
    imageUrl: "/attached_assets/49X4UJTeCDeJiLLuBuAffAnHgFhSJcbHfmmbdsnJ_1754163160026.png",
    author: "James Patterson"
  },
  {
    id: "6",
    title: "The art of the second date: Moving beyond small talk",
    content: "You've survived the first date, felt a connection, and now you're planning the second. This is where many promising relationships stall out—not because of incompatibility, but because people don't know how to deepen the conversation beyond surface-level pleasantries.\n\nThe second date is your opportunity to move from \"getting to know you\" to \"understanding who you are.\" It's the bridge between politeness and genuine intimacy. But most people approach it like a longer version of the first date, which is a missed opportunity.\n\nHere's how to make your second date meaningful:\n\n**Ask follow-up questions to first-date conversations.** If they mentioned loving to travel, don't ask where they've been—ask what travel has taught them about themselves. If they talked about their career, ask what originally drew them to that field.\n\n**Share something vulnerable.** Not your deepest secret, but something real. Maybe a fear you're working on, a dream that excites you, or a challenge you're navigating. Vulnerability invites vulnerability.\n\n**Choose activities that reveal personality.** Instead of dinner and a movie, try something that shows how they handle new experiences: a cooking class, mini golf, or exploring a neighborhood neither of you knows well.\n\n**Pay attention to how they treat others.** How do they interact with servers, strangers, or people who can't do anything for them? This reveals character more than anything they might tell you directly.\n\n**Discuss values, not just preferences.** Instead of asking about favorite movies, ask about a book or film that changed their perspective. Instead of favorite foods, ask about a meal that holds special meaning.\n\nRemember: the goal isn't to interview each other or create artificial depth. It's to create space for natural connection to emerge. When someone feels truly seen and heard, that's when real attraction develops.",
    excerpt: "Transform your second dates from small talk into meaningful connection.",
    published: true,
    createdAt: "2025-08-07T10:00:00.000Z",
    updatedAt: "2025-08-07T10:00:00.000Z",
    category: "dating tips",
    tags: ["dating", "conversation", "connection"],
    imageUrl: "/attached_assets/YDpA99H6eiIdIdfiqpQd16Lf4RdbcBlIiT3RoFZg_1754163653837.jpg",
    author: "Lisa Chen"
  },
  {
    id: "7",
    title: "Digital detox for better relationships: Why less screen time means more connection",
    content: "Our devices promise to connect us, but they might be doing the opposite. If you're struggling to form deep connections, the solution might not be downloading another dating app—it might be putting your phone down more often.\n\nHere's what's happening: every notification, scroll, and swipe is training your brain for instant gratification and shortened attention spans. But meaningful relationships require the opposite—patience, sustained attention, and the ability to be fully present with another person.\n\nWhen we're constantly connected to our devices, we lose the skill of being comfortable with silence, with uncertainty, and with the slow pace of getting to know someone. We expect conversations to move as quickly as our TikTok feeds, and relationships to develop as efficiently as our work emails.\n\nResearch shows that people who spend less time on social media report higher satisfaction in their real-life relationships. They're better at reading social cues, more comfortable with face-to-face conversation, and less likely to compare their relationships to curated online versions of other people's lives.\n\n**Try this experiment for two weeks:**\n\n1. No phones during meals—whether you're eating alone or with others\n2. Create phone-free zones in your home, especially the bedroom\n3. When you're on a date, keep your phone in your bag or pocket\n4. Replace one hour of scrolling each day with an offline activity\n5. Have at least one substantial conversation per day without any devices present\n\nYou might be surprised by what you notice: the subtle expressions you hadn't been seeing, the comfortable silences you'd been filling with screen time, and the deeper conversations that emerge when neither person is distracted.\n\nDigital connection has its place, but it can't replace the irreplaceable experience of being fully present with another human being.",
    excerpt: "How reducing screen time can dramatically improve your dating and relationship skills.",
    published: true,
    createdAt: "2025-08-06T10:00:00.000Z",
    updatedAt: "2025-08-06T10:00:00.000Z",
    category: "lifestyle",
    tags: ["digital detox", "mindfulness", "connection"],
    imageUrl: "/attached_assets/christin-noelle-i1Q838KZPt4-unsplash_1754161962245.jpg",
    author: "David Kim"
  },
  {
    id: "8",
    title: "Red flags vs. differences: Learning to distinguish deal-breakers from preferences",
    content: "One of the hardest skills in dating is learning the difference between red flags—signs of incompatibility or unhealthy behavior—and simple differences in personality or lifestyle. Get this wrong, and you'll either stay in relationships that harm you or leave relationships that could have been wonderful.\n\n**Red flags are about character and treatment:**\n- How someone treats service workers, their ex-partners, or people they disagree with\n- Whether they respect your boundaries when you set them\n- Signs of dishonesty, manipulation, or emotional unavailability\n- Fundamental differences in values around respect, kindness, or integrity\n- Patterns of behavior that make you feel worse about yourself\n\n**Differences are about preferences and styles:**\n- Whether they're introverted or extroverted\n- Different communication styles or love languages\n- Varying interests in hobbies, entertainment, or social activities\n- Different approaches to planning, organization, or decision-making\n- Preferences around lifestyle choices like diet, exercise, or social media use\n\nThe key distinction: red flags typically involve how someone treats you or others, while differences involve what someone prefers or enjoys. Red flags often make you feel unsafe, disrespected, or diminished. Differences might require compromise or acceptance, but they don't threaten your wellbeing.\n\nHere's the nuance: some differences can become red flags if they're handled poorly. Having different social needs isn't a problem, but dismissing your partner's social needs is. Preferring different communication styles is workable, but refusing to communicate effectively is not.\n\n**Questions to ask yourself:**\n- Does this behavior make me feel disrespected or unsafe?\n- Is this person willing to work on issues when I bring them up?\n- Do our differences enhance our relationship or create ongoing conflict?\n- Can I accept this person as they are, or am I hoping they'll change?\n\nRemember: you don't have to justify leaving a relationship that doesn't feel right, even if there are no obvious red flags. But also don't dismiss someone wonderful just because they're different from what you imagined.",
    excerpt: "Master the crucial skill of distinguishing between relationship red flags and harmless differences.",
    published: true,
    createdAt: "2025-08-05T10:00:00.000Z",
    updatedAt: "2025-08-05T10:00:00.000Z",
    category: "dating tips",
    tags: ["red flags", "compatibility", "relationships"],
    imageUrl: "/attached_assets/blfMatrVNwr5eJM4yhpN8ZacjpZ7cDy97gCW2n7u_1754224420473.jpg",
    author: "Dr. Amanda Foster"
  }
];

const settings = {
  active_members_count: { id: "1", key: "active_members_count", value: "225" }
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Blog Posts API
app.get("/api/blog-posts", (req, res) => {
  try {
    const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
    let posts = blogPosts;
    
    if (published !== undefined) {
      posts = blogPosts.filter(post => post.published === published);
    }
    
    // Always sort by creation date (newest first)
    posts = posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog posts" });
  }
});

app.get("/api/blog-posts/:id", (req, res) => {
  try {
    const post = blogPosts.find(p => p.id === req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog post" });
  }
});

// Settings API  
app.get("/api/settings/:key", (req, res) => {
  try {
    const setting = settings[req.params.key];
    if (!setting) {
      return res.status(404).json({ message: "Setting not found" });
    }
    res.json(setting);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch setting" });
  }
});

// Handle errors
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

module.exports.handler = serverless(app);