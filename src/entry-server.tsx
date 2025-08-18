import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Photography from "./pages/Photography";
import ProductPhotography from "./pages/ProductPhotography";
import ItemPhotography from "./pages/ItemPhotography";
import VideoContent from "./pages/VideoContent";
import ECommerce from "./pages/ECommerce";
import WebDesign from "./pages/WebDesign";
import PhotoVideoService from "./pages/PhotoVideoService";
import WebDesignService from "./pages/WebDesignService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export function render(url: string) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: false,
      },
    },
  });

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/product-photography" element={<ProductPhotography />} />
            <Route path="/item-photography" element={<ItemPhotography />} />
            <Route path="/video" element={<VideoContent />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/photo-video-service" element={<PhotoVideoService />} />
            <Route path="/web-design-service" element={<WebDesignService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
  
  return { html };
}