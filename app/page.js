import Hero from "@/components/sections/Hero";
import Lifecycle from "@/components/sections/Lifecycle";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Recognition from "@/components/sections/Recognition";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Lifecycle />
      <Work />
      <About />
      <Recognition />
      <ContactCTA />
    </>
  );
}
