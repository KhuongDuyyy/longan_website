"use client";

import { useState } from "react";
import { LockKeyhole, Pencil, Save, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const user = {
  name: "Nguyễn Minh Anh",
  email: "minhanh@example.com",
  phone: "0866.918.366",
  address: "Quận Cầu Giấy, Hà Nội"
};

export function AccountContent() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 lg:grid-cols-[1fr_360px]">
      <section className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">Thông tin cá nhân</h2>
          {editing ? (
            <div className="flex gap-2">
              <Button type="button" size="sm">
                <Save size={15} aria-hidden />
                Lưu
              </Button>
              <Button type="button" size="sm" tone="secondary" onClick={() => setEditing(false)}>
                <X size={15} aria-hidden />
                Hủy
              </Button>
            </div>
          ) : (
            <Button type="button" size="sm" tone="secondary" onClick={() => setEditing(true)}>
              <Pencil size={15} aria-hidden />
              Chỉnh sửa
            </Button>
          )}
        </div>

        {editing ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Họ tên" defaultValue={user.name} />
            <Field label="Email" defaultValue={user.email} />
            <Field label="Số điện thoại" defaultValue={user.phone} />
            <Field label="Địa chỉ" defaultValue={user.address} />
          </div>
        ) : (
          <dl className="grid gap-4 sm:grid-cols-2">
            {Object.entries({
              "Họ tên": user.name,
              Email: user.email,
              "Số điện thoại": user.phone,
              "Địa chỉ": user.address
            }).map(([label, value]) => (
              <div key={label} className="rounded-xl bg-neutral-soft p-4">
                <dt className="text-xs uppercase text-text-muted">{label}</dt>
                <dd className="mt-2 text-sm font-medium text-text-main">{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </section>

      <aside className="grid gap-6">
        <section className="rounded-2xl border border-border-soft bg-surface p-5 text-center shadow-sm">
          <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">Ảnh đại diện</h2>
          <div className="mx-auto my-6 flex h-28 w-28 items-center justify-center rounded-full bg-brand-green-light text-3xl font-semibold text-brand-green-dark">
            A
          </div>
          <Button type="button" tone="secondary">
            <Upload size={16} aria-hidden />
            Tải ảnh lên
          </Button>
        </section>

        <section className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
          <LockKeyhole size={30} className="mb-4 text-brand-green" aria-hidden />
          <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">Bảo mật</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">Đổi mật khẩu tài khoản của bạn.</p>
          <Button type="button" className="mt-5" tone="secondary">
            Đổi mật khẩu
          </Button>
        </section>
      </aside>
    </div>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-text-main">
      {label}
      <input
        defaultValue={defaultValue}
        className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none focus:border-brand-green"
      />
    </label>
  );
}
