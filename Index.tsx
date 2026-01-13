import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingOverview from "@/components/PricingOverview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <main className="min-h-screen bg-carbon">
      <ScrollProgress />
      <Navbar />
      <h1 className="sr-only">Sauced - End-to-end footwear and apparel sourcing from India</h1>
      <HeroSection />
      {/* Section 1: What We Do / Our Expertise */}
      <ExpertiseSection />
      {/* Section 2: How Brands Benefit From Us */}
      <BenefitsSection />
      {/* Section 3: Our Clients */}
      <ClientsSection />
      {/* Section 4: Testimonials */}
      <TestimonialsSection />
      {/* Pricing */}
      <PricingOverview />
      {/* Section 5: Book a Call + Contact */}
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
};

export default Index;
