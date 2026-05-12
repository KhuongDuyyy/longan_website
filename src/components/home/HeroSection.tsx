import { PackageCheck, Sprout, Truck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ThemedAssetImage } from "@/components/ui/ThemedAssetImage";

const features = [
  { label: "Thu hoạch trong ngày", icon: Sprout },
  { label: "Đóng gói cẩn thận", icon: PackageCheck },
  { label: "Giao hàng toàn quốc", icon: Truck }
];

export function HeroSection() {
  return (
    <section className="border-b border-section-divider bg-gradient-to-br from-section-hero-start via-section-hero-mid to-section-hero-end">
      <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-[1fr_0.92fr] lg:py-16">
        <div>
          <span className="inline-flex rounded-full bg-brand-yellow-soft px-4 py-2 text-sm font-semibold text-brand-green-dark">
            Nhãn mùa mới, tuyển chọn từ vườn
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-brand-green-dark">
            Chuyên nhãn lồng tươi & nhãn sấy tự nhiên
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-main">
            Nhãn lồng ngọt thanh, cùi dày, hạt nhỏ. Nhãn sấy dẻo thơm, không chất bảo quản, phù hợp ăn gia đình và làm quà biếu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#featured-products" size="lg">
              Mua ngay
            </ButtonLink>
            <ButtonLink href="#fresh-longan" tone="secondary" size="lg">
              Xem sản phẩm
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.label} className="flex items-center gap-3 rounded-full bg-surface px-4 py-3 text-sm font-medium text-brand-green-dark">
                  <Icon size={18} className="text-brand-green" aria-hidden />
                  {feature.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <ThemedAssetImage
            src="/assets/fresh-longan.svg"
            alt="Rổ nhãn lồng tươi cùng nhãn sấy và hộp quà"
            width={900}
            height={900}
            priority
            className="relative mx-auto w-full max-w-[560px] rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
