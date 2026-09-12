import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import SEOExplainedSection from "@/components/SerchEngineOptimization/SEOExplainedSection";
import SEOHeroSection from "@/components/SerchEngineOptimization/SEOHeroSection";
import SEOProblemSection from "@/components/SerchEngineOptimization/SEOProblemSection";
import SEOPointOfViewSection from "@/components/SerchEngineOptimization/SEOPointOfViewSection";
import SEOSearchJourneySection from "@/components/SerchEngineOptimization/SEOSearchJourneySection";
import SEOServicesSection from "@/components/SerchEngineOptimization/SEOServicesSection";
import SEOForAISearchSection from "@/components/SerchEngineOptimization/SEOForAISearchSection";
import SEOFrameworkSection from "@/components/SerchEngineOptimization/SEOFrameworkSection";
import SEODeliverablesSection from "@/components/SerchEngineOptimization/SEODeliverablesSection";
import SEOBetterApproachSection from "@/components/SerchEngineOptimization/SEOBetterApproachSection";
import SEOPerformanceSection from "@/components/SerchEngineOptimization/SEOPerformanceSection";
import SEOWhoItsForSection from "@/components/SerchEngineOptimization/SEOWhoItsForSection";
import WhySharpRaysSection from "@/components/SerchEngineOptimization/WhySharpRaysSection";
import SEOFAQs from "@/components/SerchEngineOptimization/SEOFAQs";
import SEOClosingSections from "@/components/SerchEngineOptimization/SEOClosingSections";

export default function SearchEngineOptimization() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SEOHeroSection/>
      <SEOExplainedSection/>
      <SEOProblemSection/>
      <SEOPointOfViewSection/>
      <SEOSearchJourneySection/>
      <SEOServicesSection/>
      <SEOForAISearchSection/>
      <SEOFrameworkSection/>
      <SEODeliverablesSection/>
      <SEOBetterApproachSection/>
      <SEOPerformanceSection/>
      <SEOWhoItsForSection/>
      <WhySharpRaysSection/>
      <SEOFAQs/>
      <SEOClosingSections/>

          <Footer/>
      
    </main>
  );
}