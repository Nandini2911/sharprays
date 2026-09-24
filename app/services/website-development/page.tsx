import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import SelectedWebsiteWork from "@/components/WebsiteDevelopment/SelectedWebsiteWork";
import WebsiteDeliverablesSection from "@/components/WebsiteDevelopment/WebsiteDeliverablesSection";
import WebsiteDevelopmentExplained from "@/components/WebsiteDevelopment/WebsiteDevelopmentExplained";
import WebsiteDevelopmentFAQs from "@/components/WebsiteDevelopment/WebsiteDevelopmentFAQs";
import WebsiteDevelopmentHero from "@/components/WebsiteDevelopment/WebsiteDevelopmentHero";
import WebsiteDevelopmentPricing from "@/components/WebsiteDevelopment/WebsiteDevelopmentPricing";
import WebsiteDevelopmentServicesSection from "@/components/WebsiteDevelopment/WebsiteDevelopmentServicesSection";
import WebsiteDevelopmentTrustSignalItem from "@/components/WebsiteDevelopment/WebsiteDevelopmentTrustSignalItem";
import WebsiteDevlopmentSeoAiSearchFoundation from "@/components/WebsiteDevelopment/websiteDevlopmentSeoAiSearchFoundation";
import WebsiteFinalSections from "@/components/WebsiteDevelopment/WebsiteFinalSections";
import WebsiteFrameworkSection from "@/components/WebsiteDevelopment/WebsiteFrameworkSection";
import WebsitePerformanceSection from "@/components/WebsiteDevelopment/WebsitePerformanceSection";
import WebsitePointOfViewSection from "@/components/WebsiteDevelopment/WebsitePointOfViewSection";
import WebsiteProblemSection from "@/components/WebsiteDevelopment/WebsiteProblemSection";



export default function WebsiteDevelopment() {
  return (
    <main className="min-h-screen">
      <Navbar />
       <WebsiteDevelopmentHero />
       <WebsiteDevelopmentExplained />
       
       <WebsitePointOfViewSection />
        <WebsiteProblemSection/>
       
        <WebsiteDevelopmentServicesSection />

        <WebsitePerformanceSection />

        <WebsiteDevlopmentSeoAiSearchFoundation />

        <WebsiteDevelopmentTrustSignalItem />

        <WebsiteFrameworkSection  />
        <SelectedWebsiteWork/>
        <WebsiteDeliverablesSection />
        <WebsiteDevelopmentPricing/>
      
        <WebsiteDevelopmentFAQs />
        <WebsiteFinalSections />
       
     
     

          <Footer/>
      
    </main>
  );
}