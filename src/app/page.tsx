import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import HowItWorks from "@/components/sections/how-it-works";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import HomeVideos from "@/components/sections/home-videos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeVideos />
      <Services />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}