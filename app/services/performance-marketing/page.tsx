import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import ChannelStrategySection from "@/components/PerformanceMarketing/ChannelStrategySection";
import PerformanceDeliverablesSection from "@/components/PerformanceMarketing/PerformanceDeliverablesSection";
import PerformanceFrameworkSection from "@/components/PerformanceMarketing/PerformanceFrameworkSection";
import PerformanceMarketingExplained from "@/components/PerformanceMarketing/PerformanceMarketingExplained";
import PerformanceMarketingFAQs from "@/components/PerformanceMarketing/PerformanceMarketingFAQs";
import PerformanceMarketingFinalSections from "@/components/PerformanceMarketing/PerformanceMarketingFinalSections";
import PerformanceMarketingFitSection from "@/components/PerformanceMarketing/PerformanceMarketingFitSection";
import PerformanceMarketingHero from "@/components/PerformanceMarketing/PerformanceMarketingHero";
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
     <PerformanceFrameworkSection />
     <PerformanceDeliverablesSection />
     <ChannelStrategySection />
     <PerformanceMarketingFitSection />
     <PerformanceMarketingProcess />
     <PerformanceMarketingFAQs />
     <PerformanceMarketingFinalSections />
     

          <Footer/>
      
    </main>
  );
}