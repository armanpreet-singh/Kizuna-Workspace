import Hero from "../../components/landing/hero";
import Statistics from "../../components/landing/Statistics";
import FeaturesSection from "../../components/landing/FeaturesSection";
import WhyKizuna from "../../components/landing/WhyKizuna";
import ProductPreview from "../../components/landing/ProductPreview";
import Testimonials from "../../components/landing/Testimonials";
import CTASection from "../../components/landing/CTASection";

import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/footer/Footer";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />

      <main>
        <Hero />
        <Statistics />
        <FeaturesSection />
        <WhyKizuna />
        <ProductPreview />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
