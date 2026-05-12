import { Gift } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

export function PromotionBanner() {
  return (
    <section id="promotion" className="border-b border-section-divider bg-gradient-to-r from-section-promo-start via-section-promo-mid to-section-promo-end py-16 scroll-mt-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 rounded-2xl bg-surface p-6 shadow-lg md:grid-cols-[1fr_auto] md:p-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-brand-green-dark">
              <Gift size={15} aria-hidden />
              Ưu đãi đặc biệt
            </span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-brand-green-dark">Ưu đãi dành cho khách mới</h2>
            <p className="mt-2 text-base text-text-muted">Giảm 10% cho đơn hàng đầu tiên khi mua nhãn lồng tươi, nhãn sấy hoặc combo quà biếu.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-[auto_auto] sm:items-center">
            <div className="rounded-2xl border-2 border-dashed border-brand-yellow bg-brand-yellow-soft px-6 py-4 text-center">
              <p className="text-xs uppercase text-text-muted">Mã giảm giá</p>
              <p className="text-2xl font-semibold text-brand-green-dark">NHANVIET10</p>
            </div>
            <ButtonLink href="#featured-products" size="lg">
              Mua sắm ngay
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
