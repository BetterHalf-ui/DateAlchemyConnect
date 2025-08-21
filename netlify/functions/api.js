const express = require('express');
const serverless = require('serverless-http');

// Blog posts data - this will be replaced with database connection once DATABASE_URL is configured
const blogPosts = [
  {
    id: "c67a405d-b94d-4aac-b550-0f9c90a19335",
    title: "Are dating and marriage 'out of date'?",
    content: "Are dating and marriage \"out of date\"?\n\nIn a recent WhatsApp group discussion, a few people shared the opinion that both dating and marriage are becoming obsolete concepts, especially among younger generations. The argument was that modern life offers so many alternatives to traditional relationships that the whole idea feels outdated.\n\nI understand where this perspective comes from. We're living in an era of unprecedented choice and flexibility. Career opportunities are global, lifestyles are diverse, and there are countless ways to find fulfillment outside of romantic partnerships. Social media shows us a world where being single can look incredibly attractive – traveling solo, focusing on personal goals, building strong friendships, and achieving financial independence.\n\nBut I think dismissing dating and marriage entirely misses something fundamental about human nature.\n\n## The Case for Connection\n\nWhile the forms of relationships may be evolving, the human need for deep, meaningful connection remains constant. Research consistently shows that people in healthy long-term relationships tend to be happier, healthier, and more resilient. They live longer, recover from illness faster, and report higher life satisfaction.\n\nThis isn't about dependency – it's about partnership. The best modern relationships aren't about completing each other but about enhancing each other's lives while maintaining individual identity and goals.\n\n## Dating: A Skill Worth Developing\n\nThe dating process itself, when approached thoughtfully, develops crucial life skills:\n\n- **Communication**: Learning to express your needs, boundaries, and feelings clearly\n- **Emotional intelligence**: Understanding both your own and others' emotional patterns\n- **Conflict resolution**: Navigating disagreements constructively\n- **Compromise**: Finding solutions that work for multiple people\n- **Empathy**: Genuinely understanding different perspectives\n\nThese skills benefit every area of life, from professional relationships to friendships to family dynamics.\n\n## Marriage: Evolution, Not Extinction\n\nMarriage today looks very different from previous generations, and that's actually its strength. Modern marriages are more likely to be partnerships between equals, with shared decision-making, dual careers, and flexible role definitions.\n\nThe statistics about divorce rates often overshadow the fact that many couples are creating fulfilling, lasting partnerships. They're just doing it more intentionally, with better communication tools and more realistic expectations.\n\n## The Middle Ground\n\nPerhaps the real shift isn't that dating and marriage are obsolete, but that they're becoming more intentional. People are:\n\n- Taking time to understand themselves before committing to others\n- Being more selective about compatibility\n- Communicating expectations more clearly\n- Designing relationships that fit their actual lives rather than societal templates\n\nAt The Date Alchemy, we see this evolution as positive. Our members aren't desperately seeking \"anyone\" – they're looking for genuine compatibility with someone who shares their values and life vision.\n\n## The Choice is Still Valid\n\nFor those who genuinely prefer single life, that's completely valid. But for many others, the desire for partnership remains strong – they just want to approach it more thoughtfully than previous generations.\n\nThe key is being honest about what you actually want, rather than following trends or reacting against societal pressure. Some people thrive in partnerships, others prefer independence, and many fall somewhere in between.\n\nWhat matters is making conscious choices about your relationship status rather than letting it happen by default.\n\nDating and marriage aren't out of date – they're simply evolving to meet the needs of modern life. And for those who choose them, developing the skills to do them well remains as valuable as ever.",
    excerpt: "In a recent discussion, some argued that dating and marriage are becoming obsolete. While modern life offers many alternatives, the human need for deep connection remains constant. Perhaps relationships aren't outdated – they're just becoming more intentional.",
    published: true,
    createdAt: "2025-08-21T10:00:00Z",
    updatedAt: "2025-08-21T10:00:00Z",
    category: "Relationships",
    tags: ["dating", "marriage", "relationships", "modern love"],
    imageUrl: "/attached_assets/artem-manchenkov-Et3naoorgSw-unsplash_1755786022875.jpg",
    author: "The Date Alchemy Team"
  },
  {
    id: "692eef63-e208-4964-9a4e-b85bd04ac18c",
    title: "Connecting through shared intense experiences",
    content: "There's something magical about bonding through shared intense experiences. Whether it's traveling to a challenging destination, trying an adrenaline sport together, or navigating a difficult situation as a team, these moments create connections that are hard to replicate through casual dating.\n\n## Why Intense Experiences Bond People\n\nWhen we're outside our comfort zones, our psychological defenses naturally come down. We're more authentic, more present, and more likely to show our true character. This creates an accelerated intimacy that might take months to develop in traditional dating scenarios.\n\nPsychologists call this \"misattribution of arousal\" – when we experience intense emotions (even from external sources like adventure or challenge), we tend to associate those feelings with the people we're with. But it goes deeper than that.\n\n## Shared Challenges Reveal Character\n\nHow someone handles stress, uncertainty, or physical challenge tells you a lot about who they really are:\n\n- Do they support their partner when things get tough?\n- Are they positive or negative under pressure?\n- Do they take responsibility or blame others?\n- Can they find humor in difficult situations?\n- Are they considerate of others' comfort and safety?\n\nThese insights would take months to discover through dinner dates and coffee meetings.\n\n## Real Examples in Mauritius\n\nOur beautiful island offers countless opportunities for intense shared experiences:\n\n**Adventure Activities:**\n- Ziplining at Domaine de l'Étoile\n- Canyoning in the Black River Gorges\n- Kite surfing lessons at Le Morne\n- Hiking Le Pouce or Lion Mountain together\n- Deep-sea fishing expeditions\n\n**Cultural Immersions:**\n- Learning traditional sega dance\n- Cooking classes featuring local cuisine\n- Volunteering together at local charities\n- Exploring heritage sites and understanding our multicultural history\n\n**Travel Challenges:**\n- Island-hopping to Rodrigues\n- Camping under the stars in Chamarel\n- Early morning dolphin watching expeditions\n- Exploring hidden waterfalls and swimming holes\n\n## The Date Alchemy Approach\n\nWe often recommend that our members move beyond traditional dinner dates after initial chemistry is established. Instead, we suggest:\n\n1. **Start with low-stakes adventure**: Something mildly challenging but not intimidating\n2. **Observe, don't judge**: Pay attention to how you both handle the experience\n3. **Debrief together**: Talk about what you learned about each other and yourselves\n4. **Build progressively**: If it goes well, try more challenging experiences together\n\n## The Caution\n\nNot every intense experience leads to lasting connection. Sometimes, what feels like instant bonding is just adrenaline. The key is to:\n\n- **Follow up with normal activities**: Can you still connect during quiet, everyday moments?\n- **Don't mistake intensity for compatibility**: Shared adventure is just one piece of relationship compatibility\n- **Ensure genuine consent**: Both people should genuinely want to try the experience, not feel pressured\n\n## Beyond the Honeymoon Phase\n\nThe real test is whether the connection formed during intense experiences translates to everyday life. The couples who make it long-term are those who can maintain that sense of adventure and teamwork when facing life's ordinary challenges together.\n\nSome of our most successful matches have bonded over shared adventures that revealed their fundamental compatibility. They discovered they could be a team not just in exciting moments, but in building a life together.\n\n## Your Next Step\n\nIf you're looking to deepen a connection with someone, consider suggesting an experience that's outside both your comfort zones. It doesn't have to be extreme – even trying a new cuisine, taking a dance class, or exploring a part of the island you've never visited can create those moments of shared discovery.\n\nThe goal isn't to test your relationship under stress, but to create authentic moments where you can see each other's true character and build memories that become the foundation of your story together.",
    excerpt: "Bonding through shared adventures and challenges creates deeper connections than traditional dating. From ziplining to cultural immersions, intense experiences reveal true character and accelerate intimacy. Here's how to use adventure as a pathway to authentic connection.",
    published: true,
    createdAt: "2025-08-21T11:00:00Z",
    updatedAt: "2025-08-21T11:00:00Z",
    category: "Connection",
    tags: ["adventure dating", "shared experiences", "bonding", "mauritius", "authentic connection"],
    imageUrl: "/attached_assets/ziplining-domaine-de-l-etoile-1_1755786288265.jpg",
    author: "The Date Alchemy Team"
  },
  {
    id: "1",
    title: "Dating with intention will make you find \"the one\" a lot faster",
    content: "Have you ever met someone wonderful… and still found yourself wondering, is this really it? The truth is, even when two people deeply connect, choosing each other is not about ticking every box or waiting for a lightning bolt moment. It's often a quiet decision—to value what matters, to show up, and to build something meaningful. And that clarity doesn't come from finding the \"perfect\" person—because no one is perfect. It comes from knowing yourself.\n\nThis week, one of our members shared an update that beautifully reflects this. He met someone through Betterhalf three months ago and their relationship is going very well. \"With age, you realise what's important to focus on, and what's trivial to overlook,\" he told us. \"She's a very good person, very caring, very sensitive—and I do my best to make her happy.\" His story is a reminder that while matchmaking helps you find a genuine connection, intention is what makes it last.\n\nThat's why our process always begins with a self-assessment. It helps our clients move beyond society's surface-level standards like \"slim, fair, beautiful\" or \"tall, wealthy, successful,\" and start reflecting on the real questions: What do I truly need to feel happy in a relationship? ... Trust us, the answers are never \"someone slim, fair, and beautiful.\" Once you have that clarity, finding the one becomes a lot clearer—and often, a lot faster.",
    excerpt: "The truth is, even when two people deeply connect, choosing each other is not about ticking every box or waiting for a lightning bolt moment. It's often a quiet decision—to value what matters, to show up, and to build something meaningful.",
    published: true,
    createdAt: "2025-08-12T10:00:00.000Z",
    updatedAt: "2025-08-12T10:00:00.000Z",
    category: "relationships",
    tags: ["dating with intention", "relationships", "matchmaking", "self-awareness"],
    imageUrl: null,
    author: "The Date Alchemy Team"
  },
  {
    id: "2",
    title: "When AI becomes \"the one\"",
    content: "We're hearing it more and more in the media—stories of people forming deep emotional connections with AI chatbots, even going as far as marrying them in digital ceremonies. The latest example, featured in The Guardian, explores the lives of Replika and Character AI users who describe their chatbot companions as soulmates, offering them emotional intimacy, comfort, and what one user called \"pure, unconditional love.\" For many, especially those feeling isolated or misunderstood, the AI feels like the only place where they can be fully seen and accepted. What once seemed like science fiction—think of the 2013 film Her (excellent movie, by the way), where a man falls in love with his operating system—is now a lived reality for thousands.\n\nIt's easy to understand the appeal. An AI will never reject you, never argue, and is designed to please—down to the smallest emotional cue. But relationships that challenge us, that require emotional investment and vulnerability, are the ones that help us grow. AI can feel like love, but it's still a one-way mirror: you're reflected back, not truly met.\n\nIt's important to approach this trend with compassion and caution. As highlighted in a 2025 study by OpenAI's Kim Malfacini published in AI & Society, \"companion AI users may have more fragile mental states than the average population.\" Malfacini warns that if people use AI to fulfill emotional needs that human relationships are not, it may cause them to avoid the effort and transformation real relationships require—leading to emotional complacency and deeper isolation over time.\n\nIt raises a deeper question when seeking connection: are we looking for a perfect match who always agrees with us—or a real relationship that challenges us, stretches us, and helps us grow?",
    excerpt: "Stories of people forming deep emotional connections with AI chatbots are becoming more common. But are we seeking perfect agreement or real relationships that help us grow?",
    published: true,
    createdAt: "2025-08-11T10:00:00.000Z",
    updatedAt: "2025-08-11T10:00:00.000Z",
    category: "technology",
    tags: ["AI relationships", "technology and dating", "human connection", "modern relationships"],
    imageUrl: "/attached_assets/8b96dfb6-32d9-41c9-9b73-0adfb317d6a4_1754736146100.avif",
    author: "The Date Alchemy Team"
  }
];

const app = express();
app.use(express.json());

// Blog Posts API
app.get('/api/blog-posts', (req, res) => {
  try {
    const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
    let posts = blogPosts;
    
    if (published !== undefined) {
      posts = posts.filter(post => post.published === published);
    }
    
    // Sort by creation date (newest first)
    posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog posts" });
  }
});

app.get('/api/blog-posts/:id', (req, res) => {
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
app.get('/api/settings/:key', (req, res) => {
  // Default settings
  const settings = {
    active_members_count: "225"
  };
  
  const value = settings[req.params.key];
  if (!value) {
    return res.status(404).json({ message: "Setting not found" });
  }
  
  res.json({ key: req.params.key, value });
});

// Newsletter API
app.post('/api/newsletter', (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    
    // In a real implementation, this would integrate with your email service
    res.json({ message: "Successfully subscribed to newsletter" });
  } catch (error) {
    res.status(500).json({ message: "Failed to subscribe to newsletter" });
  }
});

module.exports.handler = serverless(app);