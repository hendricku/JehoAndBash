import Hero from "../components/Hero";

import Time from "@/components/Time"; 
import Location from "../components/Location";
import Story from "../components/Story";
import TheDay from "../components/TheDay";
import FAQ from "../components/FAQ";
import RSVP from "../components/Rsvp";
import Verse from "@/components/Verse";

export default function Home() {
  return (
    <main className="font-sans">
    
      <Hero />
      <Time/>
      <Location />
      <Story />
      <TheDay />
      <FAQ />
      <Verse />
      <RSVP />
    </main>
  );
}
