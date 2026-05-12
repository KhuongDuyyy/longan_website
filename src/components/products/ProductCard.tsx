"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/site/CartProvider";
import { ThemedAssetImage } from "@/components/ui/ThemedAssetImage";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem, openCart } = useCart();
  const variantPrices = product.variants?.map((variant) => variant.price) ?? [];
  const startingPrice = variantPrices.length > 0 ? Math.min(...variantPrices) : product.price;
  const hasVariants = Boolean(product.variants?.length);

  function handleAdd() {
    if (hasVariants) {
      router.push(`/san-pham/${product.id}`);
      return;
    }

    addItem(product);
    openCart();
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface transition hover:shadow-xl">
      <Link href={`/san-pham/${product.id}`} className="relative block aspect-square overflow-hidden bg-neutral-soft" aria-label={`Xem chi tiết ${product.name}`}>
        <ThemedAssetImage
          src={product.image}
          alt={product.name}
          width={900}
          height={900}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-brand-green-dark shadow-sm">
            {product.badge}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 line-clamp-2 min-h-[60px] text-2xl font-semibold leading-tight text-brand-green-dark">
          <Link href={`/san-pham/${product.id}`} className="transition hover:text-brand-green">
            {product.name}
          </Link>
        </h3>
        <p className="mb-4 line-clamp-2 min-h-[42px] text-sm text-text-muted">{product.description}</p>

        <div className="mt-auto">
          <div className="mb-4 flex flex-wrap items-baseline gap-2">
            <span className="text-2xl font-semibold text-price-accent">
              {hasVariants ? `Từ ${formatCurrency(startingPrice)}` : formatCurrency(product.price)}
            </span>
            {!hasVariants && product.oldPrice ? <span className="text-sm text-text-muted line-through">{formatCurrency(product.oldPrice)}</span> : null}
            <span className="text-xs text-text-muted">/ {hasVariants ? "phân loại" : product.unit}</span>
          </div>
          <Button type="button" className="w-full" onClick={handleAdd}>
            {hasVariants ? "Chọn phân loại" : "Thêm vào giỏ"}
          </Button>
          <Link href={`/san-pham/${product.id}`} className="mt-3 inline-flex text-sm font-medium text-brand-green hover:underline">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}
