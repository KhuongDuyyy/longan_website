import { ProductTabs } from "@/components/products/ProductTabs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { freshProducts } from "@/data/products";

export function FreshLonganSection() {
  return (
    <section id="fresh-longan" className="border-b border-section-divider bg-section-fresh py-16 scroll-mt-40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title="Nhãn lồng tươi từ vườn" description="Thu hoạch trong ngày, quả đều và đóng gói chống dập." />
        <ProductTabs tabs={["Tất cả", "Theo kg", "Nguyên chùm", "Hộp quà"]} products={freshProducts} />
      </div>
    </section>
  );
}
