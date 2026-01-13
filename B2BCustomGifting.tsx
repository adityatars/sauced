import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Gift, Target, Palette, Package, Truck, ClipboardCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleCalendarModal, { useGoogleCalendarModal } from "@/components/GoogleCalendarModal";

const services = [
  "Custom footwear with branding",
  "Event & festive gifting solutions",
  "Employee & partner kits",
  "Sustainable & premium options",
  "End-to-end design & execution",
];

const processSteps = [
  {
    step: "01",
    title: "Gifting Objective & Budget",
    timeline: "Week 1",
    items: [
      "Occasion, audience & budget definition",
      "Brand tone & sustainability preferences",
      "Preselected Silhouettes catalogue as per order value",
    ],
    icon: Target,
  },
  {
    step: "02",
    title: "Concept & Curation",
    timeline: "Week 1–2",
    items: [
      "Product & kit concepts",
      "Design & branding options",
    ],
    icon: Palette,
  },
  {
    step: "03",
    title: "Sampling & Finalization",
    timeline: "Week 6–9",
    items: [
      "Product samples & approvals",
      "Packaging design & confirmation",
    ],
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Production & Quality Control",
    timeline: "Week 9–12",
    items: [
      "Bulk production",
      "QC & branding execution",
    ],
    icon: Package,
  },
  {
    step: "05",
    title: "Packing & Delivery",
    timeline: "Week 13",
    items: [
      "Final assembly & QC",
      "Dispatch & logistics",
    ],
    icon: Truck,
  },
];

const B2BCustomGifting = () => {
  const { isOpen, openModal, closeModal } = useGoogleCalendarModal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Image - Full Bleed */}
      <section className="relative w-full min-h-[100vh] overflow-hidden bg-carbon">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/Whisk_e94470cf3538fdda7d6490cb5d917ddcdr.png"
            alt="Custom Gifting Merch"
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
              Custom Gifting Merch
            </h1>
            <p className="text-carbon/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Go beyond generic merchandise with custom footwear. Our gifting solutions are built to reflect your brand story. Created thoughtfully for your teams, events, or onboarding gifts.
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
              High-impact merchandise that strengthens brand recall and emotional connection.
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

          {/* Horizontal Timeline for Desktop, Vertical for Mobile */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-sauce via-sauce/70 to-sauce/30 rounded-full" />

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pt-20"
                >
                  {/* Step Circle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-sauce flex items-center justify-center shadow-lg shadow-sauce/20 z-10">
                    <step.icon className="w-10 h-10 text-quartz" />
                  </div>

                  {/* Content */}
                  <div className="text-center pt-8">
                    <span className="text-sauce font-bold text-xs tracking-wider">STEP {step.step}</span>
                    <p className="text-carbon/50 text-xs mt-1 mb-2">{step.timeline}</p>
                    <h3 className="text-base font-bold text-carbon mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {step.items.map((item, i) => (
                        <li key={i} className="text-carbon/70 text-xs leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sauce via-sauce/50 to-slate/20" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-sauce flex items-center justify-center shadow-lg shadow-sauce/20">
                    <step.icon className="w-7 h-7 text-quartz" />
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="text-sauce font-bold text-sm tracking-wider">STEP {step.step}</span>
                      <span className="text-carbon/50 text-sm">{step.timeline}</span>
                    </div>
                    <h3 className="text-lg font-bold text-carbon mb-3">
                      {step.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-carbon/75 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-sauce mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
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
              <span className="font-semibold text-carbon">Note:</span> Estimated timelines are applicable for catalogue silhouette selections. For custom designs developed from scratch, timelines may vary depending on the depth and complexity of design requirements.
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
              Ready to Create Custom Merch?
            </h2>
            <p className="text-carbon/75 text-lg mb-8">
              First discovery call is free. Let's discuss your gifting program.
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

      <Footer />
      <GoogleCalendarModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default B2BCustomGifting;
