import { motion } from "framer-motion";
import { Footprints, Shirt, Gift } from "lucide-react";

const services = [
  {
    icon: Footprints,
    title: "Footwear Development and Sourcing",
    description: "End-to-end footwear development from design translation to production. We source reliable, high-quality manufacturing partners, balancing design intent, cost efficiency, and scalability.",
    href: "/services/footwear-development",
  },
  {
    icon: Shirt,
    title: "Apparel Development and Sourcing",
    description: "Complete apparel development and sourcing across ethnic, western, activewear, and kidswear categories with vetted manufacturers and transparent workflows.",
    href: "/services/apparel-sourcing",
  },
  {
    icon: Gift,
    title: "Custom Gifting Merch",
    description: "Custom footwear and merchandise solutions for corporate gifting, events, employee kits, and brand experiences that strengthen emotional connection.",
    href: "/services/b2b-custom-gifting",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
            What We Do
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
            Strategic development and sourcing for footwear, apparel, and custom merchandise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group block"
            >
              <motion.div 
                className="h-full p-10 rounded-xl border border-slate/30 bg-card transition-all duration-300 ease-out cursor-pointer"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  borderColor: "rgba(211,211,211,0.5)"
                }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.3 
                  }}
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-8"
                >
                  <service.icon className="w-12 h-12 text-sauce" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 leading-[1.3] group-hover:text-sauce transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/80 text-base md:text-lg leading-[1.7]">
                  {service.description}
                </p>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
