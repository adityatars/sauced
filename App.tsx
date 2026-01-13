import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import FootwearDevelopment from "./pages/services/FootwearDevelopment";
import ApparelSourcing from "./pages/services/ApparelSourcing";
import B2BCustomGifting from "./pages/services/B2BCustomGifting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Page transition variants for premium feel
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 0.5,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/footwear-development" element={<FootwearDevelopment />} />
          <Route path="/services/apparel-sourcing" element={<ApparelSourcing />} />
          <Route path="/services/b2b-custom-gifting" element={<B2BCustomGifting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
