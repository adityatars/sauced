import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import product images
import sneaker1 from "@/assets/gallery-sneaker-1.jpg";
import sneaker2 from "@/assets/gallery-sneaker-2.jpg";
import sneaker3 from "@/assets/gallery-sneaker-3.jpg";
import apparel1 from "@/assets/gallery-apparel-1.jpg";
import apparel2 from "@/assets/gallery-apparel-2.jpg";
import apparel3 from "@/assets/gallery-apparel-3.jpg";
import accessory1 from "@/assets/gallery-accessory-1.jpg";
import accessory2 from "@/assets/gallery-accessory-2.jpg";

const products = [
  { category: "Footwear", image: sneaker1, alt: "Lifestyle sneaker product shot" },
  { category: "Footwear", image: sneaker2, alt: "Performance runner shoe" },
  { category: "Footwear", image: sneaker3, alt: "Minimal trainer design" },
  { category: "Ethnic Wear", image: apparel1, alt: "Traditional kurta craftsmanship" },
  { category: "Western Wear", image: apparel2, alt: "Modern western dress" },
  { category: "Activewear", image: apparel3, alt: "Activewear collection" },
  { category: "Accessories", image: accessory1, alt: "Premium leather belt" },
  { category: "Accessories", image: accessory2, alt: "Leather wallet craftsmanship" },
];

const ProductGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + products.length) % products.length);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
              Our Portfolio
            </h2>
            <p className="text-foreground/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-[1.6]">
              From footwear to apparel, we execute across categories with precision and scale.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {products.map((product, index) => {
              // Create varied sizes for bento effect
              const isLarge = index === 0 || index === 4;
              const isTall = index === 2 || index === 5;
              
              return (
                <motion.div
                  key={`${product.category}-${index}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 40 },
                    visible: { 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
                    }
                  }}
                  className={`group cursor-pointer ${isLarge ? 'md:col-span-2 md:row-span-2' : ''} ${isTall ? 'md:row-span-2' : ''}`}
                  onClick={() => openLightbox(index)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  style={{ perspective: 1000 }}
                >
                  <motion.div 
                    className={`${isLarge ? 'aspect-square' : isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'} rounded-xl overflow-hidden relative bg-slate/10`}
                    whileHover={{ 
                      scale: 1.02,
                      rotateX: mousePosition.y * -10,
                      rotateY: mousePosition.x * 10,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={product.image}
                      alt={product.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {/* Category Tag slides up */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <span className="inline-block px-4 py-2 bg-sauce text-quartz text-xs md:text-sm font-semibold uppercase tracking-[1px] rounded-full">
                          {product.category}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-carbon/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-quartz/10 flex items-center justify-center text-quartz hover:bg-quartz/20 transition-colors focus:outline-none focus:ring-2 focus:ring-sauce"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-quartz/10 flex items-center justify-center text-quartz hover:bg-quartz/20 transition-colors focus:outline-none focus:ring-2 focus:ring-sauce"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-quartz/10 flex items-center justify-center text-quartz hover:bg-quartz/20 transition-colors focus:outline-none focus:ring-2 focus:ring-sauce"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={products[activeIndex].image}
                alt={products[activeIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-quartz/80 text-sm uppercase tracking-wider">
                  {products[activeIndex].category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductGallery;