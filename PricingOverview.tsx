import { motion } from "framer-motion";
import { FileCheck, Layers, BookOpen, TrendingUp } from "lucide-react";

const keyPoints = [
  {
    icon: FileCheck,
    headline: "Custom Quotes",
    body: "Based on your specific project scope and volume",
  },
  {
    icon: Layers,
    headline: "MOQ Flexibility",
    body: "Boutiques and growing brands welcome",
  },
  {
    icon: BookOpen,
    headline: "Transparent Breakdowns",
    body: "No hidden costs, clear pricing structure",
  },
  {
    icon: TrendingUp,
    headline: "Scalable Models",
    body: "Engagement models that grow with you",
  },
];

const PricingOverview = () => {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-carbon">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-quartz tracking-[-0.01em] leading-[1.2] mb-6">
            Transparent, Custom Pricing
          </h2>
          <p className="text-quartz/90 text-base md:text-lg lg:text-xl leading-[1.6] max-w-[600px] mx-auto mb-10">
            We don't believe in one-size-fits-all pricing. Every engagement is tailored based on your scope, volume, services required, and timeline. We offer MOQ flexibility and scalable models that grow with your brand.
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.headline}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="p-6 rounded-lg border border-quartz/10 bg-quartz/5 text-center hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(255,57,24,0.1)] transition-all duration-200"
            >
              <div className="flex justify-center mb-3">
                <point.icon className="w-10 h-10 text-sauce" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-quartz mb-2">
                {point.headline}
              </h3>
              <p className="text-quartz/75 text-sm md:text-base leading-[1.5]">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingOverview;
