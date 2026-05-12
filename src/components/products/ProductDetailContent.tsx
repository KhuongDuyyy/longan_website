"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Clock3,
  Leaf,
  Minus,
  PackageCheck,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Truck
} from "lucide-react";
import type { Product } from "@/types/product";
import { useCart } from "@/components/site/CartProvider";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ThemedAssetImage } from "@/components/ui/ThemedAssetImage";
import { formatCurrency } from "@/lib/utils";
import { ProductGrid } from "./ProductGrid";

const trustItems = [
  { title: "Giao nhanh", description: "Đóng gói và giao trong khung hẹn.", icon: Truck },
  { title: "Tuyển chọn kỹ", description: "Sản phẩm được phân loại trước khi gửi.", icon: ShieldCheck },
  { title: "Đổi trả rõ ràng", description: "Hỗ trợ khi sản phẩm lỗi do vận chuyển.", icon: PackageCheck }
];

const buyingNotes = [
  "Tư vấn quy cách phù hợp cho gia đình, quà biếu hoặc đặt số lượng lớn.",
  "Đơn từ 499.000đ được miễn phí giao hàng theo chính sách hiện tại.",
  "Có thể ghi chú thời gian nhận hàng trong bước thanh toán."
];

type ProductDetailContentProps = {
  product: Product;
  relatedProducts: Product[];
};

