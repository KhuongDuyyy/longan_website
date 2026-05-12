import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const aboutLinks = [
  { label: "Liên hệ", href: "/lien-he" }
];

const policyLinks = ["Chính sách giao hàng", "Chính sách đổi trả", "Chính sách bảo mật", "Hướng dẫn mua hàng"];

export function Footer() {
  return (
    <footer className="bg-neutral-soft">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-light text-lg font-bold text-brand-green-dark">
              NV
            </span>
            <div>
              <p className="text-lg font-semibold text-brand-green-dark">Nhãn Việt</p>
              <p className="text-xs text-text-muted">Tinh hoa nông sản Việt</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-text-muted">
            Chuyên cung cấp nhãn lồng tươi và nhãn sấy tự nhiên, chọn lọc từ những vườn nhãn chất lượng.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-brand-green-dark">Về chúng tôi</h2>
          <ul className="grid gap-3 text-sm text-text-muted">
            {aboutLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <Link className="hover:text-brand-green" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-brand-green-dark">Chính sách</h2>
          <ul className="grid gap-3 text-sm text-text-muted">
            {policyLinks.map((label) => (
              <li key={label}>
                <Link className="hover:text-brand-green" href="/#promotion">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase text-brand-green-dark">Liên hệ</h2>
          <ul className="grid gap-3 text-sm text-text-muted">
            <li className="flex gap-2">
              <Phone size={17} className="mt-0.5 text-brand-green" aria-hidden />
              Hotline: 0866.918.366
            </li>
            <li className="flex gap-2">
              <Mail size={17} className="mt-0.5 text-brand-green" aria-hidden />
              cskh@nhanviet.vn
            </li>
            <li className="flex gap-2">
              <MapPin size={17} className="mt-0.5 text-brand-green" aria-hidden />
              Hưng Yên / Bắc Giang, Việt Nam
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Link href="https://facebook.com" className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-brand-green" aria-label="Facebook">
              <MessageCircle size={18} />
            </Link>
            <Link href="https://zalo.me" className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-sm font-bold text-brand-green" aria-label="Zalo">
              Z
            </Link>
            <Link href="https://tiktok.com" className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-sm font-bold text-brand-green" aria-label="TikTok">
              T
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border-soft py-4 text-center text-xs text-text-muted">
        © 2026 Nhãn Việt. All rights reserved.
      </div>
    </footer>
  );
}
