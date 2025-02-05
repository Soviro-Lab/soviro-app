import Header from "./home/Header";
// import CTABox from "./home/CTABox";
import Footer from "./home/Footer";
import HeroSection from "@/app/home/HeroSection";
import FeaturesSection from "@/app/home/FeaturesSection";
import AgentsSection from "@/app/home/AgentsSection";
import TokenomicsSection from "@/app/home/TokenomicsSection";
import RoadmapSection from "@/app/home/RoadmapSection";
import { Providers } from "@/components/providers/privy-provider";

  return (
    <Providers>
    <main>
      <HeroSection />
      <FeaturesSection />
      <AgentsSection />
      <TokenomicsSection />
      <RoadmapSection />
      <Footer />
    </main>
    </Providers>
  );
}
