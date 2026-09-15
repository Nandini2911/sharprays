import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import WebsiteDevelopmentExplained from "@/components/WebsiteDevelopment/WebsiteDevelopmentExplained";
import WebsiteDevelopmentHero from "@/components/WebsiteDevelopment/WebsiteDevelopmentHero";
import WebsitePointOfViewSection from "@/components/WebsiteDevelopment/WebsitePointOfViewSection";
import WebsiteProblemSection from "@/components/WebsiteDevelopment/WebsiteProblemSection";



export default function WebsiteDevelopment() {
  return (
    <main className="min-h-screen">
      <Navbar />
       <WebsiteDevelopmentHero />
       <WebsiteDevelopmentExplained />
       <WebsitePointOfViewSection />
        <WebsiteProblemSection/>
       
       
     
     

          <Footer/>
      
    </main>
  );
}