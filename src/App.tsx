import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useCartSync } from "@/hooks/useCartSync";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import MeetTheFounder from "./pages/MeetTheFounder";
import Coaching from "./pages/Coaching";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import BlogPostsList from "./pages/admin/BlogPostsList";
import BlogPostEditor from "./pages/admin/BlogPostEditor";
import CategoriesManager from "./pages/admin/CategoriesManager";
import TagsManager from "./pages/admin/TagsManager";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useCartSync();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:handle" element={<ProductDetail />} />
      <Route path="/meet-the-founder" element={<MeetTheFounder />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<BlogPostsList />} />
        <Route path="posts/:id" element={<BlogPostEditor />} />
        <Route path="categories" element={<CategoriesManager />} />
        <Route path="tags" element={<TagsManager />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
