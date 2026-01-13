import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GoogleCalendarModal, { useGoogleCalendarModal } from "@/components/GoogleCalendarModal";
import { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const { isOpen, openModal, closeModal } = useGoogleCalendarModal();
  const containerRef = useRef<HTMLElement>(null);
  const [showCTAs, setShowCTAs] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCTAs(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section 
        ref={containerRef}
        className="relative min-h-screen flex items-start justify-center overflow-hidden bg-carbon pt-[65vh] md:pt-[72vh]"
      >
        {/* Video Background with parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: videoScale, opacity: videoOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/30 via-transparent to-carbon/50 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster=""
            aria-label="Sauced brand hero video showcasing footwear and apparel products"
          >
            <source src="https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/Sauced%20hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* CTAs - Premium animation after 4 seconds, positioned below visual center */}
        <motion.div 
          className="relative z-20 flex flex-col sm:flex-row items-center gap-4 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ 
            opacity: showCTAs ? 1 : 0, 
            y: showCTAs ? 0 : 30,
            scale: showCTAs ? 1 : 0.95
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.6 },
            scale: { duration: 0.8 }
          }}
        >
          <motion.div
            animate={showCTAs ? { 
              boxShadow: [
                "0 0 20px rgba(255,57,24,0.3)",
                "0 0 40px rgba(255,57,24,0.5)",
                "0 0 20px rgba(255,57,24,0.3)",
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full"
          >
            <Button 
              size="xl" 
              className="bg-sauce text-quartz hover:bg-sauce/90 rounded-full font-semibold px-10 py-6 text-lg hover:scale-105 transition-all duration-300"
              onClick={openModal}
            >
              <span className="group inline-flex items-center">
                Book Your 1st Free Discovery Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </motion.div>
          <Button 
            size="xl" 
            className="border border-quartz/30 bg-quartz/10 backdrop-blur-sm text-quartz hover:bg-quartz/20 hover:border-quartz/50 rounded-full font-semibold px-10 py-6 text-lg transition-all duration-300"
            asChild
          >
            <a href="#expertise">Explore Services</a>
          </Button>
        </motion.div>
      </section>

      <GoogleCalendarModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default HeroSection;
