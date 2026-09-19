// app/services/video-creative/page.tsx

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import AiVideoAdFormats from "@/components/VideoandCreative/AiVideoAdFormats";
import AiVideoEditingFaq from "@/components/VideoandCreative/AiVideoEditingFaq";
import AiVideoFinalAnswer from "@/components/VideoandCreative/AiVideoFinalAnswer";
import AiVideoFinalCTA from "@/components/VideoandCreative/AiVideoFinalCTA";
import AiVideoServiceFit from "@/components/VideoandCreative/AiVideoServiceFit";
import CreativeChannels from "@/components/VideoandCreative/CreativeChannels";
import CreativeJourney from "@/components/VideoandCreative/CreativeJourney";
import CreativePerformance from "@/components/VideoandCreative/CreativePerformance";
import SelectedCreative from "@/components/VideoandCreative/SelectedCreative";
import SharpRaysCreativeFramework from "@/components/VideoandCreative/SharpRaysCreativeFramework";
import VideoCreativeDeliverables from "@/components/VideoandCreative/VideoCreativeDeliverables";
import VideoCreativeExplained from "@/components/VideoandCreative/VideoCreativeExplained";
import VideoCreativeFit from "@/components/VideoandCreative/VideoCreativeFit";
import VideoCreativeHero from "@/components/VideoandCreative/VideoCreativeHero";
import VideoCreativePointOfView from "@/components/VideoandCreative/VideoCreativePointOfView";
import VideoCreativeProblem from "@/components/VideoandCreative/VideoCreativeProblem";
import VideoCreativeProcess from "@/components/VideoandCreative/VideoCreativeProcess";
import VideoCreativeServices from "@/components/VideoandCreative/VideoCreativeServices";
import VideoSearchAIDiscovery from "@/components/VideoandCreative/VideoSearchAIDiscovery";


export default function VideoCreativePage() {
  return (
<main className="min-h-screen">
      <Navbar />     
       <VideoCreativeHero />
       <VideoCreativeExplained/>
       <VideoCreativeProblem/>
       <VideoCreativePointOfView/>
       <CreativeJourney/>
       <VideoCreativeServices/>
       <AiVideoAdFormats/>
       <CreativeChannels/>
       <VideoSearchAIDiscovery/>
       <SharpRaysCreativeFramework/>
       <VideoCreativeDeliverables/>
       <CreativePerformance/>
       <SelectedCreative/>
       <VideoCreativeFit/>
       <VideoCreativeProcess/>
       <AiVideoServiceFit/>
       <AiVideoEditingFaq/>
       <AiVideoFinalAnswer/>
       <AiVideoFinalCTA/>
       <Footer/>
    </main>

  );
}