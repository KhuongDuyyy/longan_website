import Link from "next/link";
import type { ReactNode } from "react";
import { BarChart3, Boxes, ClipboardList, Gift, LayoutDashboard, Settings, Tags, UsersRound } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Đơn hàng", href: "/admin/don-hang", icon: ClipboardList },
  { label: "Sản phẩm", href: "/admin/san-pham", icon: Boxes },
  { label: "Danh mục", href: "/admin/san-pham", icon: Tags },
  { label: "Khách hàng", href: "/admin", icon: UsersRound },
  { label: "Khuyến mãi", href: "/admin", icon: Gift },
  { label: "Cài đặt", href: "/admin", icon: Settings }
];

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-neutral-page">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-2xl border border-border-soft bg-surface p-4 lg:sticky lg:top-40">
          <div className="mb-5 flex items-center gap-3 border-b border-border-soft pb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-light font-semibold text-brand-green-dark">A</span>
            <div>
              <p className="text-sm font-semibold text-brand-green-dark">Admin Nhãn Việt</p>
              <p className="text-xs text-text-muted">Quản trị bán hàng</p>
            </div>
          </div>
          <nav className="grid gap-1" aria-label="Admin">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} href={item.href} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-text-main hover:bg-neutral-soft hover:text-brand-green">
                  <Icon size={17} aria-hidden />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <section>
          <header className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border-soft bg-surface px-5 py-4">
            <div>
              <p className="text-xs uppercase text-text-muted">Admin Dashboard</p>
              <h1 className="text-2xl font-semibold leading-tight text-brand-green-dark">{title}</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <BarChart3 size={18} className="text-brand-green" aria-hidden />
              Mock UI theo tài liệu
            </div>
          </header>
          {children}
        </section>
      </div>
    </main>
  );
}
