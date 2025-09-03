import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
// Removed admin auth - using URL-based access
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useLocation();
  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'All Articles', href: '/admin/articles', icon: FileText },
    { name: 'Add Article', href: '/admin/add-article', icon: PlusCircle },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">CMS Admin</h1>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="flex-1 mt-6 px-3 overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSidebarOpen(false)}
                    data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-3 mt-auto border-t bg-gray-50">
          <Button
            variant="outline"
            className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
            onClick={() => {
              sessionStorage.removeItem('admin_authenticated');
          sessionStorage.removeItem('admin_token');
              window.location.href = '/admin/login';
            }}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b lg:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold">The Date Alchemy CMS</h1>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}