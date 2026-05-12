"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "@/components/site/CartProvider";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "login", label: "Đăng nhập" },
  { id: "register", label: "Tạo tài khoản" },
  { id: "guest", label: "Mua với tư cách khách" }
] as const;

type LoginTab = (typeof tabs)[number]["id"];

export function LoginModal() {
  const { isLoginOpen, closeLogin } = useCart();
  const [activeTab, setActiveTab] = useState<LoginTab>("login");

  if (!isLoginOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/45 px-4 py-8" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
          <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">Tài khoản</h2>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-text-main hover:text-brand-green"
            onClick={closeLogin}
            aria-label="Đóng modal đăng nhập"
          >
            <X size={18} />
          </button>
        </div>

        <div className="border-b border-border-soft px-5 pt-4">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={cn(
                  "min-w-fit rounded-full px-4 py-2 text-sm font-medium transition",
                  activeTab === tab.id ? "bg-brand-green text-on-brand" : "bg-neutral-soft text-text-main hover:text-brand-green"
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-5">
          {activeTab === "login" ? <LoginForm /> : null}
          {activeTab === "register" ? <RegisterForm /> : null}
          {activeTab === "guest" ? <GuestForm /> : null}
        </div>
      </div>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-text-main">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none transition focus:border-brand-green"
      />
    </label>
  );
}

function LoginForm() {
  return (
    <form className="grid gap-4">
      <Field label="Email / số điện thoại" placeholder="Nhập email hoặc số điện thoại" />
      <Field label="Mật khẩu" type="password" placeholder="Nhập mật khẩu" />
      <div className="flex justify-end">
        <a href="#" className="text-sm text-brand-green hover:underline">
          Quên mật khẩu?
        </a>
      </div>
      <Button type="button" size="lg" className="w-full">
        Đăng nhập
      </Button>
      <p className="text-center text-sm text-text-muted">Chưa có tài khoản? Chọn tab Tạo tài khoản.</p>
    </form>
  );
}

function RegisterForm() {
  return (
    <form className="grid gap-4">
      <Field label="Họ tên" placeholder="Nguyễn Văn A" />
      <Field label="Số điện thoại" type="tel" placeholder="0866.918.366" />
      <Field label="Email" type="email" placeholder="email@example.com" />
      <Field label="Mật khẩu" type="password" placeholder="Tạo mật khẩu" />
      <Button type="button" size="lg" className="w-full">
        Tạo tài khoản
      </Button>
    </form>
  );
}

function GuestForm() {
  return (
    <form className="grid gap-4">
      <Field label="Họ tên" placeholder="Nguyễn Văn A" />
      <Field label="Số điện thoại" type="tel" placeholder="0866.918.366" />
      <label className="grid gap-2 text-sm font-medium text-text-main">
        Địa chỉ giao hàng
        <input
          placeholder="Số nhà, phường/xã, quận/huyện, tỉnh/thành"
          className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none transition focus:border-brand-green"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-text-main">
        Ghi chú
        <textarea
          rows={4}
          placeholder="Thời gian giao, lưu ý đóng gói..."
          className="rounded-xl border border-border-soft px-4 py-3 text-sm font-normal outline-none transition focus:border-brand-green"
        />
      </label>
      <Button type="button" size="lg" className="w-full">
        Tiếp tục thanh toán
      </Button>
    </form>
  );
}
