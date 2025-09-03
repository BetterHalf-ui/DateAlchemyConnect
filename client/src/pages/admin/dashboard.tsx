import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, FileText, Users, Settings, Calendar } from 'lucide-react';
import { makeAuthenticatedRequest } from '@/hooks/use-admin-auth';
import AdminLayout from '@/components/admin/admin-layout';
import type { BlogPost } from '../../../shared/schema';

interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalViews?: number;
}

export default function AdminDashboard() {
  const { data: articles, isLoading: articlesLoading } = useQuery<BlogPost[]>({
    queryKey: ['admin-articles'],
    queryFn: async () => {
      const response = await makeAuthenticatedRequest('/api/blog-posts');
      if (!response.ok) throw new Error('Failed to fetch articles');
      return response.json();
    },
  });

  const { data: stats, isLoading: statsLoading } = useQuery<DashboardStats>({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const response = await makeAuthenticatedRequest('/api/admin/stats');
      if (!response.ok) throw new Error('Failed to fetch stats');
      return response.json();
    },
  });

  const recentArticles = articles?.slice(0, 5) || [];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Manage your blog content and settings</p>
          </div>
          <Link href="/admin/add-article">
            <Button className="flex items-center gap-2" data-testid="button-add-article">
              <PlusCircle className="w-4 h-4" />
              Add New Article
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
              <FileText className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="stat-total-articles">
                {statsLoading ? '...' : stats?.totalArticles || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                All articles in the system
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600" data-testid="stat-published-articles">
                {statsLoading ? '...' : stats?.publishedArticles || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                Live on the website
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drafts</CardTitle>
              <FileText className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600" data-testid="stat-draft-articles">
                {statsLoading ? '...' : stats?.draftArticles || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                Unpublished articles
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Members</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">225</div>
              <p className="text-xs text-muted-foreground">
                Current members
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Articles */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Articles</CardTitle>
            <Link href="/admin/blog/articles">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {articlesLoading ? (
              <p className="text-center py-4 text-gray-500">Loading articles...</p>
            ) : recentArticles.length > 0 ? (
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    data-testid={`article-item-${article.id}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{article.title}</h3>
                        <Badge variant={article.published ? "default" : "secondary"}>
                          {article.published ? "Published" : "Draft"}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{article.excerpt}</p>
                      <p className="text-xs text-gray-400">
                        Created: {new Date(article.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/admin/edit-article/${article.id}`}>
                        <Button variant="outline" size="sm" data-testid={`button-edit-${article.id}`}>
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No articles yet</p>
                <Link href="/admin/blog/add-article">
                  <Button>Create your first article</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/admin/blog/add-article">
                <Button variant="outline" className="w-full flex items-center gap-2" data-testid="quick-action-add">
                  <PlusCircle className="w-4 h-4" />
                  Create New Article
                </Button>
              </Link>
              <Link href="/admin/blog/articles">
                <Button variant="outline" className="w-full flex items-center gap-2" data-testid="quick-action-manage">
                  <FileText className="w-4 h-4" />
                  Manage Articles
                </Button>
              </Link>
              <Button variant="outline" className="w-full flex items-center gap-2" data-testid="quick-action-settings">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}