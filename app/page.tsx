import AppointmentCTA from "@/components/sections/AppointmentCTA";
import BrandIntro from "@/components/sections/BrandIntro";
import Certification from "@/components/sections/Certification";
import CinematicStory from "@/components/sections/CinematicStory";
import CollectionsBanner from "@/components/sections/CollectionsBanner";
import CollectorsPanel from "@/components/sections/CollectorsPanel";
import ExploreCategories from "@/components/sections/ExploreCategories";
import FeaturedGemstones from "@/components/sections/FeaturedGemstones";
import FounderStory from "@/components/sections/FounderStory";
import HeroSection from "@/components/sections/HeroSection";
import WhyTapro from "@/components/sections/WhyTapro";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <FeaturedGemstones />
      <CollectionsBanner />
      <ExploreCategories />
      <WhyTapro />
      <CinematicStory />
      <CollectorsPanel />
      <Certification />
      <FounderStory />
      <AppointmentCTA />
    </>
  );
}