export function ProductDetailContent({ product, relatedProducts }: ProductDetailContentProps) {
  const variants = useMemo(() => product.variants ?? [], [product.variants]);
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id ?? "");
  const selectedVariant = variants.find((variant) => variant.id === selectedVariantId) ?? variants[0];
  const gallery = useMemo(() => {
    const variantImages = variants.map((variant) => variant.image).filter((image): image is string => Boolean(image));

    return Array.from(new Set([...(product.detailImages?.filter(Boolean) ?? [product.image]), ...variantImages]));
  }, [product.detailImages, product.image, variants]);
  const [selectedImage, setSelectedImage] = useState(gallery[0] ?? product.image);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();
  const displayPrice = selectedVariant?.price ?? product.price;
  const displayOldPrice = selectedVariant?.oldPrice ?? product.oldPrice;
  const displayUnit = selectedVariant?.unit ?? product.unit;

  function addToCart() {
    addItem(product, quantity, selectedVariant);
    openCart();
  }

  function selectVariant(variantId: string) {
    const nextVariant = variants.find((variant) => variant.id === variantId);

    setSelectedVariantId(variantId);
    if (nextVariant?.image) {
      setSelectedImage(nextVariant.image);
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-green-light via-surface to-brand-cream py-8">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-text-muted" aria-label="Breadcrumb">
            <Link href="/" className="font-medium text-brand-green hover:underline">
              Trang chủ
            </Link>
            <ChevronRight size={16} aria-hidden />
            <Link href="/#featured-products" className="font-medium text-brand-green hover:underline">
              Sản phẩm
            </Link>
            <ChevronRight size={16} aria-hidden />
            <span className="line-clamp-2 text-text-main">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.98fr)]">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-3xl border border-border-soft bg-neutral-soft shadow-sm">
                <ThemedAssetImage
                  src={selectedImage}
                  alt={product.name}
                  width={1100}
                  height={1100}
                  priority
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={`overflow-hidden rounded-2xl border bg-surface transition ${
                      image === selectedImage ? "border-brand-green ring-2 ring-brand-green-light" : "border-border-soft hover:border-brand-green"
                    }`}
                    onClick={() => setSelectedImage(image)}
                    aria-label={`Xem ảnh sản phẩm ${index + 1}`}
                  >
                    <ThemedAssetImage src={image} alt="" width={220} height={220} className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <article className="rounded-3xl border border-border-soft bg-surface p-5 shadow-sm lg:p-7">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                {product.badge ? (
                  <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold uppercase text-brand-green-dark">{product.badge}</span>
                ) : null}
                <span className="rounded-full bg-brand-green-light px-3 py-1 text-xs font-semibold text-brand-green-dark">
                  {product.origin}
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight text-brand-green-dark">{product.name}</h1>
              <p className="mt-3 text-base leading-relaxed text-text-muted">{product.description}</p>

              <div className="mt-6 rounded-2xl bg-neutral-soft p-5">
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-4xl font-semibold text-price-accent">{formatCurrency(displayPrice)}</span>
                  {displayOldPrice ? <span className="pb-1 text-base text-text-muted line-through">{formatCurrency(displayOldPrice)}</span> : null}
                  <span className="pb-1 text-sm text-text-muted">/ {displayUnit}</span>
                </div>
                <p className="mt-2 text-sm text-text-muted">Giá đã bao gồm đóng gói tiêu chuẩn. Phí giao hàng được tính ở bước đặt hàng.</p>
              </div>

              {variants.length > 0 ? (
                <fieldset className="mt-6">
                  <legend className="mb-3 text-sm font-semibold text-brand-green-dark">Chọn phân loại</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {variants.map((variant) => {
                      const isActive = variant.id === selectedVariant?.id;

                      return (
                        <button
                          key={variant.id}
                          type="button"
                          className={`rounded-2xl border p-4 text-left transition ${
                            isActive
                              ? "border-brand-green bg-brand-green-light shadow-sm"
                              : "border-border-soft bg-surface hover:border-brand-green hover:bg-neutral-soft"
                          }`}
                          onClick={() => selectVariant(variant.id)}
                          aria-pressed={isActive}
                        >
                          <span className="flex items-start justify-between gap-3">
                            <span>
                              <span className="block text-sm font-semibold text-brand-green-dark">{variant.name}</span>
                              {variant.description ? <span className="mt-1 block text-xs leading-relaxed text-text-muted">{variant.description}</span> : null}
                            </span>
                            {variant.badge ? (
                              <span className="shrink-0 rounded-full bg-brand-yellow px-2 py-1 text-[11px] font-semibold uppercase text-brand-green-dark">
                                {variant.badge}
                              </span>
                            ) : null}
                          </span>
                          <span className="mt-3 flex flex-wrap items-end gap-2">
                            <span className="text-base font-semibold text-price-accent">{formatCurrency(variant.price)}</span>
                            {variant.oldPrice ? <span className="text-xs text-text-muted line-through">{formatCurrency(variant.oldPrice)}</span> : null}
                            <span className="text-xs text-text-muted">/ {variant.unit}</span>
                          </span>
                          {variant.stockLabel ? <span className="mt-2 block text-xs font-medium text-brand-green">{variant.stockLabel}</span> : null}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ) : null}

              <ul className="mt-6 grid gap-3">
                {(product.highlights ?? []).map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-text-main">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 grid gap-4 sm:grid-cols-[160px_1fr]">
                <div>
                  <label htmlFor="product-quantity" className="mb-2 block text-sm font-semibold text-brand-green-dark">
                    Số lượng
                  </label>
                  <div className="inline-flex h-12 items-center rounded-full border border-border-soft bg-surface">
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center text-text-main disabled:opacity-40"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      disabled={quantity === 1}
                      aria-label="Giảm số lượng"
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      id="product-quantity"
                      value={quantity}
                      onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
                      className="h-12 w-12 border-x border-border-soft text-center text-sm font-semibold outline-none"
                      inputMode="numeric"
                      aria-label="Số lượng sản phẩm"
                    />
                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center text-text-main"
                      onClick={() => setQuantity((current) => current + 1)}
                      aria-label="Tăng số lượng"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Button type="button" size="lg" className="w-full" onClick={addToCart}>
                    <ShoppingCart size={18} aria-hidden />
                    Thêm vào giỏ
                  </Button>
                  <Button type="button" size="lg" tone="secondary" className="w-full" onClick={addToCart}>
                    Mua ngay
                  </Button>
                </div>
              </div>

              <a
                href="tel:0866918366"
                className="mt-6 flex items-center gap-3 rounded-2xl border border-border-soft bg-brand-cream px-4 py-3 text-sm font-medium text-brand-green-dark transition hover:border-brand-green"
              >
                <Phone size={18} className="text-brand-green" aria-hidden />
                Cần tư vấn số lượng? Gọi 0866.918.366
              </a>
            </article>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
                  <Icon size={26} className="mb-3 text-brand-green" aria-hidden />
                  <h2 className="text-xl font-semibold leading-tight text-brand-green-dark">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
              <Leaf size={24} aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-brand-green-dark">Mô tả sản phẩm</h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{product.longDescription}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-neutral-soft p-4">
                <p className="text-xs font-semibold uppercase text-brand-green">Danh mục</p>
                <p className="mt-1 text-sm font-medium text-text-main">{product.category === "fresh" ? "Nhãn tươi" : product.category === "dried" ? "Nhãn sấy" : "Combo quà"}</p>
              </div>
              <div className="rounded-2xl bg-neutral-soft p-4">
                <p className="text-xs font-semibold uppercase text-brand-green">Đơn vị bán</p>
                <p className="mt-1 text-sm font-medium text-text-main">{product.unit}</p>
              </div>
              {selectedVariant ? (
                <div className="rounded-2xl bg-neutral-soft p-4 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase text-brand-green">Phân loại đang chọn</p>
                  <p className="mt-1 text-sm font-medium text-text-main">{selectedVariant.name}</p>
                </div>
              ) : null}
            </div>
          </article>

          <aside className="rounded-3xl border border-border-soft bg-neutral-soft p-6">
            <h2 className="text-3xl font-semibold leading-tight text-brand-green-dark">Thông tin chi tiết</h2>
            <dl className="mt-5 grid gap-3">
              {(product.specifications ?? []).map((item) => (
                <div key={item.label} className="rounded-2xl bg-surface p-4">
                  <dt className="text-xs font-semibold uppercase text-text-muted">{item.label}</dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-text-main">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-neutral-soft py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
              <Clock3 size={24} aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-brand-green-dark">Hướng dẫn bảo quản</h2>
            <ul className="mt-5 grid gap-3">
              {(product.storageTips ?? []).map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-text-main">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" aria-hidden />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
              <ShieldCheck size={24} aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold leading-tight text-brand-green-dark">Cam kết mua hàng</h2>
            <ul className="mt-5 grid gap-3">
              {buyingNotes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-relaxed text-text-main">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-green" aria-hidden />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader title="Sản phẩm liên quan" description="Những lựa chọn cùng nhóm sản phẩm hoặc phù hợp để mua kèm." />
          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </>
  );
}
