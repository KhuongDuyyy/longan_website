import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { featuredProducts } from "@/data/products";

export function FeaturedProductsSection() {
  return (
    <section id="featured-products" className="border-b border-section-divider bg-section-featured py-16 scroll-mt-40">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader title="Sản phẩm nổi bật" description="Những lựa chọn được khách hàng yêu thích nhất" />
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
}
