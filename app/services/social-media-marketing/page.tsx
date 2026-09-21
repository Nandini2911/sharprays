import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import SocialMediaClosingSections from "@/components/SocialMediaMarketing/ReadyToBeRemembered";
import SocialMediaMarketingFAQs from "@/components/SocialMediaMarketing/SocialMediaMarketingFAQs";
import SocialMediaMarketingFirstConversationToCampaign from "@/components/SocialMediaMarketing/SocialMediaMarketingFirstConversationToCampaign";
import SocialMediaMarketingHero from "@/components/SocialMediaMarketing/SocialMediaMarketingHero";
import SocialMediaMarketingProblem from "@/components/SocialMediaMarketing/SocialMediaMarketingProblem";
import SocialMediaMarketingWhatWeDo from "@/components/SocialMediaMarketing/SocialMediaMarketingWhatWeDo";
import SocialMediaMarketingPlanIncludes from "@/components/SocialMediaMarketing/SocialMediaPlanIncludes";
import SocialMediaPlatformStrategy from "@/components/SocialMediaMarketing/SocialMediaPlatformStrategy";
import SocialMediaPricing from "@/components/SocialMediaMarketing/SocialMediaPricing";
import SocialMediaQuickAnswer from "@/components/SocialMediaMarketing/SocialMediaQuickAnswer";
import SocialMediaResultsProof from "@/components/SocialMediaMarketing/SocialMediaResultsProof";
import SocialMediaWhoWeWorkWith from "@/components/SocialMediaMarketing/SocialMediaWhoWeWorkWith";
import WhySharpRays from "@/components/SocialMediaMarketing/WhySharpRays";

export default function SocialMediaMarketing() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SocialMediaMarketingHero/>
      <SocialMediaQuickAnswer/>
        <SocialMediaMarketingWhatWeDo/>
      <SocialMediaMarketingProblem/>
    
     
    
      <SocialMediaMarketingPlanIncludes/>
    
      <SocialMediaWhoWeWorkWith/>
      <SocialMediaPlatformStrategy/>
      <WhySharpRays/>
      <SocialMediaMarketingFirstConversationToCampaign/>

      <SocialMediaResultsProof/>
      <SocialMediaPricing />
      <SocialMediaMarketingFAQs/>
      <SocialMediaClosingSections />
    

          <Footer/>
      
    </main>
  );
}