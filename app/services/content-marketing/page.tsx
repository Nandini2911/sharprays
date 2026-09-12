import ContentMarketingDeliverables from "@/components/ContentMarketing/ContentMarketingDeliverables";
import ContentMarketingExplained from "@/components/ContentMarketing/ContentMarketingExplained";
import ContentMarketingFAQs from "@/components/ContentMarketing/ContentMarketingFAQs";
import ContentMarketingFinalCTA from "@/components/ContentMarketing/ContentMarketingFinalCTA";
import ContentMarketingHero from "@/components/ContentMarketing/ContentMarketingHero";
import ContentMarketingProblem from "@/components/ContentMarketing/ContentMarketingProblem";
import ContentMarketingProcess from "@/components/ContentMarketing/ContentMarketingProcess";
import ContentMarketingServices from "@/components/ContentMarketing/ContentMarketingServices";
import ContentPerformanceSection from "@/components/ContentMarketing/ContentPerformanceSection";
import ContentPointOfView from "@/components/ContentMarketing/ContentPointOfView";
import SearchAndAIDiscoverySection from "@/components/ContentMarketing/SearchAndAIDiscoverySection";
import SharpRaysContentFramework from "@/components/ContentMarketing/SharpRaysContentFramework";
import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";


export default function ContentMarketing() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContentMarketingHero/>
      <ContentMarketingExplained/>
      <ContentMarketingProblem/>
      <ContentPointOfView/>
      <ContentMarketingServices/>
      <SearchAndAIDiscoverySection/>
      <SharpRaysContentFramework/>
      <ContentMarketingDeliverables/>
      <ContentPerformanceSection/>
      <ContentMarketingProcess />
      <ContentMarketingFAQs />
      <ContentMarketingFinalCTA />
          <Footer/>
      
    </main>
  );
}