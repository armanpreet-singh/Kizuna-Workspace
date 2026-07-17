import PublicLayout from "../../layouts/PublicLayout";
import Navbar from "../../components/navigation/Navbar";
import RevealOnScroll from "../../components/ui/RevealOnScroll";
import Hero from "../../components/landing/Hero";
import Statistics from "../../components/landing/Statistics";
import FeaturesSection from "../../components/landing/FeaturesSection";
import WhyKizuna from "../../components/landing/WhyKizuna";
import ProductPreview from "../../components/landing/ProductPreview";
import Testimonials from "../../components/landing/Testimonials";
import CTASection from "../../components/landing/CTASection";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <PublicLayout>
      <Navbar />

      {/* Hero remains immediate - never animate above-the-fold content */}
      <Hero />

      {/* Subsequent sections use RevealOnScroll to guide the user's reading journey */}
      <RevealOnScroll>
        <Statistics />
      </RevealOnScroll>

      <RevealOnScroll>
        <FeaturesSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <WhyKizuna />
      </RevealOnScroll>

      <RevealOnScroll>
        <ProductPreview />
      </RevealOnScroll>

      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>

      <RevealOnScroll>
        <CTASection />
      </RevealOnScroll>

      <Footer />
    </PublicLayout>
  );
};

export default LandingPage;
