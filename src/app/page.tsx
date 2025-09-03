import Hero from "../components/Hero";

import Time from "@/components/Time"; 
import Location from "../components/Location";
import Story from "../components/Story";
import TheDay from "../components/TheDay";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main className="font-sans">
    
      <Hero />
      <Time/>
      <Location />
      <Story />
      <TheDay />
      <FAQ />
    </main>
  );
}
