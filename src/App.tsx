import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { logos } from "@/lib/logoData";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Team = lazy(() => import("./pages/Team"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Merchandise = lazy(() => import("./pages/Merchandise"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
              <img 
                src={logos.sphuran} 
                alt="SPHURAN 4.0 - Electrical Engineers' Society IIEST Shibpur Logo" 
                className="h-24 w-24 object-contain animate-pulse mx-auto mb-4"
              />
              <p className="text-muted-foreground text-sm">Loading...</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/merch" element={<Merchandise />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
