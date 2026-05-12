import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/components/products/ProductDetailContent";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm"
    };
  }

  return {
    title: product.name,
    description: `${product.description}. Giá ${formatCurrency(product.price)} / ${product.unit}.`,
    openGraph: {
      title: product.name,
      description: product.longDescription ?? product.description,
      images: [product.image],
      type: "website"
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductDetailContent product={product} relatedProducts={getRelatedProducts(product)} />
    </main>
  );
}
