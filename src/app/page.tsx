import { DriedLonganSection } from "@/components/home/DriedLonganSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { FreshLonganSection } from "@/components/home/FreshLonganSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PromotionBanner } from "@/components/home/PromotionBanner";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProductsSection />
      <FreshLonganSection />
      <DriedLonganSection />
      <PromotionBanner />
    </main>
  );
}
