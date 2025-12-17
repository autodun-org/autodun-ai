import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import EVChargerFinder from "./pages/EVChargerFinder";
import MOTPredictor from "./pages/MOTPredictor";
import DataUsage from "./pages/DataUsage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Existing tool pages */}
          <Route path="/ev-charger-finder" element={<EVChargerFinder />} />
          <Route path="/mot-predictor" element={<MOTPredictor />} />
          <Route path="/data-usage" element={<DataUsage />} />
          <Route path="/about" element={<About />} />

          {/* ✅ Add missing routes used by Header links (temporary mapping) */}
          <Route path="/for-drivers" element={<EVChargerFinder />} />
          <Route path="/for-councils" element={<DataUsage />} />
          <Route path="/roadmap" element={<DataUsage />} />
          <Route path="/contact" element={<About />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
