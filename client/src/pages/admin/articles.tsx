import { useState } from 'react';
import { Link } from 'wouter';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { makeAuthenticatedRequest } from '@/hooks/use-admin-auth';
import AdminLayout from '@/components/admin/admin-layout';
import { 
  Search, 
  Plus, 
  Pencil, 
  Trash2, 
  Eye,
  Filter
} from 'lucide-react';
import type { BlogPost } from '../../../shared/schema';

export default function AdminArticles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: articles, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['admin-articles'],
    queryFn: async () => {
      const response = await makeAuthenticatedRequest('/api/blog-posts');
      if (!response.ok) throw new Error('Failed to fetch articles');
      return response.json();
    },
  });

  const deleteArticleMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await makeAuthenticatedRequest(`/api/blog-posts/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete article');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-articles'] });
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast({
        title: "Article deleted successfully",
        description: "The article has been removed from the database.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to delete article",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Filter articles based on search and status
  const filteredArticles = articles?.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'published' && article.published) ||
                         (statusFilter === 'draft' && !article.published);
    
    return matchesSearch && matchesStatus;
  }) || [];

  const handleDeleteConfirm = (article: BlogPost) => {
    if (window.confirm(`Are you sure you want to delete "${article.title}"? This action cannot be undone.`)) {
      deleteArticleMutation.mutate(article.id);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Articles</h1>
            <p className="text-gray-600">Manage your blog content</p>
          </div>
          <Link href="/admin/secure-access-4122/add-article">
            <Button className="flex items-center gap-2" data-testid="button-add-new">
              <Plus className="w-4 h-4" />
              Add New Article
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                    data-testid="input-search"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
                <SelectTrigger className="w-full md:w-48" data-testid="select-status-filter">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Articles</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Drafts</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Articles List */}
        <Card>
          <CardHeader>
            <CardTitle>
              {filteredArticles.length} Article{filteredArticles.length !== 1 ? 's' : ''}
              {statusFilter !== 'all' && ` (${statusFilter})`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-gray-500">Loading articles...</p>
              </div>
            ) : filteredArticles.length > 0 ? (
              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    data-testid={`article-${article.id}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{article.title}</h3>
                        <Badge variant={article.published ? "default" : "secondary"}>
                          {article.published ? "Published" : "Draft"}
                        </Badge>
                        {article.category && (
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Created: {new Date(article.createdAt).toLocaleDateString()}</span>
                        <span>Updated: {new Date(article.updatedAt).toLocaleDateString()}</span>
                        {article.tags.length > 0 && (
                          <span>Tags: {article.tags.slice(0, 3).join(', ')}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      {article.published && (
                        <Link href={`/blog/${article.id}`} target="_blank">
                          <Button
                            variant="outline"
                            size="sm"
                            data-testid={`button-view-${article.id}`}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                      )}
                      <Link href={`/admin/edit-article/${article.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          data-testid={`button-edit-${article.id}`}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteConfirm(article)}
                        disabled={deleteArticleMutation.isPending}
                        className="text-red-600 hover:text-red-700"
                        data-testid={`button-delete-${article.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'No articles found' 
                    : 'No articles yet'
                  }
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchTerm || statusFilter !== 'all'
                    ? 'Try adjusting your search or filter criteria'
                    : 'Create your first article to get started'
                  }
                </p>
                {!searchTerm && statusFilter === 'all' && (
                  <Link href="/admin/secure-access-4122/add-article">
                    <Button>Create First Article</Button>
                  </Link>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}