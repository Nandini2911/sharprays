import BeforeYouAskSection from "@/components/Home/BeforeYouAskSection";
import BigIdeaSection from "@/components/Home/BigIdeaSection";
import DifferenceSection from "@/components/Home/DifferenceSection";
import FinalCTASection from "@/components/Home/FinalCTASection";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import HookSection from "@/components/Home/HookSection";
import HumanSection from "@/components/Home/HumanSection";
import Navbar from "@/components/Home/Navbar";
import WhatCouldWeDoSection from "@/components/Home/WhatCouldWeDoSection";
import WhoItsForSection from "@/components/Home/WhoItsForSection";
import YourMethodSection from "@/components/Home/YourMethodSection";


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