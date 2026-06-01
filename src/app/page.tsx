import BeadworkShowcase from "@/components/sections/BeadworkShowcase";
import BrandStory from "@/components/sections/BrandStory";
import BroochSpotlight from "@/components/sections/BroochSpotlight";
import CollectionDiptych from "@/components/sections/CollectionDiptych";
import ContempoShowcase from "@/components/sections/ContempoShowcase";
import EditorialBanner from "@/components/sections/EditorialBanner";
import EditorialStrip from "@/components/sections/EditorialStrip";
import FinalCTA from "@/components/sections/FinalCTA";
import GalleryWall from "@/components/sections/GalleryWall";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Ticker />
      <CollectionDiptych />
      <EditorialStrip />
      <BeadworkShowcase />
      <EditorialBanner />
      <ContempoShowcase />
      <BroochSpotlight />
      <GalleryWall />
      <BrandStory />
      <FinalCTA />
    </main>
  );
}
