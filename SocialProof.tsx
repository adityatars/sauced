import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const logos = [
  { name: "Famypay", alt: "Famypay logo" },
  { name: "Pernod Ricard", alt: "Pernod Ricard Jameson logo" },
  { name: "Zomato", alt: "Zomato logo" },
  { name: "Masters' Union", alt: "Masters' Union logo" },
];

const testimonials = [
  {
    id: 1,
    quote: "Sauced took our design intent and turned it into production-ready footwear. No ambiguity, no surprises—just execution. They understood what we wanted from day one.",
    name: "Brand Founder",
    title: "CEO",
    company: "UK Footwear Label",
  },
  {
    id: 2,
    quote: "They de-risked Indian manufacturing for us. Transparent pricing, vetted factories, and a single point of contact throughout. We finally have a partner we can rely on.",
    name: "Sourcing Lead",
    title: "Head of Sourcing",
    company: "European Fashion Brand",
  },
  {
    id: 3,
    quote: "From sampling to delivery, the entire process was structured and predictable. We've finally found a sourcing partner we trust to deliver on time, every time.",
    name: "Product Manager",
    title: "Operations Director",
    company: "D2C Lifestyle Brand",
  },
];

const SocialProof = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Trusted By Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-foreground/70 text-sm md:text-base font-medium uppercase tracking-[2px] mb-8">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Placeholder for actual logos */}
                <div 
                  className="h-16 md:h-20 flex items-center justify-center px-6 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                  title={logo.alt}
                >
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground/40 group-hover:text-foreground transition-colors duration-300">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16">
          {/* Desktop Grid with glassmorphism and parallax depth */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -8,
                  rotateY: index === 0 ? 3 : index === 2 ? -3 : 0,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)"
                }}
                className="p-10 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${index * 10}px)`
                }}
              >
                <div className="text-sauce text-6xl font-serif leading-none mb-6 opacity-30">"</div>
                <p className="text-foreground/90 text-lg md:text-xl italic leading-[1.7] mb-8">
                  {testimonial.quote}
                </p>
                <footer className="mt-auto">
                  <cite className="not-italic">
                    <p className="text-foreground font-semibold text-base">{testimonial.name}</p>
                    <p className="text-foreground/60 text-sm">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div 
            className="lg:hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <blockquote className="p-8 rounded-lg bg-slate/5 border border-slate/20">
                  <div className="text-sauce text-4xl font-serif leading-none mb-4">"</div>
                  <p className="text-foreground/90 text-lg italic leading-[1.6] mb-6">
                    {testimonials[activeIndex].quote}
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <p className="text-foreground font-semibold">{testimonials[activeIndex].name}</p>
                      <p className="text-foreground/70 text-sm">
                        {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                      </p>
                    </cite>
                  </footer>
                </blockquote>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-slate/30 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sauce focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sauce",
                      index === activeIndex ? "bg-sauce w-6" : "bg-slate/40 hover:bg-slate/60"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-slate/30 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sauce focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;