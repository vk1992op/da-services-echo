import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import AIAgents from "./pages/services/AIAgents";
import ProcessAutomation from "./pages/services/ProcessAutomation";
import BusinessAnalytics from "./pages/services/BusinessAnalytics";
import DepartmentAsService from "./pages/services/DepartmentAsService";
import MVPDevelopment from "./pages/services/MVPDevelopment";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services/ai-agents" element={<AIAgents />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/business-analytics" element={<BusinessAnalytics />} />
          <Route path="/services/department-as-service" element={<DepartmentAsService />} />
          <Route path="/services/mvp-development" element={<MVPDevelopment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
