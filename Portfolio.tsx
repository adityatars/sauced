import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Compass, Settings, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleCalendarModal, { useGoogleCalendarModal } from "@/components/GoogleCalendarModal";
import { useRef } from "react";

const caseStudies = [
  {
    brand: "FamPay",
    logo: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/fp.png",
    project: "Custom-designed sneakers for employee Diwali gifting",
    narrative: [
      "Sauced partnered with FamPay to design and produce custom sneakers as part of their Diwali employee gifting initiative. The objective was to create a meaningful, premium product that employees would genuinely use—rather than a conventional corporate gift.",
      "The sneaker design reflected FamPay's youthful, modern, and forward-thinking brand ethos, while the packaging elevated the experience into a complete gifting moment. From concept to final delivery, the focus remained on quality, relevance, and emotional connection, resulting in a product that employees could proudly wear beyond the occasion."
    ],
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/WhatsApp%20Image%202026-01-06%20at%2016.36.22.jpeg"
    ]
  },
  {
    brand: "Jameson",
    logo: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/jm-removebg-preview.png",
    project: "Limited-edition sneakers for a Jameson Irish Whisky brand experience",
    narrative: [
      "For Jameson, Sauced developed a limited-edition sneaker as part of an immersive brand experience event. The design drew inspiration from Jameson's triple-barrel Irish whiskey heritage, translating the brand's craftsmanship and legacy into a contemporary, wearable statement.",
      "The sneaker served as both merchandise and storytelling—enhancing the cultural narrative of the event while leaving attendees with a tangible, memorable brand artifact. The result was a bold, experiential product aligned with Jameson's premium positioning."
    ],
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Gemini_Generated_Image_ssdn28ssdn28ssdn.png"
    ]
  },
  {
    brand: "Master's Union",
    logo: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/mu.png",
    project: "End-to-end merchandise partnership (onboarding kits & convocation sneakers)",
    narrative: [
      "Sauced partnered with Master's Union on a long-term merchandise collaboration covering student onboarding kits and convocation gifting. The goal was to create products that reinforced community, pride, and belonging at key milestones in the student journey.",
      "From concept and design to sourcing and production, Sauced delivered merchandise that felt intentional and premium—helping Master's Union strengthen its brand identity while fostering a deeper emotional connection with its students."
    ],
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202025-09-07%20125858.png"
    ]
  },
  {
    brand: "Zomato",
    logo: "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/testimonials/zm.png",
    project: "Functional merchandise for delivery partners",
    narrative: [
      "For Zomato, Sauced designed and produced functional merchandise tailored specifically for delivery partners. The focus was on durability, comfort, and practicality—supporting long hours of movement and on-ground work.",
      "Beyond functionality, brand visibility and wearability were key considerations, ensuring the merchandise performed well in real-world conditions while reinforcing Zomato's brand presence across daily operations."
    ],
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202026-01-06%20162129.png",
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202026-01-06%20162145.png"
    ]
  }
];

const processStages = [
  {
    stage: "Curating Strategy",
    context: "Research, positioning, early explorations",
    icon: Search,
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202024-10-25%20025432.png",
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202024-10-25%20034617.png"
    ]
  },
  {
    stage: "Development Plan",
    context: "Design, development, alignment",
    icon: Compass,
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202026-01-06%20161137.png"
    ]
  },
  {
    stage: "Execution",
    context: "Production, quality control",
    icon: Settings,
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202026-01-06%20161254.png",
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202026-01-06%20161326.png"
    ]
  },
  {
    stage: "Final Product",
    context: "Finished output and market review",
    icon: Package,
    images: [
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/WhatsApp%20Image%202026-01-06%20at%2016.36.22.jpeg",
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202024-12-12%20194135.png",
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Screenshot%202024-12-12%20194113.png",
      "https://kgnenaqsmjqnggyvsuuo.supabase.co/storage/v1/object/public/shoe/portfolio/Whisk_c674130cf0be4939b084e1022f61c143dr.png"
    ]
  }
];

