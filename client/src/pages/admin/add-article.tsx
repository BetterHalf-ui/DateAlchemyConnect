import { useState } from 'react';
import { useLocation } from 'wouter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
// Removed auth dependency - using direct API calls
import AdminLayout from '@/components/admin/admin-layout';
import ImageUpload from '@/components/admin/image-upload';
import RichTextEditor from '@/components/admin/rich-text-editor';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import type { InsertBlogPost } from '@shared/schema';

export default function AddArticle() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState<InsertBlogPost>({
    title: '',
    content: '',
    excerpt: '',
    imageUrl: null,
    category: '',
    tags: [],
    published: false,
  });

  const [urlSlug, setUrlSlug] = useState('');

  // Auto-generate URL slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev: InsertBlogPost) => ({ ...prev, title }));
    if (!urlSlug || urlSlug === generateSlug(formData.title)) {
      setUrlSlug(generateSlug(title));
    }
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
    setFormData((prev: InsertBlogPost) => ({ ...prev, tags }));
  };

  const createArticleMutation = useMutation({
    mutationFn: async (data: InsertBlogPost) => {
      console.log('Creating article with data:', data);
      
      const response = await fetch('/api/blog-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const responseText = await response.text();
        console.log('Error response text:', responseText);
        
        try {
          const errorData = JSON.parse(responseText);
          throw new Error(errorData.message || 'Failed to create article');
        } catch (parseError) {
          throw new Error(`Server error: ${response.status} - Response was not valid JSON: ${responseText.substring(0, 200)}`);
        }
      }

      const responseText = await response.text();
      console.log('Success response text:', responseText);
      
      try {
        return JSON.parse(responseText);
      } catch (parseError) {
        throw new Error(`Success response was not valid JSON: ${responseText.substring(0, 200)}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-articles'] });
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast({
        title: "Article created successfully!",
        description: "Your new article has been saved to the database.",
      });
      setLocation('/admin/blog');
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to create article",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim() || !formData.excerpt.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in title, excerpt, and content.",
        variant: "destructive",
      });
      return;
    }

    createArticleMutation.mutate(formData);
  };

  const handleSaveDraft = () => {
    const draftData = { ...formData, published: false };
    createArticleMutation.mutate(draftData);
  };

  const handlePublish = () => {
    const publishData = { ...formData, published: true };
    createArticleMutation.mutate(publishData);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => setLocation('/admin/blog')}
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create New Article</h1>
              <p className="text-gray-600">Write and publish a new blog post</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Article Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Title */}
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      placeholder="Enter article title"
                      required
                      data-testid="input-title"
                    />
                  </div>

                  {/* URL Slug */}
                  <div>
                    <Label htmlFor="slug">URL Slug</Label>
                    <Input
                      id="slug"
                      value={urlSlug}
                      onChange={(e) => setUrlSlug(e.target.value)}
                      placeholder="url-friendly-slug"
                      data-testid="input-slug"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Preview: /blog/{urlSlug || 'your-article-slug'}
                    </p>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <Label htmlFor="excerpt">Excerpt/Meta Description *</Label>
                    <Input
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData((prev: InsertBlogPost) => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Brief summary of the article"
                      required
                      data-testid="input-excerpt"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      This will be used for SEO and article previews
                    </p>
                  </div>

                  {/* Content Editor */}
                  <div>
                    <Label>Article Content *</Label>
                    <RichTextEditor
                      value={formData.content}
                      onChange={(content) => setFormData((prev: InsertBlogPost) => ({ ...prev, content }))}
                      placeholder="Write your article content here..."
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="published">Publish immediately</Label>
                    <Switch
                      id="published"
                      checked={formData.published}
                      onCheckedChange={(published) => setFormData((prev: InsertBlogPost) => ({ ...prev, published }))}
                      data-testid="switch-published"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    {formData.published 
                      ? "Article will be visible on the website"
                      : "Save as draft for later publishing"
                    }
                  </p>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <ImageUpload
                    onImageUploaded={(url) => setFormData((prev: InsertBlogPost) => ({ ...prev, imageUrl: url || null }))}
                    currentImageUrl={formData.imageUrl || undefined}
                  />
                </CardContent>
              </Card>

              {/* Article Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Article Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Category */}
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={formData.category || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="e.g., Dating Tips, Relationships"
                      data-testid="input-category"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      value={(formData.tags || []).join(', ')}
                      onChange={(e) => handleTagsChange(e.target.value)}
                      placeholder="dating, relationships, tips (comma-separated)"
                      data-testid="input-tags"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button
                      type="button"
                      onClick={handlePublish}
                      disabled={createArticleMutation.isPending}
                      className="w-full"
                      data-testid="button-publish"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {createArticleMutation.isPending ? 'Publishing...' : 'Publish Now'}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleSaveDraft}
                      disabled={createArticleMutation.isPending}
                      className="w-full"
                      data-testid="button-save-draft"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save as Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}