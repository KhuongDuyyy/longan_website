"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <h2 className="mb-5 text-2xl font-semibold leading-tight text-brand-green-dark">Gửi tin nhắn</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ tên" placeholder="Nguyễn Văn A" />
        <Field label="Số điện thoại" placeholder="0866.918.366" />
        <Field label="Email" placeholder="email@example.com" type="email" />
        <label className="grid gap-2 text-sm font-medium text-text-main">
          Chủ đề
          <select className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none focus:border-brand-green">
            <option>Tư vấn sản phẩm</option>
            <option>Hỗ trợ đơn hàng</option>
            <option>Hợp tác đại lý</option>
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-text-main">
        Nội dung
        <textarea
          rows={6}
          placeholder="Bạn cần tư vấn sản phẩm nào?"
          className="rounded-xl border border-border-soft px-4 py-3 text-sm font-normal outline-none focus:border-brand-green"
        />
      </label>
      {sent ? (
        <p className="mt-4 rounded-xl bg-brand-green-light px-4 py-3 text-sm font-medium text-brand-green-dark">
          Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm.
        </p>
      ) : null}
      <Button className="mt-5" type="submit">
        <Send size={16} aria-hidden />
        Gửi liên hệ
      </Button>
    </form>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-text-main">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none focus:border-brand-green"
      />
    </label>
  );
}
