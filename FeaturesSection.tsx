import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "footwear",
    label: "Footwear Development",
    headline: "Footwear Product Development",
    description: "End-to-end footwear development from initial concept to mass production. We handle the technical complexity so you can focus on your brand.",
    items: [
      "Concept development & design translation",
      "Technical feasibility and engineering validation",
      "Last development and outsole/tooling coordination",
      "Sole material compounding and compositions",
      "Rapid prototyping and iterative sampling",
      "Production handover (small to large series)",
    ],
  },
  {
    id: "apparel",
    label: "Apparel Sourcing",
    headline: "Apparel Sourcing & Production",
    description: "Access India's best apparel factories with full transparency. We manage sourcing, production, quality, and logistics across all categories.",
    categories: [
      { name: "Ethnic Wear", examples: "Sarees, lehengas, kurtas, suits" },
      { name: "Western Wear", examples: "Dresses, tops, tunics, denim" },
      { name: "Co-ord Sets", examples: "Nightwear, loungewear" },
      { name: "Kidswear", examples: "All children's clothing" },
      { name: "Men's Wear", examples: "Ethnic, casual, formal wear" },
      { name: "Activewear", examples: "Sports and fitness apparel" },
      { name: "Accessories", examples: "Leather belts, wallets, bags" },
    ],
  },
  {
    id: "sampling",
    label: "Sampling",
    headline: "Sampling & Prototyping",
    description: "Fast, iterative sampling that gets you from concept to validated prototype in 2-3 weeks, not months.",
    items: [
      "Rapid sample development",
      "Sampling and feedback loops",
      "Multi-iteration refinement",
      "Reduction of long sampling cycles",
    ],
    stat: { number: "2-3", unit: "weeks", label: "Sample turnaround time" },
  },
  {
    id: "quality",
    label: "Quality & Logistics",
    headline: "Quality Control & Logistics",
    description: "Your goods reach your warehouse with zero surprises. We handle every step of quality validation and delivery.",
    items: [
      "Rigorous multi-stage inspection processes",
      "Compliance checks and certifications",
      "End-to-end logistics coordination",
      "Air, sea, and courier shipping options",
      "Delivery and reorder flows",
    ],
  },
  {
    id: "gifting",
    label: "B2B Gifting",
    headline: "B2B Custom Footwear & Gifting",
    description: "Premium, custom footwear for employee gifting, events, and corporate milestones. Functional products that are actually worn.",
    useCases: ["Employee onboarding", "Corporate milestone celebrations", "Corporate events and conferences", "Premium brand gifting"],
    items: [
      "Custom sneaker and footwear design",
      "Branding (logos, colorways, messaging, packaging)",
      "Small to mid-scale production runs",
      "Flexible timelines for corporate programs",
      "Sustainable material options",
    ],
  },
];

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("footwear");
  const [openAccordion, setOpenAccordion] = useState<string | null>("footwear");

  const activeFeature = features.find((f) => f.id === activeTab);

  return (
    <section id="features" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-foreground tracking-[-0.02em] leading-[1.1]">
            What We Do
          </h2>
        </motion.div>

        {/* Desktop Tabs with enhanced styling */}
        <div className="hidden md:block">
          <div className="flex justify-center gap-3 mb-16">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative px-8 py-4 text-base font-medium transition-all duration-300 rounded-full",
                  activeTab === feature.id
                    ? "text-quartz bg-sauce shadow-lg shadow-sauce/30"
                    : "text-foreground/70 hover:text-foreground bg-slate/10 hover:bg-slate/20"
                )}
              >
                {feature.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeFeature && (
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Visual placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="aspect-[4/3] bg-slate/10 rounded-lg flex items-center justify-center border border-slate/30"
                >
                  <span className="text-muted-foreground text-sm">Visual: {activeFeature.label}</span>
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl md:text-[32px] font-semibold text-foreground mb-6 leading-[1.3]">
                    {activeFeature.headline}
                  </h3>

                  {/* Categories Grid (Apparel) */}
                  {activeFeature.categories && (
                    <>
                      <p className="text-foreground/90 text-lg font-medium mb-4">Categories We Serve:</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {activeFeature.categories.map((cat, i) => (
                          <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="p-3 bg-slate/5 rounded-md"
                          >
                            <p className="text-foreground font-semibold text-base">{cat.name}</p>
                            <p className="text-foreground/70 text-sm">{cat.examples}</p>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Use Cases (B2B Gifting) */}
                  {activeFeature.useCases && (
                    <div className="mb-6">
                      <p className="text-foreground/90 text-lg font-medium mb-3">Perfect For:</p>
                      <div className="flex flex-wrap gap-2">
                        {activeFeature.useCases.map((useCase) => (
                          <span key={useCase} className="px-3 py-1.5 bg-sauce/10 text-sauce text-sm font-medium rounded-full">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stat Callout (Sampling) */}
                  {activeFeature.stat && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mb-6 p-6 bg-background rounded-lg border border-slate/30"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-sauce">{activeFeature.stat.number}</span>
                        <span className="text-2xl font-medium text-foreground">{activeFeature.stat.unit}</span>
                      </div>
                      <p className="text-foreground/70 text-sm mt-1">{activeFeature.stat.label}</p>
                    </motion.div>
                  )}

                  {/* Features List */}
                  {activeFeature.items && (
                    <ul className="space-y-3 mb-6">
                      {activeFeature.items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="w-5 h-5 text-sauce flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-base leading-[1.8]">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  <p className="text-foreground/85 text-base md:text-lg leading-[1.6]">
                    {activeFeature.description}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {features.map((feature) => (
            <div key={feature.id} className="border border-slate/30 rounded-lg overflow-hidden bg-background">
              <button
                onClick={() => setOpenAccordion(openAccordion === feature.id ? null : feature.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-semibold text-foreground">{feature.label}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-foreground/70 transition-transform duration-200",
                    openAccordion === feature.id && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openAccordion === feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0">
                      <h3 className="text-xl font-semibold text-foreground mb-4">{feature.headline}</h3>
                      
                      {feature.categories && (
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {feature.categories.map((cat) => (
                            <div key={cat.name} className="p-2 bg-slate/5 rounded">
                              <p className="text-foreground font-medium text-sm">{cat.name}</p>
                              <p className="text-foreground/60 text-xs">{cat.examples}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {feature.stat && (
                        <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                          <span className="text-4xl font-bold text-sauce">{feature.stat.number}</span>
                          <span className="text-xl font-medium text-foreground ml-1">{feature.stat.unit}</span>
                          <p className="text-foreground/70 text-sm">{feature.stat.label}</p>
                        </div>
                      )}

                      {feature.items && (
                        <ul className="space-y-2 mb-4">
                          {feature.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-sauce flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/90 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <p className="text-foreground/80 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;