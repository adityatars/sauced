import { motion } from "framer-motion";

const NEW_LOGO_URL = "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/MainLogomark_Orange_PNG.png";

const Footer = () => {
  return (
    <footer className="bg-carbon border-t border-quartz/10 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="inline-block mb-4">
                <img 
                  src={NEW_LOGO_URL} 
                  alt="SAUCED" 
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-quartz/70 max-w-sm leading-relaxed">
                Full-stack footwear and apparel development and sourcing from India. End-to-end
                ownership from concept to global production.
              </p>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold text-quartz uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/services/footwear-development" className="text-quartz/70 hover:text-quartz transition-colors">
                    Footwear Development and Sourcing
                  </a>
                </li>
                <li>
                  <a href="/services/apparel-sourcing" className="text-quartz/70 hover:text-quartz transition-colors">
                    Apparel Development and Sourcing
                  </a>
                </li>
                <li>
                  <a href="/services/b2b-custom-gifting" className="text-quartz/70 hover:text-quartz transition-colors">
                    Custom Gifting Merch
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold text-quartz uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="/portfolio" className="text-quartz/70 hover:text-quartz transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/#testimonials" className="text-quartz/70 hover:text-quartz transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="text-quartz/70 hover:text-quartz transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-quartz/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-quartz/60 text-sm">
            © {new Date().getFullYear()} Sauced. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-quartz/60 hover:text-quartz transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-quartz/60 hover:text-quartz transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
