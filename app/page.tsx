import Hero from "@/components/Hero";
import HookSection from "@/components/HookSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#051935]">
      <Navbar />
      <Hero/>
      <HookSection/>

      
    </main>
  );
}