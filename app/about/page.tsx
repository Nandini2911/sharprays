

import AboutHero from "@/components/About/AboutHero";
import BeginningSection from "@/components/About/BeginningSection";
import BeliefSection from "@/components/About/BeliefSection";
import FinalHumanCTA from "@/components/About/FinalHumanCTA";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import ThePeople from "@/components/About/ThePeople";
import TheWayWeThink from "@/components/About/TheWayWeThink";
import WhatSharpraysIs from "@/components/About/WhatSharpraysIs";
import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";


export default function About() {
  return (
    <main className="min-h-screen bg-[#051935]">
      <Navbar />
      <AboutHero/>
      <BeginningSection/>
      <BeliefSection/>
      <WhatSharpraysIs/>
      <HowWeWorkSection/>
      <ThePeople/>
      <TheWayWeThink/>
      <FinalHumanCTA/>

          <Footer/>
      
    </main>
  );
}