import { motion } from "framer-motion";
import { Network, ShieldCheck, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Network,
    title: "Full-Stack Execution",
    description:
      "We don't stop at connecting you to a supplier. Sauced manages your entire sourcing lifecycle: design translation, sampling, pricing, quality control, compliance, logistics, and payments. You get one dedicated partner, not five vendors on email.",
  },
  {
    icon: ShieldCheck,
    title: "De-Risked Supply Chain",
    description:
      "We work only with vetted, verified Indian MSME factories. You get transparent pricing, structured timelines, rigorous quality checks, and clear compliance. No agents. No ambiguity. No surprises.",
  },
  {
    icon: Lightbulb,
    title: "Design Meets Manufacturing",
    description:
      "We combine design understanding, margin awareness, and deep manufacturing expertise. You'll never have to explain 'what the buyer wants' again. We bridge design intent with factory execution.",
  },
];

const ValueProposition = () => {
  return (
    <section id="value" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
            Why Choose Sauced
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group"
            >
              <motion.div 
                className="h-full p-10 rounded-xl border border-slate/30 bg-card transition-all duration-300 ease-out cursor-pointer"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  borderColor: "rgba(211,211,211,0.5)"
                }}
              >
                {/* Floating icon with continuous animation */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5 
                  }}
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-8"
                >
                  <benefit.icon className="w-12 h-12 text-sauce" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5 leading-[1.3]">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80 text-base md:text-lg leading-[1.7]">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;