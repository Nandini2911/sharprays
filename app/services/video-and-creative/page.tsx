// app/services/video-creative/page.tsx

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

import AiVideoAdFormats from "@/components/VideoandCreative/AiVideoAdFormats";
import AiVideoEditingFaq from "@/components/VideoandCreative/AiVideoEditingFaq";
import AiVideoFinalCTA from "@/components/VideoandCreative/AiVideoFinalCTA";

import CreativeChannels from "@/components/VideoandCreative/CreativeChannels";
import SelectedCreative from "@/components/VideoandCreative/SelectedCreative";
import SharpRaysCreativeFramework from "@/components/VideoandCreative/SharpRaysCreativeFramework";

import VideoCreativeDeliverables from "@/components/VideoandCreative/VideoCreativeDeliverables";
import VideoCreativeExplained from "@/components/VideoandCreative/VideoCreativeExplained";
import VideoCreativeFit from "@/components/VideoandCreative/VideoCreativeFit";
import VideoCreativeHero from "@/components/VideoandCreative/VideoCreativeHero";
import VideoCreativeProblem from "@/components/VideoandCreative/VideoCreativeProblem";
import VideoCreativeServices from "@/components/VideoandCreative/VideoCreativeServices";
import VideoSearchAIDiscovery from "@/components/VideoandCreative/VideoSearchAIDiscovery";

export default function VideoCreativePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoCreativeHero />
      <VideoCreativeExplained />
      <VideoCreativeProblem />
      <VideoCreativeServices />
      <AiVideoAdFormats />
      <CreativeChannels />
      <SelectedCreative />
      <VideoSearchAIDiscovery />
      <SharpRaysCreativeFramework />
      <VideoCreativeDeliverables />
      <VideoCreativeFit />
      <AiVideoEditingFaq />
      <AiVideoFinalCTA />
      <Footer />
    </main>
  );
}