import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import SocialMediaMarketingBigIdea from "@/components/SocialMediaMarketing/SocialMediaMarketingBigIdea";
import SocialMediaMarketingHero from "@/components/SocialMediaMarketing/SocialMediaMarketingHero";
import SocialMediaMarketingProblem from "@/components/SocialMediaMarketing/SocialMediaMarketingProblem";
import SocialMediaMarketingWhatWeDo from "@/components/SocialMediaMarketing/SocialMediaMarketingWhatWeDo";


export default function SocialMediaMarketing() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SocialMediaMarketingHero/>
      <SocialMediaMarketingProblem/>
      <SocialMediaMarketingBigIdea/>
      <SocialMediaMarketingWhatWeDo/>
    

          <Footer/>
      
    </main>
  );
}