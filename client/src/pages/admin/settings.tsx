import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AdminLayout from '@/components/admin/admin-layout';
import { Save, Users, RefreshCw } from 'lucide-react';

export default function AdminSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [activeMembersCount, setActiveMembersCount] = useState('');

  const { data: currentMembersCount, isLoading } = useQuery<number>({
    queryKey: ['active-members-count'],
    queryFn: async () => {
      const response = await fetch('/api/settings/active_members_count');
      if (!response.ok) throw new Error('Failed to fetch member count');
      const data = await response.json();
      const count = parseInt(data.value) || 225;
      setActiveMembersCount(count.toString());
      return count;
    },
  });

  const updateMembersCountMutation = useMutation({
    mutationFn: async (newCount: string) => {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'active_members_count', value: newCount }),
      });
      if (!response.ok) throw new Error('Failed to update member count');
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Active members count updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ['active-members-count'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update member count. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleUpdateMembersCount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeMembersCount.trim() || isNaN(parseInt(activeMembersCount))) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid number",
        variant: "destructive",
      });
      return;
    }
    updateMembersCountMutation.mutate(activeMembersCount);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your website settings and configurations</p>
          </div>
        </div>

        {/* Active Members Count */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Active Members Count
            </CardTitle>
            <p className="text-sm text-gray-600">
              Update the active members count displayed on your website homepage
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpdateMembersCount} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="membersCount">Active Members Count</Label>
                <div className="flex gap-4">
                  <Input
                    id="membersCount"
                    type="number"
                    placeholder="225"
                    value={activeMembersCount}
                    onChange={(e) => setActiveMembersCount(e.target.value)}
                    className="max-w-xs"
                    min="0"
                    data-testid="input-members-count"
                  />
                  <Button 
                    type="submit"
                    disabled={updateMembersCountMutation.isPending}
                    data-testid="button-update-members"
                  >
                    {updateMembersCountMutation.isPending ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Update Count
                      </>
                    )}
                  </Button>
                </div>
                {isLoading ? (
                  <p className="text-sm text-gray-500">Loading current count...</p>
                ) : (
                  <p className="text-sm text-gray-500">
                    Current count: <span className="font-medium">{currentMembersCount}</span>
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <p className="text-sm text-gray-600">
              How the member count will appear on your homepage
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg border">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Community</h3>
                <p className="text-gray-600 mb-4">
                  Connect with{' '}
                  <span className="font-bold text-orange-600">
                    {activeMembersCount || currentMembersCount || 225}+
                  </span>{' '}
                  successful professionals
                </p>
                <div className="text-sm text-gray-500">
                  This count appears on your website homepage
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Settings */}
        <Card>
          <CardHeader>
            <CardTitle>More Settings</CardTitle>
            <p className="text-sm text-gray-600">
              Additional website settings and configurations
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-center py-8">
              More settings will be available here in future updates
            </p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}