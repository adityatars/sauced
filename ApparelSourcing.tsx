import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Search, Factory, Palette, DollarSign, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleCalendarModal, { useGoogleCalendarModal } from "@/components/GoogleCalendarModal";

const categories = [
  { name: "Ethnic Wear", items: "Sarees, lehengas, kurtas, traditional suits" },
  { name: "Western Wear", items: "Dresses, tops, tunics, denim" },
  { name: "Kidswear", items: "All children's clothing categories" },
  { name: "Men's Wear", items: "Ethnic, casual, and formal wear" },
  { name: "Activewear", items: "Sports and fitness apparel" },
  { name: "Accessories", items: "Leather goods, belts, bags" },
];

const whatWeHandle = [
  "Factory vetting and selection",
  "Transparent pricing negotiations",
  "Production management",
  "Quality control inspections",
  "Logistics and shipping coordination",
];

const benefits = [
  "Curated network of verified MSME factories",
  "MOQ flexibility for boutiques and growing brands",
  "Single point of contact for all coordination",
  "Real-time production visibility",
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Discovery",
    timeline: "Week 1",
    items: [
      "Brand vision, category mix, target customer & seasonality",
      "Price targets, volumes, and margin alignment",
      "Fabric preferences, silhouettes, and complexity assessment",
    ],
    icon: Search,
  },
  {
    step: "02",
    title: "Supplier & Fabric Shortlisting",
    timeline: "Week 1–2",
    items: [
      "Identification of suitable apparel factories and vendors",
      "Fabric mill sourcing and trims identification",
      "MOQ feasibility, capacity, and compliance checks",
    ],
    icon: Factory,
  },
  {
    step: "03",
    title: "Sampling & Development",
    timeline: "Week 3–8",
    items: [
      "Tech pack finalisation and pattern development",
      "First samples, fit trials, and iterative feedback loops",
      "Fabric, colour, and construction approvals",
    ],
    icon: Palette,
  },
  {
    step: "04",
    title: "Costing & Pre-Production Setup",
    timeline: "Week 9–12",
    items: [
      "Final costing based on approved samples and materials",
      "Commercial negotiations and timeline lock",
      "Final BOM, size grading, and production readiness",
    ],
    icon: DollarSign,
  },
  {
    step: "05",
    title: "Production & Quality Control",
    timeline: "Week 13 onwards",
    items: [
      "Bulk production execution",
      "Inline and final quality checks",
      "Packing, logistics coordination, and dispatch support",
    ],
    icon: Package,
  },
];

const ApparelSourcing = () => {
  const { isOpen, openModal, closeModal } = useGoogleCalendarModal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Image - Full Bleed */}
      <section className="relative w-full min-h-[100vh] overflow-hidden bg-carbon">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/Whisk_cb79deaca230cf190824ab85f93d5066dr.jpeg"
            alt="Apparel Development and Sourcing"
            className="w-full h-full object-contain"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* Hero Text Content */}
      <section className="bg-quartz py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-carbon tracking-[-0.02em] leading-[1.1] mb-6">
              Apparel Development and Sourcing
            </h1>
            <p className="text-carbon/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Connect with curated Indian apparel factories for transparent, quality-focused production across all categories.
            </p>
            <Button 
              size="lg"
              className="bg-sauce text-quartz hover:bg-sauce/90 rounded-full font-semibold px-8"
              onClick={openModal}
            >
              Book Your 1st Free Discovery Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-20 bg-quartz">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em] mb-6">
              What We Do
            </h2>
            <p className="text-carbon/80 text-base md:text-lg leading-[1.7] max-w-3xl mb-12">
              We bridge the gap between global fashion brands and India's best apparel manufacturers. From ethnic wear to activewear, we manage the entire development and sourcing process so you can focus on design and growth.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-carbon mb-6">Categories We Source</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border border-slate/30 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-base font-semibold text-carbon mb-2">{category.name}</h4>
                  <p className="text-carbon/70 text-sm">{category.items}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What We Handle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-carbon mb-4">What We Handle</h3>
            <ul className="space-y-3">
              {whatWeHandle.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-sauce flex-shrink-0 mt-0.5" />
                  <span className="text-carbon/85 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-20 bg-slate/[0.03]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em] mb-8">
              Why Work With Us
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-sauce flex-shrink-0 mt-0.5" />
                  <span className="text-carbon/85 text-base md:text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-20 md:py-28 bg-quartz">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em]">
              Our Process
            </h2>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-sauce via-sauce/50 to-slate/20" />

            <div className="space-y-12 md:space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-20 md:pl-28"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-sauce flex items-center justify-center shadow-lg shadow-sauce/20">
                    <step.icon className="w-7 h-7 md:w-10 md:h-10 text-quartz" />
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <span className="text-sauce font-bold text-sm tracking-wider">STEP {step.step}</span>
                      <span className="text-carbon/50 text-sm">{step.timeline}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-carbon mb-4">
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-carbon/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-sauce mt-2 flex-shrink-0" />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-6 bg-carbon/5 rounded-xl border border-slate/10"
          >
            <p className="text-carbon/70 text-sm leading-relaxed">
              <span className="font-semibold text-carbon">Note:</span> Timelines are indicative and may vary based on the scope, complexity, and requirements of the project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate/[0.03]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em] mb-4">
              Ready to Source From India?
            </h2>
            <p className="text-carbon/75 text-lg mb-8">
              First discovery call is free. Let's discuss your sourcing needs.
            </p>
            <Button 
              size="lg"
              className="bg-sauce text-quartz hover:bg-sauce/90 rounded-full font-semibold px-10 text-lg"
              onClick={openModal}
            >
              Book Your 1st Free Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Visual Section - Previous Hero Image */}
      <section className="py-16 md:py-20 bg-slate/[0.03]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
          <div className="relative rounded-2xl overflow-hidden bg-slate/10 shadow-xl">
            <img 
              src="https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202024-10-25%20025459.png"
              alt="Apparel Development"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
      <GoogleCalendarModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default ApparelSourcing;
