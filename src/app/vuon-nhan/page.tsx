import type { Metadata } from "next";
import { Leaf, PackageCheck, Sprout, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ThemedAssetImage } from "@/components/ui/ThemedAssetImage";

export const metadata: Metadata = {
  title: "Vườn Nhãn Việt",
  description: "Câu chuyện vườn nhãn, quy trình chăm sóc, thu hoạch và đóng gói của Nhãn Việt."
};

const features = [
  { title: "Canh tác hữu cơ", description: "Ưu tiên phương pháp chăm sóc tự nhiên, sạch và an toàn.", icon: Leaf },
  { title: "Thu hoạch đúng mùa", description: "Chọn thời điểm quả đạt độ ngọt và độ mọng tốt.", icon: Sprout },
  { title: "Đội ngũ chuyên nghiệp", description: "Đóng gói và xử lý sản phẩm cẩn thận trước khi giao.", icon: UsersRound }
];

const process = [
  { title: "Chuẩn bị đất", description: "Chăm nền đất và giữ vườn thông thoáng.", icon: Sprout },
  { title: "Chăm sóc cây", description: "Theo dõi từng giai đoạn sinh trưởng của chùm nhãn.", icon: Leaf },
  { title: "Thu hoạch", description: "Thu hoạch đúng độ chín, hạn chế dập quả.", icon: PackageCheck },
  { title: "Đóng gói", description: "Phân loại, đóng gói và bảo vệ sản phẩm khi vận chuyển.", icon: PackageCheck }
];

export default function FarmPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-green-light to-brand-cream px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold leading-tight text-brand-green-dark">Vườn Nhãn Việt</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-main">
          Câu chuyện vườn nhãn, sản phẩm chọn lọc và quy trình từ vườn đến tay khách.
        </p>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <ThemedAssetImage
            src="/assets/farm-story.svg"
            alt="Vườn nhãn xanh với cây nhãn và nắng vàng"
            width={1200}
            height={800}
            className="w-full rounded-3xl object-cover shadow-lg"
          />
          <div>
            <div className="mt-5 grid gap-4 text-base leading-relaxed text-text-muted">
              <p>Nhãn Việt tập trung vào nhãn lồng tươi và nhãn sấy tự nhiên, không mở rộng quá nhiều danh mục như một siêu thị nông sản.</p>
              <p>Sản phẩm được chọn lọc từ những vườn nhãn chất lượng, ưu tiên vị ngọt thanh, cùi dày và cách đóng gói sạch.</p>
              <p>Trang vườn nhãn trong thiết kế nhấn mạnh nguồn gốc, quy trình chăm sóc và sự cẩn thận trước khi giao hàng.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-soft py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader title="Điểm nổi bật của vườn" />
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
                  <Icon size={30} className="mb-4 text-brand-green" aria-hidden />
                  <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">{feature.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-surface py-16 scroll-mt-40">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader title="Quy trình sản xuất" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="rounded-2xl border border-border-soft bg-surface p-5">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-sm font-semibold text-on-brand">
                    {index + 1}
                  </span>
                  <Icon size={28} className="mb-4 text-brand-green" aria-hidden />
                  <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-cream to-brand-green-light py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader title="Hình ảnh vườn" />
          <div className="grid gap-6 md:grid-cols-3">
            {["Thu hoạch", "Chọn lọc", "Đóng gói"].map((label) => (
              <figure key={label} className="overflow-hidden rounded-2xl bg-surface shadow-sm">
                <ThemedAssetImage src="/assets/farm-gallery.svg" alt={label} width={900} height={650} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="px-4 py-3 text-sm font-medium text-brand-green-dark">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border-soft bg-surface px-4 py-10 text-center shadow-sm sm:px-8">
          <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">Đặt nhãn tươi và nhãn sấy từ vườn</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-text-muted">Chọn sản phẩm phù hợp cho gia đình hoặc quà biếu.</p>
          <ButtonLink href="/#featured-products" size="lg" className="mt-6">
            Đặt hàng ngay
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
