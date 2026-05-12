import { ProductTabs } from "@/components/products/ProductTabs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { driedProducts } from "@/data/products";

export function DriedLonganSection() {
  return (
    <section id="dried-longan" className="border-b border-section-divider bg-section-dried py-16 scroll-mt-40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title="Nhãn sấy dẻo thơm" description="Dẻo thơm, ngọt tự nhiên, tiện bảo quản và dùng làm quà." />
        <ProductTabs tabs={["Tất cả", "Túi 250g", "Túi 500g", "Hộp quà"]} products={driedProducts} />
      </div>
    </section>
  );
}
