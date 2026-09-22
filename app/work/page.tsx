


import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import BuildingPortfolioSection from "@/components/Work/BuildingPortfolioSection";
import ChallengeSection from "@/components/Work/ChallengeSection";
import ConnectedCapabilitiesSection from "@/components/Work/ConnectedCapabilitiesSection";
import DesktopStep from "@/components/Work/DesktopStep";
import ExploreByServiceSection from "@/components/Work/ExploreByServiceSection";
import FinalCTASection from "@/components/Work/FinalCTASection";
import FullProjectStorySection from "@/components/Work/FullProjectStorySection";
import HowToReadOurWorkSection from "@/components/Work/HowToReadOurWorkSection";
import ResultsContextSection from "@/components/Work/ResultsContextSection";
import WorkFAQs from "@/components/Work/WorkFAQs";
import SelectedWorkHero from "@/components/Work/WorkHero";


export default function Work() {
  return (
    <main className="min-h-screen bg-[#051935]">
      <Navbar />
  
      <SelectedWorkHero/>
      <HowToReadOurWorkSection />
      <ExploreByServiceSection />
      <ChallengeSection />
      <DesktopStep />
      <ConnectedCapabilitiesSection />
      <ResultsContextSection />
      <BuildingPortfolioSection />
      <FullProjectStorySection />
      <WorkFAQs />
      <FinalCTASection />
          <Footer/>
      
    </main>
  );
}