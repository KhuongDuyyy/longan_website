import type { Metadata } from "next";
import { AccountContent } from "@/components/account/AccountContent";

export const metadata: Metadata = {
  title: "Tài khoản của tôi",
  description: "Quản lý thông tin cá nhân và bảo mật tài khoản tại Nhãn Việt."
};

export default function AccountPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-green-light to-brand-cream px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold leading-tight text-brand-green-dark">Tài khoản của tôi</h1>
        <p className="mt-4 text-lg leading-relaxed text-text-main">Xin chào, Nguyễn Minh Anh</p>
      </section>
      <AccountContent />
    </main>
  );
}
