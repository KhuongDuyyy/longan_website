"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getOrderTotal, formatCurrency } from "@/lib/utils";
import type { Order } from "@/types/order";
import { StatusBadge } from "./StatusBadge";

const timeline = ["Đã đặt hàng", "Đã xác nhận", "Đang giao", "Hoàn thành"];

export function OrderDetailModal({ order, onClose }: { order: Order | null; onClose: () => void }) {
  if (!order) {
    return null;
  }

  const total = getOrderTotal(order.items, order.shippingFee);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/45 px-4 py-8" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-surface shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-border-soft px-5 py-4">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">{order.id}</h2>
              <StatusBadge status={order.status} />
            </div>
            <p className="mt-1 text-sm text-text-muted">Ngày đặt: {order.date}</p>
          </div>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-text-main hover:text-brand-green"
            onClick={onClose}
            aria-label="Đóng chi tiết đơn hàng"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-6 p-5">
          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase text-brand-green-dark">Timeline</h3>
            <div className="grid gap-3 sm:grid-cols-4">
              {timeline.map((step, index) => (
                <div key={step} className="rounded-xl bg-neutral-soft p-4 text-center">
                  <span className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-xs font-semibold text-on-brand">
                    {index + 1}
                  </span>
                  <p className="text-xs font-medium text-text-main">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border-soft p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase text-brand-green-dark">Thông tin khách hàng</h3>
            <dl className="grid gap-3 text-sm text-text-muted sm:grid-cols-2">
              <div>
                <dt className="font-medium text-text-main">Họ tên</dt>
                <dd>{order.customerName}</dd>
              </div>
              <div>
                <dt className="font-medium text-text-main">Số điện thoại</dt>
                <dd>{order.phone}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-medium text-text-main">Địa chỉ</dt>
                <dd>{order.address}</dd>
              </div>
              {order.note ? (
                <div className="sm:col-span-2">
                  <dt className="font-medium text-text-main">Ghi chú</dt>
                  <dd>{order.note}</dd>
                </div>
              ) : null}
            </dl>
          </section>

          <section className="rounded-2xl border border-border-soft p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase text-brand-green-dark">Sản phẩm</h3>
            <div className="grid gap-3">
              {order.items.map((item) => (
                <div key={item.product.id} className="flex justify-between gap-4 text-sm">
                  <span className="text-text-main">{item.product.name} x {item.quantity}</span>
                  <span className="font-medium text-brand-green-dark">{formatCurrency(item.product.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-neutral-soft p-4">
            <dl className="grid gap-2 text-sm">
              <div className="flex justify-between text-text-muted">
                <dt>Phí giao hàng</dt>
                <dd>{order.shippingFee === 0 ? "Miễn phí" : formatCurrency(order.shippingFee)}</dd>
              </div>
              <div className="flex justify-between text-lg font-semibold text-brand-green-dark">
                <dt>Tổng cộng</dt>
                <dd>{formatCurrency(total)}</dd>
              </div>
              <div className="flex justify-between text-text-muted">
                <dt>Thanh toán</dt>
                <dd>{order.paymentMethod}</dd>
              </div>
            </dl>
          </section>

          <Button type="button" className="w-full sm:w-fit" onClick={onClose}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
}
