

import AboutHero from "@/components/About/AboutHero";
import BeginningSection from "@/components/About/BeginningSection";
import WhatSharpraysIs from "@/components/About/WhatSharpraysIs";
import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";


export default function About() {
  return (
    <main className="min-h-screen bg-[#051935]">
      <Navbar />
      <AboutHero/>
      <BeginningSection/>
   
      <WhatSharpraysIs/>
          <Footer/>
      
    </main>
  );
}