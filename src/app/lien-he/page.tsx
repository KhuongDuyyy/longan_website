import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Nhãn Việt qua hotline, email hoặc form tư vấn sản phẩm nhãn lồng tươi và nhãn sấy."
};

const contactCards = [
  { title: "Điện thoại", text: "0866.918.366", href: "tel:0866918366", icon: Phone },
  { title: "Email", text: "cskh@nhanviet.vn", href: "mailto:cskh@nhanviet.vn", icon: Mail },
  { title: "Địa chỉ", text: "Hưng Yên / Bắc Giang, Việt Nam", href: "#map", icon: MapPin }
];

const faqs = [
  {
    question: "Nhãn tươi bảo quản được bao lâu?",
    answer: "Tài liệu mô tả nhãn tươi thu hoạch trong ngày; bảo quản mát để giữ độ giòn và vị ngọt."
  },
  {
    question: "Có giao hàng toàn quốc không?",
    answer: "Có. Header và hero đều thể hiện cam kết giao hàng toàn quốc."
  },
  {
    question: "Nhãn sấy có chất bảo quản không?",
    answer: "Theo nội dung thiết kế, nhãn sấy giữ vị ngọt tự nhiên và không chất bảo quản."
  },
  {
    question: "Có hộp quà biếu không?",
    answer: "Có nhóm combo/quà biếu dành cho gia đình, người thân và đối tác."
  }
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-green-light to-brand-cream px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold leading-tight text-brand-green-dark">Liên hệ với chúng tôi</h1>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[360px_1fr]">
          <aside className="h-fit lg:sticky lg:top-40">
            <div className="grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a key={card.title} href={card.href} className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm transition hover:border-brand-green">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                      <Icon size={22} aria-hidden />
                    </div>
                    <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">{card.title}</h2>
                    <p className="mt-2 text-sm text-text-muted">{card.text}</p>
                  </a>
                );
              })}
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>

      <section id="map" className="bg-neutral-soft py-16 scroll-mt-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-80 items-center justify-center rounded-2xl border border-border-soft bg-surface text-center text-sm text-text-muted">
            Google Maps sẽ được nhúng tại đây
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader title="Câu hỏi thường gặp" />
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
                <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">{faq.question}</h2>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
