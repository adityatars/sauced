import { motion, useReducedMotion } from "framer-motion";

const logos = [
  { 
    name: "FamPay", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/fp.png" 
  },
  { 
    name: "Master's Union", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/mu.png" 
  },
  { 
    name: "Pernod Ricard", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/jm-removebg-preview.png" 
  },
  { 
    name: "Zomato", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/zm.png" 
  },
  { 
    name: "Siya", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/siya.jpeg" 
  },
  { 
    name: "MN", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/mn.png" 
  },
  { 
    name: "V", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/v.jpeg" 
  },
  { 
    name: "OX", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/ox.png" 
  },
  { 
    name: "Aditya Birla", 
    url: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/ad.jpeg" 
  },
];

// Duplicate logos for seamless infinite scroll (need at least 2 sets for smooth loop)
const duplicatedLogos = [...logos, ...logos];

const ClientsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="clients" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
            Our Clients
          </h2>
          <p className="text-foreground/70 text-sm md:text-base font-medium uppercase tracking-[2px] max-w-3xl mx-auto">
            Proudly partnering with leading brands worldwide
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Carousel */}
      {/* 
        FIXED: Using transform translateX with -50% to move exactly one set width (2 sets = 50% each)
        This creates seamless infinite loop. Animation starts immediately on component mount.
      */}
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={
              shouldReduceMotion
                ? {} // No animation if reduced motion preferred
                : {
                    x: [0, "-50%"], // Move exactly one set width (2 sets = 50% each)
                  }
            }
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Slow, premium feel
                ease: "linear",
              },
            }}
            style={{
              willChange: "transform",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 h-16 md:h-20 w-32 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
