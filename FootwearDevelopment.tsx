import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Factory, Search, DollarSign, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleCalendarModal, { useGoogleCalendarModal } from "@/components/GoogleCalendarModal";

const services = [
  "Factory identification & vetting (small to large MOQs)",
  "Material sourcing (leather, synthetics, knits, soles, trims)",
  "Tooling and Sole development",
  "Costing & feasibility analysis",
  "Vendor negotiations & production alignment",
  "Ethical & sustainability considerations (where required)",
];

const whoItsFor = [
  "Emerging footwear brands",
  "Lifestyle & fashion brands expanding into footwear",
  "D2C brands looking to scale manufacturing",
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Discovery",
    timeline: "Week 1",
    items: [
      "Brand goals, price targets, volumes & target season",
      "Product category & complexity assessment",
    ],
    icon: Search,
  },
  {
    step: "02",
    title: "Supplier Shortlisting",
    timeline: "Week 1–2",
    items: [
      "Identification of suitable factories & vendors",
      "Capability, MOQ, and compliance checks",
    ],
    icon: Factory,
  },
  {
    step: "03",
    title: "Costing & Pre-Production Setup",
    timeline: "Week 3–12",
    items: [
      "Material & component costing",
      "Commercial negotiations & timelines lock",
      "Final BOM, specs & production readiness",
      "Production assistance and inline QC",
    ],
    icon: DollarSign,
  },
];

const deliverables = [
  "Finalized vendor(s)",
  "New sole development if required",
  "Cost sheets & production plan",
  "Sourcing roadmap",
  "Production Delivery with QC",
];

const FootwearDevelopment = () => {
  const { isOpen, openModal, closeModal } = useGoogleCalendarModal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Image - Full Bleed */}
      <section className="relative w-full min-h-[100vh] overflow-hidden bg-carbon">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/Whisk_5c8ecc0aa39ba6096c44387bc51dbf0cdr.png"
            alt="Footwear Development and Sourcing"
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
              Footwear Development and Sourcing
            </h1>
            <p className="text-carbon/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              We help brands source reliable, high-quality footwear manufacturing partners across India and globally. Our sourcing process balances design intent, cost efficiency, scalability, and quality control, ensuring your product is production-ready from day one.
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

      {/* What We Offer Section */}
      <section className="py-16 md:py-20 bg-quartz">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em] mb-8">
              What We Offer
            </h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-sauce flex-shrink-0 mt-0.5" />
                  <span className="text-carbon/85 text-base md:text-lg">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 md:py-20 bg-slate/[0.03]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em] mb-8">
              Who It's For
            </h2>
            <ul className="space-y-4">
              {whoItsFor.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-sauce flex-shrink-0 mt-0.5" />
                  <span className="text-carbon/85 text-base md:text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-16 md:py-20 bg-carbon">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-quartz tracking-[-0.02em] mb-6">
              Outcome
            </h2>
            <p className="text-quartz/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A trusted, production-ready supply chain aligned with your brand values and commercial goals.
            </p>
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

      {/* Deliverables Section */}
      <section className="py-16 md:py-20 bg-slate/[0.03]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em] mb-8">
              Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {deliverables.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate/20 shadow-sm"
                >
                  <Package className="w-5 h-5 text-sauce flex-shrink-0" />
                  <span className="text-carbon/85 text-sm md:text-base font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-quartz">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1080px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-carbon tracking-[-0.02em] mb-4">
              Ready to Develop Your Footwear Line?
            </h2>
            <p className="text-carbon/75 text-lg mb-8">
              First discovery call is free. Let's discuss your project.
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
      <section className="py-16 md:py-20 bg-quartz">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
          <div className="relative rounded-2xl overflow-hidden bg-slate/10 shadow-xl">
            <img 
              src="https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202024-10-25%20031535.png"
              alt="Footwear Development"
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

export default FootwearDevelopment;
