import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Shield, Ban, Gift } from "lucide-react";
import GoogleCalendarModal, { useGoogleCalendarModal } from "@/components/GoogleCalendarModal";

const reassurancePoints = [
  {
    icon: Gift,
    text: "1st Discovery Call – Free",
  },
  {
    icon: User,
    text: "Single point of contact",
  },
  {
    icon: Shield,
    text: "Trusted by global brands",
  },
  {
    icon: Ban,
    text: "No agents. No surprises.",
  },
];

const ContactSection = () => {
  const { isOpen, openModal, closeModal } = useGoogleCalendarModal();

  return (
    <>
      <section id="contact" className="py-24 md:py-32 bg-carbon">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-sauce/20 text-sauce text-sm font-semibold mb-6">
              1st Discovery Call – Free
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[32px] md:text-[40px] lg:text-[56px] font-bold text-quartz tracking-[-0.01em] leading-[1.1] mb-6"
          >
            Ready to Source Smarter?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-quartz/85 text-lg md:text-xl lg:text-2xl leading-[1.5] mb-10"
          >
            Book a discovery call and experience full-stack sourcing with zero ambiguity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button 
                size="xl"
                className="w-full sm:w-auto min-w-[220px] bg-sauce text-quartz hover:bg-sauce/90 hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,57,24,0.4)] active:scale-[0.98] rounded-lg font-semibold px-10 py-5 text-lg md:text-xl transition-all duration-200"
                onClick={openModal}
              >
                <span className="group inline-flex items-center">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Button>
            </motion.div>

            <Button 
              size="xl"
              className="w-full sm:w-auto min-w-[180px] bg-transparent border border-quartz text-quartz hover:bg-quartz hover:text-carbon rounded-lg font-semibold px-10 py-5 text-lg md:text-xl transition-all duration-200"
              asChild
            >
              <a href="mailto:wearesaucedlabs@gmail.com">
                Contact Us
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
          >
            {reassurancePoints.map((point) => (
              <motion.div
                key={point.text}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
                className="flex items-center gap-2"
              >
                <point.icon className="w-5 h-5 text-sauce flex-shrink-0" aria-hidden="true" />
                <span className="text-quartz/75 text-sm md:text-base">
                  {point.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GoogleCalendarModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default ContactSection;
