import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Photography from "./pages/Photography";
import ProductPhotography from "./pages/ProductPhotography";
import ItemPhotography from "./pages/ItemPhotography";
import VideoContent from "./pages/VideoContent";
import ECommerce from "./pages/ECommerce";
import WebDesign from "./pages/WebDesign";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/product-photography" element={<ProductPhotography />} />
          <Route path="/item-photography" element={<ItemPhotography />} />
          <Route path="/video" element={<VideoContent />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
