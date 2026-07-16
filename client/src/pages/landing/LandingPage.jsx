import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";

// Landing Section Components
import Hero from "@/components/landing/Hero";
import Statistics from "@/components/landing/Statistics";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WhyKizuna from "@/components/landing/WhyKizuna";
import ProductPreview from "@/components/landing/ProductPreview";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
// UI Primitives
import FadeIn from "@/components/ui/FadeIn";

const LandingPage = () => {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />

      <main>
        {/* Hero remains immediate - never animate above-the-fold content */}
        <Hero />

        {/* Subsequent sections fade in smoothly as the user scrolls */}
        <FadeIn>
          <Statistics />
        </FadeIn>

        <FadeIn delay={100}>
          <FeaturesSection />
        </FadeIn>

        <FadeIn delay={100}>
          <WhyKizuna />
        </FadeIn>

        <FadeIn delay={100}>
          <ProductPreview />
        </FadeIn>

        <FadeIn delay={100}>
          <Testimonials />
        </FadeIn>

        <FadeIn delay={100}>
          <CTASection />
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
