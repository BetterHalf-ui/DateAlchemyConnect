import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import I18nProvider from "@/components/i18n/i18n-provider";
import { useAnalytics } from "@/hooks/use-analytics";

import Home from "@/pages/home";
import Network from "@/pages/network";
import HowItWorks from "@/pages/how-it-works";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import PrivacyPolicy from "@/pages/privacy-policy";
import RebrandAnnouncement from "@/pages/rebrand-announcement";
import MatchmakingMauritius from "@/pages/matchmaking-mauritius";

import BlogAdmin from "@/components/admin/blog-admin";
import AdminDashboard from "@/pages/admin/dashboard";
import AddArticle from "@/pages/admin/add-article";
import AdminArticles from "@/pages/admin/articles";
import AdminLogin from "@/pages/admin/login";
import AdminSettings from "@/pages/admin/settings";
import AdminEvents from "@/pages/admin/events";
import ProtectedRoute from "@/components/admin/protected-route";
import FaviconPreview from "@/components/favicon-preview";
import SinglesSocials from "@/pages/events/singles-socials";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/network" component={Network} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/rebrand-announcement" component={RebrandAnnouncement} />
      <Route path="/matchmaking-mauritius" component={MatchmakingMauritius} />
      <Route path="/dating-mauritius" component={MatchmakingMauritius} />
      
      {/* Events Routes */}
      <Route path="/events/singlessocials" component={SinglesSocials} />
      
      {/* Admin Routes - Password Protected */}
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={() => <ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/add-article" component={() => <ProtectedRoute><AddArticle /></ProtectedRoute>} />
      <Route path="/admin/articles" component={() => <ProtectedRoute><AdminArticles /></ProtectedRoute>} />
      <Route path="/admin/events" component={() => <ProtectedRoute><AdminEvents /></ProtectedRoute>} />
      <Route path="/admin/settings" component={() => <ProtectedRoute><AdminSettings /></ProtectedRoute>} />
      <Route path="/admin" component={AdminLogin} />
      

      
      <Route path="/favicon-preview" component={FaviconPreview} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <I18nProvider>
            <Toaster />
            <Router />
        </I18nProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
