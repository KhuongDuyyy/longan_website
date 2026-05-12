"use client";

import Link from "next/link";
import { Menu, ShoppingCart, Truck, UserRound, X, Phone } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartProvider";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Nhãn lồng tươi", href: "/#fresh-longan" },
  { label: "Nhãn sấy", href: "/#dried-longan" },
  { label: "Liên hệ", href: "/lien-he" }
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, openCart, openLogin } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-surface">
      <div className="flex items-center justify-center gap-2 bg-brand-green px-4 py-2 text-center text-xs font-medium uppercase text-on-brand sm:text-sm">
        <Truck size={16} aria-hidden />
        <span>Miễn phí giao hàng cho đơn từ 499.000 VNĐ</span>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-4">
        <Link href="/" className="flex min-w-fit items-center gap-3" aria-label="Nhãn Việt">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-light text-lg font-bold text-brand-green-dark">
            NV
          </span>
          <span>
            <span className="block text-lg font-semibold leading-tight text-brand-green-dark">Nhãn Việt</span>
            <span className="block text-xs text-text-muted">Tinh hoa nông sản Việt</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-medium text-text-main lg:flex" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-brand-green">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:0866918366"
          className="hidden items-center gap-2 rounded-full bg-brand-cream px-4 py-2 text-sm font-medium text-brand-green-dark xl:inline-flex"
        >
          <Phone size={16} aria-hidden />
          Hotline: 0866.918.366
        </a>

        <button
          className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-text-main transition hover:text-brand-green md:flex"
          type="button"
          onClick={openLogin}
        >
          <UserRound size={19} aria-hidden />
          Đăng nhập
        </button>

        <button
          className="relative inline-flex items-center gap-2 rounded-full border border-border-soft px-3 py-2 text-sm font-medium text-text-main transition hover:border-brand-green hover:text-brand-green"
          type="button"
          onClick={openCart}
        >
          <ShoppingCart size={19} aria-hidden />
          <span className="hidden sm:inline">Giỏ hàng</span>
          <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-green px-1 text-xs font-semibold text-on-brand">
            {cartCount}
          </span>
        </button>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-text-main lg:hidden"
          type="button"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-border-soft bg-surface px-4 py-4 lg:hidden" aria-label="Điều hướng mobile">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-text-main hover:bg-neutral-soft hover:text-brand-green"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openLogin();
              }}
              className="rounded-xl px-3 py-2 text-left text-sm font-medium text-text-main hover:bg-neutral-soft hover:text-brand-green"
            >
              Đăng nhập
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
