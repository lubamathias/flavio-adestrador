import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import HowItWorks from "@/components/sections/how-it-works";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}