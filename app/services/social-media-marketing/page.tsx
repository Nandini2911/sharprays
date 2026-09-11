import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import PaidSocialMediaAdvertising from "@/components/SocialMediaMarketing/PaidSocialMediaAdvertising";
import ReadyToBeRemembered from "@/components/SocialMediaMarketing/ReadyToBeRemembered";
import SocialMediaMarketingBigIdea from "@/components/SocialMediaMarketing/SocialMediaMarketingBigIdea";
import SocialMediaMarketingFAQs from "@/components/SocialMediaMarketing/SocialMediaMarketingFAQs";
import SocialMediaMarketingFirstConversationToCampaign from "@/components/SocialMediaMarketing/SocialMediaMarketingFirstConversationToCampaign";
import SocialMediaMarketingHero from "@/components/SocialMediaMarketing/SocialMediaMarketingHero";
import SocialMediaMarketingProblem from "@/components/SocialMediaMarketing/SocialMediaMarketingProblem";
import SocialMediaMarketingWhatWeDo from "@/components/SocialMediaMarketing/SocialMediaMarketingWhatWeDo";
import SocialMediaMarketingPlanIncludes from "@/components/SocialMediaMarketing/SocialMediaPlanIncludes";
import SocialMediaPlatformStrategy from "@/components/SocialMediaMarketing/SocialMediaPlatformStrategy";
import SocialMediaPointOfView from "@/components/SocialMediaMarketing/SocialMediaPointOfView";
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
      <SocialMediaMarketingProblem/>
      <SocialMediaPointOfView/>
      <SocialMediaMarketingBigIdea/>
      <SocialMediaMarketingWhatWeDo/>
      <SocialMediaMarketingPlanIncludes/>
      <PaidSocialMediaAdvertising/>
      <SocialMediaWhoWeWorkWith/>
      <SocialMediaPlatformStrategy/>
      <WhySharpRays/>
      <SocialMediaMarketingFirstConversationToCampaign/>
      <SocialMediaResultsProof/>
      <SocialMediaMarketingFAQs/>
      <ReadyToBeRemembered/>

          <Footer/>
      
    </main>
  );
}