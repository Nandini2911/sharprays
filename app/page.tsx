import BigIdeaSection from "@/components/BigIdeaSection";
import Hero from "@/components/Hero";
import HookSection from "@/components/HookSection";
import Navbar from "@/components/Navbar";
import WhatCouldWeDoSection from "@/components/WhatCouldWeDoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051935]">
      <Navbar />
      <Hero/>
      <HookSection/>
      <BigIdeaSection/>
      <WhatCouldWeDoSection/>

      
    </main>
  );
}