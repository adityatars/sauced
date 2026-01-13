import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We start with a discovery call to understand your design intent, cost targets, timelines, and production scale. This ensures we match you with the right factories and processes.",
  },
  {
    number: "02",
    title: "Sampling & Validation",
    description: "We curate factory options, develop moodboards, and manage sampling and feedback loops. Quality checks happen at every stage before moving to production.",
  },
  {
    number: "03",
    title: "Delivery & Scale",
    description: "Order placement, ongoing QC, logistics coordination, and delivery to your warehouse. We support reorders and scaling with the same single point of contact.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-foreground tracking-[-0.01em] leading-[1.2]">
            How We Work Together
          </h2>
        </motion.div>

        {/* Desktop: Horizontal Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-[17%] right-[17%] h-0.5 border-t-2 border-dashed border-slate/60 -translate-y-1/2 origin-left z-0"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative z-10"
            >
              <div className="h-full min-h-[280px] p-10 rounded-lg border border-slate bg-card hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-200 ease-out relative overflow-hidden">
                {/* Background Step Number */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3 + 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="absolute -top-2 -left-2 text-[96px] font-bold text-sauce/20 leading-none select-none pointer-events-none"
                >
                  {step.number}
                </motion.span>
                
                {/* Content */}
                <div className="relative z-10 pt-12">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-foreground/85 text-base md:text-lg leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden relative">
          {/* Vertical Connecting Line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="absolute left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-slate/60 origin-top z-0"
          />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="relative z-10 ml-16"
              >
                {/* Step Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="absolute -left-16 top-6 w-8 h-8 rounded-full bg-sauce flex items-center justify-center"
                >
                  <span className="text-quartz text-sm font-bold">{step.number}</span>
                </motion.div>

                <div className="p-6 rounded-lg border border-slate bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/85 text-sm leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reinforcement Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-foreground/70 text-lg md:text-xl font-medium mt-12"
        >
          One partner. Zero complexity.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorks;