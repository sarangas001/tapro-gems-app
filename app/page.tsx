import AppointmentCTA from "@/components/sections/AppointmentCTA";
import BrandIntro from "@/components/sections/BrandIntro";
import Certification from "@/components/sections/Certification";
import CinematicStory from "@/components/sections/CinematicStory";
import CollectorsPanel from "@/components/sections/CollectorsPanel";
import ExploreCategories from "@/components/sections/ExploreCategories";
import FeaturedGemstones from "@/components/sections/FeaturedGemstones";
import FounderStory from "@/components/sections/FounderStory";
import Hero from "@/components/sections/Hero";
import WhyTapro from "@/components/sections/WhyTapro";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ExploreCategories />
      <FeaturedGemstones />
      <WhyTapro />
      <CinematicStory />
      <CollectorsPanel />
      <Certification />
      <FounderStory />
      <AppointmentCTA />
    </>
  );
}
