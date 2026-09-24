import AiAutomationExplained from "@/components/AIAutomation/AiAutomationExplained";
import AiAutomationFAQ from "@/components/AIAutomation/AiAutomationFAQ";
import AiAutomationFinalCTA from "@/components/AIAutomation/AiAutomationFinalCTA";
import AiAutomationHero from "@/components/AIAutomation/AiAutomationHero";
import AiAutomationHumanBalance from "@/components/AIAutomation/AiAutomationHumanBalance";
import AiAutomationJourney from "@/components/AIAutomation/AiAutomationJourney";
import AiAutomationPartner from "@/components/AIAutomation/AiAutomationPartner";
import AiAutomationPricing from "@/components/AIAutomation/AiAutomationPricing";
import AiAutomationProblem from "@/components/AIAutomation/AiAutomationProblem";
import AiAutomationServices from "@/components/AIAutomation/AiAutomationServices";
import AutomationByBusinessFunction from "@/components/AIAutomation/AutomationByBusinessFunction";
import BeforeAfterAutomation from "@/components/AIAutomation/BeforeAfterAutomation";
import HumanInTheLoopAutomation from "@/components/AIAutomation/HumanInTheLoopAutomation";
import SharpRaysAutomationFramework from "@/components/AIAutomation/SharpRaysAutomationFramework";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function AiAutomationPage() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar/>
      <AiAutomationHero />
      <AiAutomationExplained/>
      <AiAutomationProblem/>
      <AiAutomationHumanBalance/>
      <AiAutomationJourney/>
      <AiAutomationServices/>
      <AutomationByBusinessFunction/>
      <BeforeAfterAutomation/>
      <SharpRaysAutomationFramework/>
      <HumanInTheLoopAutomation/>
      <AiAutomationPricing/>
      <AiAutomationFAQ/>
      <AiAutomationPartner/>
      <AiAutomationFinalCTA/>
      <Footer/>
    </main>
  );
}