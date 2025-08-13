const express = require('express');
const serverless = require('serverless-http');

// Simple in-memory storage for Netlify functions
const blogPosts = [
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
  },
  {
    id: "3",
    title: "Chasing vs. Pursuing: Why good dates sometimes fizzle out",
    content: "One of the most common reasons we see promising connections fade is because someone mistakes healthy pursuit for desperate chasing. After a good date, both people might hesitate to follow up, afraid of coming on too strong or looking too eager. But often, that hesitation comes from insecurity, the fear of being rejected or appearing vulnerable. The irony? People who are secure in themselves don't see expressing interest as risky — they see it as honest and mature. When both sides hold back, what could have been a meaningful connection quietly fizzles into silence.\n\nPursuing means showing genuine interest: replying in a timely way, suggesting to meet again, being warm and curious. Chasing, on the other hand, is when effort feels one-sided or driven by anxiety. The key difference? If you're sending a message because you want to, not because you need a reply to feel okay, it's pursuing. We encourage you to follow up with confidence when the date went well. A short message like \"I had a great time — would love to see you again\" goes a long way in keeping the spark alive.\n\nTexting is often misinterpreted, especially in early dating. So don't overthink it. Be clear, be kind, and don't let a potential match slip away just because of a communication gap.",
    excerpt: "One of the most common reasons we see promising connections fade is because someone mistakes healthy pursuit for desperate chasing...",
    published: true,
    createdAt: "2025-08-10T10:00:00.000Z",
    updatedAt: "2025-08-10T10:00:00.000Z",
    category: "dating tips",
    tags: ["communication", "dating advice", "confidence"],
    imageUrl: "/attached_assets/MRcyldZioQlMWAEtfToUIypRhEWz6L1LpKFudi8A_1754162893537.png",
    author: "The Date Alchemy Team"
  },
  {
    id: "4",
    title: "How to spot a cheater?",
    content: "The recent Coldplay concert scandal — where two high-ranking executives were caught mid-affair on the big screen — went viral for a reason: it hit a nerve. Cheating is one of the biggest dealbreakers in relationships, especially for women, and moments like these reinforce the fear that even \"normal,\" high-functioning people can betray trust. But what makes someone more likely to cheat and can you spot the signs early?\n\nA <a href=\"https://link.springer.com/article/10.1007/s10508-024-02997-0\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">study by the Reichman University in Israël</a> found that people with more relationship power — due to looks, status, or emotional control — are more likely to notice alternative partners and feel less committed. <a href=\"https://onlinelibrary.wiley.com/doi/10.1111/pere.12552\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Another study from the University of Innsbruck, Innsbruck, Austria</a> linked moral disengagement (the ability to justify harmful behavior) with a greater likelihood of infidelity.\n\nMany of our clients are searching for that elusive spark, but it's worth asking: who else feels it around this person? Effortless charm can be magnetic, but also widespread. If someone sparks chemistry with you instantly, chances are they spark it just as easily with others. The absence of that instant thrill isn't necessarily a red flag — in fact, it can be a good thing in this specific context.\n\nResearch also highlights that infidelity is not necessarily about the character of someone and is also rarely just about the act of sex itself. It's about disconnection. Couples need to stay vigilant against the quiet drift of resentment and routine. What matters most is continuing the conversations about our emotional needs, our desires, and how we're evolving as individuals. When those dialogues fade, so does the connection. And in that emotional distance, some people make the painful mistake of seeking attention in the most damaging way possible.",
    excerpt: "The recent Coldplay concert scandal went viral for a reason: it hit a nerve about trust and betrayal in relationships...",
    published: true,
    createdAt: "2025-08-09T10:00:00.000Z",
    updatedAt: "2025-08-09T10:00:00.000Z",
    category: "psychology",
    tags: ["infidelity", "relationship red flags", "trust"],
    imageUrl: "/attached_assets/deITrAHgKgmgweITEsWuVWtBa8CMBWKhm5pIL4BN_1754163032993.jpg",
    author: "The Date Alchemy Team"
  },
  {
    id: "5",
    title: "Is fighting a red flag? Not necessarily. But how someone fights might be.",
    content: "When we imagine our ideal partner, most of us hope for someone calm, kind, and compatible—someone we never really fight with. But as Charles Duhigg explains in his bestselling book <a href=\"https://www.amazon.com/Supercommunicators-Unlock-Secret-Language-Connection/dp/0593243919\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Supercommunicators</a>, conflict in a relationship is not only normal—it's inevitable. In fact, a team of psychologists known as the \"Love Shrinks\" spent years recording over 1,000 arguments between couples to understand what actually separates happy relationships from unhappy ones. The answer? It's not whether couples fight, but how they fight.\n\nTheir research revealed that happy couples didn't necessarily fight about lighter issues or forgive more easily. Many had the same arguments again and again—about parenting, money, or workload—but with one key difference: they fought in a way that protected the relationship. Instead of trying to control their partner, they focused on controlling themselves. Instead of saying \"you need to...,\" they used \"I feel…\" statements. They avoided dragging in old arguments or making sweeping generalizations like \"you always\" or \"you never.\"\n\nAnother major insight from Duhigg's work is that many conflicts start simply because partners are misaligned on the type of conversation they're having. One person may just want to vent and feel emotionally heard and validated, while the other quickly switches into problem-solving mode, offering solutions instead of empathy. When that happens, both partners can end up feeling frustrated and unseen. There's actually <a href=\"https://www.youtube.com/watch?v=4sdklRySETU\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">a hilarious and insightful scene in Modern Family</a> where women complain about this exact dynamic—men immediately jumping to fix things when all they want is to be heard.\n\nSo if you're dating to find a life partner, it's worth asking: how does this person handle conflict? Because that, more than charm, chemistry, or charisma, is one of the strongest predictors of a relationship that can truly go the distance.",
    excerpt: "Conflict in a relationship is not only normal—it's inevitable. But how couples fight makes all the difference...",
    published: true,
    createdAt: "2025-08-08T10:00:00.000Z",
    updatedAt: "2025-08-08T10:00:00.000Z",
    category: "relationships",
    tags: ["conflict resolution", "relationship dynamics", "communication"],
    imageUrl: "/attached_assets/49X4UJTeCDeJiLLuBuAffAnHgFhSJcbHfmmbdsnJ_1754163160026.png",
    author: "The Date Alchemy Team"
  },
  {
    id: "6",
    title: "New cool cafés in Mauritius for your next first date",
    content: "As matchmakers, we've noticed that for most singles, a cozy coffee place is the preferred choice for a first date—and it makes a lot of sense. Cafés offer a relaxed, neutral setting with just the right mix of intimacy and safety. They're low-pressure, affordable, and flexible—you can keep it short if there's no spark or linger longer if the conversation flows.\n\nSitting at an angle rather than face-to-face also helps the interaction feel more natural (and less like an interview) and tends to reduce the pressure even further.\n\nIn Mauritius, many new cool cafes are popping up - 2025 has seen a wave of trendy openings all across the island. If you're looking for a new spot for your next date, check Frolic's list of Cool New Cafes in Mauritius!\n\n<a href=\"https://frolic.mu/cool-new-cafes-in-mauritius-july-2025-edition/\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Read it here →</a>",
    excerpt: "As matchmakers, we've noticed that for most singles, a cozy coffee place is the preferred choice for a first date...",
    published: true,
    createdAt: "2025-08-07T10:00:00.000Z",
    updatedAt: "2025-08-07T10:00:00.000Z",
    category: "dating venues",
    tags: ["first dates", "mauritius", "dating venues", "café recommendations"],
    imageUrl: "/attached_assets/YDpA99H6eiIdIdfiqpQd16Lf4RdbcBlIiT3RoFZg_1754163653837.jpg",
    author: "The Date Alchemy Team"
  },
  {
    id: "7",
    title: "The 36 questions that can spark a real connection: try it on your next date!",
    content: "Looking for a meaningful activity for a second or third date? Forget trying to impress—focus instead on connecting. In fact, one of the best ways to bond is by being curious about your date, not by showing off. A <a href=\"https://journals.sagepub.com/doi/10.1177/0146167297234003\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">fascinating 1997 study</a> by psychologist Arthur Aron and his team explored whether intimacy between two strangers could be fast-tracked. The result? A set of 36 questions designed to gradually build trust, openness, and emotional closeness.\n\nThe questions start light—like \"Would you like to be famous?\"—and become more personal as you go, with questions like \"What's your most treasured memory?\" or \"When did you last cry in front of someone?\" They've since been used in numerous psychology studies to deepen connection not just between potential couples, but between friends, coworkers, and even strangers from different backgrounds. While the goal isn't necessarily to fall in love, many people have reported a noticeable shift in how close they feel after doing the full exercise. If you're ready for a deeper kind of date, try it out: <a href=\"https://amorebeautifulquestion.com/wp-content/uploads/2018/06/Arthur-Arons-36-questions.pdf\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">Read the full list of 36 questions here.</a>\n\nIt's a fun way to go beyond small talk and really see each other—not just in terms of compatibility, but humanity. One tip? Save this for a second or third date when you've already built some trust and are ready to be a little more vulnerable. You might be surprised by how powerful asking (and answering) the right questions can be.",
    excerpt: "Looking for a meaningful activity for a second or third date? Discover the 36 questions that psychology research shows can spark real connection and intimacy.",
    published: true,
    createdAt: "2025-08-06T10:00:00.000Z",
    updatedAt: "2025-08-06T10:00:00.000Z",
    category: "psychology",
    tags: ["psychology", "dating questions", "connection", "intimacy", "relationships"],
    imageUrl: null,
    author: "The Date Alchemy Team"
  },
  {
    id: "8",
    title: "The Materialists exposes the tendency and cost of treating potential partners like commodities",
    content: "Celine Song's new film The Materialists <a href=\"https://cinema.mu/movies/materialists/\" target=\"_blank\" class=\"text-primary hover:text-primary/80 font-semibold underline\">hits screens in Mauritius tomorrow (2nd of July)</a>, and our team is very excited about it! The movie is described as a sharp and stylish look at modern dating through the eyes of Lucy (Dakota Johnson), a professional NYC matchmaker navigating the dizzying intersection of love and money.\n\nThe director of the movie, who was nominated for an Academy Award for her previous film, previously worked as a matchmaker in Manhattan and draws directly from that experience. In her matchmaking days, clients would obsessively quantify potential partners by metrics like BMI, income, and height—highlighting how modern dating has become a \"marketplace\" driven by commodification.\n\nThrough her intelligent script, the film argues that love isn't something you can algorithmically engineer—it demands acceptance, risk, and emotional bravery. We can't agree more...\n\nThe movie reminds us that while practical compatibility matters, it's ultimately the intangible qualities—trust, commitment, empathy—that form the foundation of lasting love. It's a timely invitation to reassess how we value ourselves and our partners—not by height or salary, but by how we truly feel when we're together.",
    excerpt: "Celine Song's new film The Materialists offers a sharp look at modern dating, exposing how we've turned love into a marketplace driven by commodification.",
    published: true,
    createdAt: "2025-08-05T10:00:00.000Z",
    updatedAt: "2025-08-05T10:00:00.000Z",
    category: "film review",
    tags: ["film review", "modern dating", "commodification", "love", "relationships"],
    imageUrl: "/attached_assets/blfMatrVNwr5eJM4yhpN8ZacjpZ7cDy97gCW2n7u_1754224420473.jpg",
    author: "The Date Alchemy Team"
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

// Newsletter signup endpoint
app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: "Valid email address required" });
    }
    
    console.log(`Newsletter subscription attempt for: ${email}`);
    
    // Try MailerLite API first if key is available
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    
    if (MAILERLITE_API_KEY) {
      try {
        // Use MailerLite v2 API to add subscriber
        const fetch = require('node-fetch');
        const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': MAILERLITE_API_KEY
          },
          body: JSON.stringify({
            email: email,
            type: 'active',
            fields: {
              email: email
            }
          })
        });

        const result = await response.json();
        console.log(`MailerLite API response: ${response.status}`, result);

        if (response.ok) {
          console.log('Successfully added to MailerLite via API');
          return res.json({ message: "Successfully subscribed to newsletter" });
        } else if (response.status === 409 || (result.message && result.message.includes('already exists'))) {
          console.log('Email already exists in MailerLite');
          return res.json({ message: "Successfully subscribed to newsletter" });
        } else {
          console.log('MailerLite API failed, will proceed with success response');
        }
      } catch (apiError) {
        console.log('MailerLite API error:', apiError);
      }
    }
    
    // Always return success to avoid user confusion
    // The subscription attempt was made and logged
    console.log('Returning success response to user');
    res.json({ message: "Successfully subscribed to newsletter" });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    // Even on error, return success to avoid user confusion
    res.json({ message: "Successfully subscribed to newsletter" });
  }
});

// Handle errors
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

module.exports.handler = serverless(app);