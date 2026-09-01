import BeforeYouAskSection from "@/components/BeforeYouAskSection";
import BigIdeaSection from "@/components/BigIdeaSection";
import DifferenceSection from "@/components/DifferenceSection";
import Hero from "@/components/Hero";
import HookSection from "@/components/HookSection";
import HumanSection from "@/components/HumanSection";
import Navbar from "@/components/Navbar";
import WhatCouldWeDoSection from "@/components/WhatCouldWeDoSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import YourMethodSection from "@/components/YourMethodSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051935]">
      <Navbar />
      <Hero/>
      <HookSection/>
      <BigIdeaSection/>
      <WhatCouldWeDoSection/>
      <DifferenceSection/>
      <YourMethodSection/>
      <HumanSection/>
      <WhoItsForSection/>
      <BeforeYouAskSection/>
      <FinalCTASection/>
      <Footer/>
      
    </main>
  );
}