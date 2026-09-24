import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import ChannelStrategySection from "@/components/PerformanceMarketing/ChannelStrategySection";
import PerformanceMarketingExplained from "@/components/PerformanceMarketing/PerformanceMarketingExplained";
import PerformanceMarketingFAQs from "@/components/PerformanceMarketing/PerformanceMarketingFAQs";
import PerformanceMarketingFinalSections from "@/components/PerformanceMarketing/PerformanceMarketingFinalSections";
import PerformanceMarketingHero from "@/components/PerformanceMarketing/PerformanceMarketingHero";
import PerformanceMarketingPricing from "@/components/PerformanceMarketing/PerformanceMarketingPricing";
import PerformanceMarketingProblem from "@/components/PerformanceMarketing/PerformanceMarketingProblem";
import PerformanceMarketingProcess from "@/components/PerformanceMarketing/PerformanceMarketingProcess";
import PerformanceMarketingServices from "@/components/PerformanceMarketing/PerformanceMarketingServices";
import PerformanceMetricsSection from "@/components/PerformanceMarketing/PerformanceMetricsSection";
import PerformancePointOfView from "@/components/PerformanceMarketing/PerformancePointOfView";


export default function PerformanceMarketing() {
  return (
    <main className="min-h-screen">
      <Navbar />
     <PerformanceMarketingHero />
     <PerformanceMarketingExplained />
     <PerformanceMarketingProblem />
     <PerformancePointOfView />
     <PerformanceMarketingServices />

     <PerformanceMetricsSection />
   
  
     <ChannelStrategySection />
   
     <PerformanceMarketingProcess />
     <PerformanceMarketingPricing />
     <PerformanceMarketingFAQs />
     <PerformanceMarketingFinalSections />
     

          <Footer/>
      
    </main>
  );
}