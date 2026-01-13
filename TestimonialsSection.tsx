import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "End-to-end merchandise partnership including student onboarding kits and convocation gifting sneakers. Designed as a long-term collaboration, the merch reinforced community, pride, and belonging across key student milestones.",
    name: "Founder",
    company: "Master's Union",
  },
  {
    id: 2,
    quote: "Custom-designed sneakers created for employee Diwali gifting, complete with custom packaging. The project focused on delivering a meaningful, premium gift that reflected FamPay's youthful and modern brand ethos.",
    name: "Founder",
    company: "FamPay",
  },
  {
    id: 3,
    quote: "Limited-edition custom sneakers developed for a Jameson Irish Whisky brand experience event. Inspired by the brand's triple barrel Irish whiskey heritage, the design became a statement piece that elevated the event's cultural and experiential storytelling.",
    name: "Business Head",
    company: "Pernod Ricard",
  },
  {
    id: 4,
    quote: "Sauced supported us on apparel development and sourcing with a strong focus on quality, timelines, and execution discipline. Their ability to translate requirements into production-ready outcomes, while coordinating across suppliers and quality checks, made the process seamless. The team brought clarity and reliability to complex apparel workflows, making them a dependable long-term partner.",
    name: "Business Lead",
    company: "Aditya Birla Group",
  },
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-24 md:py-32 bg-carbon">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-quartz tracking-[-0.02em] leading-[1.1]">
            Testimonials
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(255,57,24,0.15)"
              }}
              className="p-8 md:p-10 rounded-2xl bg-quartz/5 backdrop-blur-sm border border-quartz/10 transition-all duration-300 cursor-default"
            >
              <div className="text-sauce text-5xl font-serif leading-none mb-4 opacity-50">"</div>
              <p className="text-quartz/90 text-base md:text-lg italic leading-[1.7] mb-8">
                {testimonial.quote}
              </p>
              <footer className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sauce/20 flex items-center justify-center">
                  <span className="text-sauce font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <cite className="not-italic">
                  <p className="text-quartz font-semibold text-base">{testimonial.name}</p>
                  <p className="text-quartz/60 text-sm">
                    {testimonial.company}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* Mobile Carousel */}
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
              <blockquote className="p-8 rounded-2xl bg-quartz/5 border border-quartz/10">
                <div className="text-sauce text-4xl font-serif leading-none mb-4 opacity-50">"</div>
                <p className="text-quartz/90 text-lg italic leading-[1.6] mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sauce/20 flex items-center justify-center">
                    <span className="text-sauce font-bold">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                  <cite className="not-italic">
                    <p className="text-quartz font-semibold">{testimonials[activeIndex].name}</p>
                    <p className="text-quartz/60 text-sm">
                      {testimonials[activeIndex].company}
                    </p>
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-quartz/30 flex items-center justify-center text-quartz/70 hover:text-quartz hover:border-quartz/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-200",
                    index === activeIndex ? "bg-sauce w-6" : "bg-quartz/40 hover:bg-quartz/60"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-quartz/30 flex items-center justify-center text-quartz/70 hover:text-quartz hover:border-quartz/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