// Animated Image Component for Case Studies
const AnimatedCaseStudyImage = ({ image, alt, index, smoothProgress }: { image: string; alt: string; index: number; smoothProgress: any }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(imageScrollProgress, [0, 1], [50, -50]);
  const opacity = useTransform(imageScrollProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(imageScrollProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const floatingY = useTransform(smoothProgress, [0, 1], [0, (index + 1) * 20]);

  return (
    <motion.div
      ref={imageRef}
      className="relative overflow-hidden rounded-2xl bg-slate/5 shadow-lg"
      style={{ y, opacity, scale }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={image}
        alt={alt}
        className="w-full h-auto object-contain"
        loading="lazy"
        style={{ y: floatingY }}
        animate={{
          filter: [
            "brightness(1) contrast(1)",
            "brightness(1.05) contrast(1.05)",
            "brightness(1) contrast(1)",
          ],
        }}
        transition={{
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-carbon/0 via-transparent to-carbon/0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(to top, rgba(0,0,0,0) 0%, transparent 50%, rgba(0,0,0,0) 100%)",
            "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
            "linear-gradient(to top, rgba(0,0,0,0) 0%, transparent 50%, rgba(0,0,0,0) 100%)",
          ],
        }}
        transition={{
          duration: 3 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

// Animated Case Study Article Component
const AnimatedCaseStudyArticle = ({ study, index, smoothProgress }: { study: typeof caseStudies[0]; index: number; smoothProgress: any }) => {
  const articleRef = useRef<HTMLElement>(null);
  const { scrollYProgress: articleScrollProgress } = useScroll({
    target: articleRef,
    offset: ["start end", "end start"]
  });
  
  const articleY = useTransform(articleScrollProgress, [0, 1], [100, -100]);
  const articleOpacity = useTransform(articleScrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const articleScale = useTransform(articleScrollProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <motion.article
      ref={articleRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: articleY, opacity: articleOpacity, scale: articleScale }}
      className="group"
    >
      {/* Alternating Layout */}
      <div className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
        
        {/* Content Column */}
        <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-8' : ''}`}>
          <div className="sticky top-32">
            {/* Brand Logo */}
            {study.logo && (
              <div className="mb-6">
                <img
                  src={study.logo}
                  alt={study.brand}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            )}
            
            {/* Project Type */}
            <p className="text-sauce font-medium text-lg mb-8 pb-6 border-b border-slate/20">
              {study.project}
            </p>
            
            {/* Narrative */}
            <div className="space-y-5">
              {study.narrative.map((paragraph, i) => (
                <p key={i} className="text-carbon/70 text-base md:text-[17px] leading-[1.85]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Image Column - True Aspect Ratio with Continuous Scroll Animations */}
        <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          {/* Zomato: Side-by-side layout for multiple images */}
          {study.brand === "Zomato" && study.images.length > 1 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {study.images.map((image, i) => (
                <AnimatedCaseStudyImage
                  key={i}
                  image={image}
                  alt={`${study.brand} project`}
                  index={i}
                  smoothProgress={smoothProgress}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {study.images.map((image, i) => (
                <AnimatedCaseStudyImage
                  key={i}
                  image={image}
                  alt={`${study.brand} project`}
                  index={i}
                  smoothProgress={smoothProgress}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// Animated Process Stage Component
const AnimatedProcessStage = ({ stage, index, smoothProgress }: { stage: typeof processStages[0]; index: number; smoothProgress: any }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stageScrollProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"]
  });
  
  const stageY = useTransform(stageScrollProgress, [0, 1], [80, -80]);
  const stageOpacity = useTransform(stageScrollProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <motion.div
      ref={stageRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ y: stageY, opacity: stageOpacity }}
    >
      {/* Stage Header */}
      <div className="flex items-baseline gap-6 mb-10">
        <div className="flex items-center gap-4">
          <span className="text-[72px] md:text-[100px] font-bold text-sauce/20 leading-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <stage.icon className="w-10 h-10 text-sauce/60" strokeWidth={1.5} />
        </div>
        <div className="pb-4 border-b border-quartz/10 flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold text-quartz mb-1">
            {stage.stage}
          </h3>
          <p className="text-quartz/40 text-base">
            {stage.context}
          </p>
        </div>
      </div>

      {/* Stage Images - True Aspect Ratio with Continuous Scroll Animations */}
      <div className={`grid gap-6 ${stage.images.length > 1 ? (stage.images.length === 3 ? 'md:grid-cols-2' : 'md:grid-cols-2') : 'md:grid-cols-1 max-w-4xl'}`}>
        {stage.images.map((image, i) => (
          <AnimatedStageImage
            key={i}
            image={image}
            alt={`${stage.stage} stage`}
            stageIndex={index}
            imageIndex={i}
            smoothProgress={smoothProgress}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Animated Image Component for Process Stages
const AnimatedStageImage = ({ image, alt, stageIndex, imageIndex, smoothProgress }: { image: string; alt: string; stageIndex: number; imageIndex: number; smoothProgress: any }) => {
  const stageImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stageImageScrollProgress } = useScroll({
    target: stageImageRef,
    offset: ["start end", "end start"]
  });
  
  const stageImageY = useTransform(stageImageScrollProgress, [0, 1], [60, -60]);
  const stageImageOpacity = useTransform(stageImageScrollProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const stageImageScale = useTransform(stageImageScrollProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const stageImageRotate = useTransform(stageImageScrollProgress, [0, 1], [-2, 2]);
  const stageFloatingY = useTransform(smoothProgress, [0, 1], [0, (stageIndex * 10 + imageIndex * 15)]);

  return (
    <motion.div
      ref={stageImageRef}
      className="relative overflow-hidden rounded-2xl"
      style={{ 
        y: stageImageY, 
        opacity: stageImageOpacity, 
        scale: stageImageScale,
        rotate: stageImageRotate
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 0,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={image}
        alt={alt}
        className="w-full h-auto object-contain"
        loading="lazy"
        style={{ y: stageFloatingY }}
        animate={{
          filter: [
            "brightness(1) saturate(1)",
            "brightness(1.08) saturate(1.1)",
            "brightness(1) saturate(1)",
          ],
        }}
        transition={{
          duration: 5 + imageIndex * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 border-2 border-sauce/0 rounded-2xl pointer-events-none"
        animate={{
          borderColor: [
            "rgba(255, 57, 24, 0)",
            "rgba(255, 57, 24, 0.3)",
            "rgba(255, 57, 24, 0)",
          ],
        }}
        transition={{
          duration: 4 + imageIndex * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

const Portfolio = () => {
  const { isOpen, openModal, closeModal } = useGoogleCalendarModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-quartz">
      <Navbar />
      
      {/* Page Intro - Editorial Style */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-[42px] md:text-[56px] lg:text-[72px] font-bold text-carbon tracking-[-0.03em] leading-[1.05] mb-8">
              Portfolio
            </h1>
            <p className="text-carbon/60 text-xl md:text-2xl max-w-3xl leading-relaxed font-light">
              A selection of collaborations where Sauced partnered with brands to design, source, and deliver footwear and apparel solutions—end to end.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies - Editorial Layout */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
          <div className="space-y-40">
            {caseStudies.map((study, index) => (
              <AnimatedCaseStudyArticle
                key={study.brand}
                study={study}
                index={index}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
        <div className="h-px bg-gradient-to-r from-transparent via-slate/30 to-transparent" />
      </div>

      {/* From Planning to Production */}
      <section className="py-32 md:py-40 bg-carbon">
        <div className="container mx-auto px-6 lg:px-16 max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-quartz tracking-[-0.02em] leading-[1.1] mb-6">
              From Planning to Production
            </h2>
            <p className="text-quartz/50 text-xl max-w-2xl font-light">
              A visual journey through our end-to-end development process
            </p>
          </motion.div>

          <div className="space-y-28">
            {processStages.map((stage, index) => (
              <AnimatedProcessStage
                key={stage.stage}
                stage={stage}
                index={index}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 md:py-36 bg-quartz">
        <div className="container mx-auto px-6 lg:px-16 max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-carbon tracking-[-0.02em] mb-6">
              Ready to Build Something Together?
            </h2>
            <p className="text-carbon/60 text-xl mb-10 font-light">
              First discovery call is free. Let's discuss your project.
            </p>
            <Button 
              size="lg"
              className="bg-sauce text-quartz hover:bg-sauce/90 rounded-full font-semibold px-12 py-6 text-lg"
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

export default Portfolio;
