import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import RebrandBanner from "@/components/layout/rebrand-banner";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
    queryFn: async () => {
      const response = await fetch("/api/blog-posts?published=true");
      if (!response.ok) throw new Error("Failed to fetch blog posts");
      return response.json();
    },
  });

  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  }) || [];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Successfully subscribed!",
          description: "You'll receive our bi-weekly dating tips straight to your inbox.",
        });
        setEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: result.message || "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <RebrandBanner />
        <Header />
        <div className="pb-20" style={{ paddingTop: '120px' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 rounded-xl h-64 skeleton"></div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <RebrandBanner />
      <Header />
      
      <section className="py-20 bg-white" style={{ paddingTop: '120px' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Dating Insights & Tips</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, scientific insights, and practical tips for intentional dating and meaningful relationships.
            </p>
          </div>

          {/* Search */}
          <div className="flex justify-center mb-12">
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>

          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-gray-50 rounded-xl overflow-hidden hover-lift cursor-pointer transition-transform hover:scale-105">
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-500">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                        Read More →
                      </Button>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="py-32 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6 subtitle">The Smarter Way to Date — Straight to Your Inbox</h2>
              <p className="text-xl text-gray-300 mb-12 body-text">Join 1,000+ Smart Singles Getting Bi-Weekly Dating Tips</p>
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 sm:rounded-r-none focus:ring-primary text-gray-900 h-14 text-lg"
                  disabled={isSubmitting}
                  required
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 px-8 sm:rounded-l-none h-14 text-lg font-semibold whitespace-nowrap"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              <div className="text-sm text-gray-400 mt-4">
                By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
