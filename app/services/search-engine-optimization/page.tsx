import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import SEOExplainedSection from "@/components/SerchEngineOptimization/SEOExplainedSection";
import SEOHeroSection from "@/components/SerchEngineOptimization/SEOHeroSection";
import SEOProblemSection from "@/components/SerchEngineOptimization/SEOProblemSection";
import SEOServicesSection from "@/components/SerchEngineOptimization/SEOServicesSection";
import SEOBetterApproachSection from "@/components/SerchEngineOptimization/SEOBetterApproachSection";
import SEOPerformanceSection from "@/components/SerchEngineOptimization/SEOPerformanceSection";
import SEOWhoItsForSection from "@/components/SerchEngineOptimization/SEOWhoItsForSection";
import WhySharpRaysSection from "@/components/SerchEngineOptimization/WhySharpRaysSection";
import SEOFAQs from "@/components/SerchEngineOptimization/SEOFAQs";
import SEOClosingSections from "@/components/SerchEngineOptimization/SEOClosingSections";
import SEOPricingSection from "@/components/SerchEngineOptimization/SEOPricingSection";
import SEOSelectedWork from "@/components/SerchEngineOptimization/SEOSelectedWork";

export default function SearchEngineOptimization() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SEOHeroSection/>
      <SEOExplainedSection/>
      <SEOProblemSection/>
    
  
      <SEOServicesSection/>
    

    
   
  

      <SEOPerformanceSection/>

      <SEOWhoItsForSection/>
      <SEOSelectedWork />

      <WhySharpRaysSection/>
      <SEOPricingSection />
      <SEOFAQs/>
      <SEOClosingSections/>

          <Footer/>
      
    </main>
  );
}