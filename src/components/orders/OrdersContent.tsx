"use client";

import { useMemo, useState } from "react";
import { Package } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { orders } from "@/data/orders";
import { cn, formatCurrency, getOrderTotal } from "@/lib/utils";
import type { Order, OrderStatus } from "@/types/order";
import { OrderDetailModal } from "./OrderDetailModal";
import { StatusBadge } from "./StatusBadge";

const tabs: Array<{ label: string; status?: OrderStatus }> = [
  { label: "Tất cả" },
  { label: "Chờ xác nhận", status: "pending" },
  { label: "Đã xác nhận", status: "confirmed" },
  { label: "Đang giao", status: "shipping" },
  { label: "Hoàn thành", status: "completed" },
  { label: "Đã hủy", status: "cancelled" }
];

export function OrdersContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = useMemo(() => {
    const status = tabs[activeIndex].status;
    return status ? orders.filter((order) => order.status === status) : orders;
  }, [activeIndex]);

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 flex gap-3 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Lọc đơn hàng">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={cn(
                "min-w-fit rounded-full px-5 py-2 text-sm font-medium transition",
                activeIndex === index ? "bg-brand-green text-on-brand" : "bg-neutral-soft text-text-main hover:text-brand-green"
              )}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filteredOrders.length > 0 ? (
          <div className="grid gap-5">
            {filteredOrders.map((order) => (
              <article key={order.id} className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border-soft pb-4">
                  <div>
                    <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">{order.id}</h2>
                    <p className="mt-1 text-sm text-text-muted">Ngày đặt: {order.date}</p>
                  </div>
                  <StatusBadge status={order.status} />
                </div>
                <div className="grid gap-3 py-4">
                  {order.items.map((item) => (
                    <div key={item.product.id} className="flex justify-between gap-4 text-sm">
                      <span className="text-text-main">{item.product.name} x {item.quantity}</span>
                      <span className="font-medium text-brand-green-dark">{formatCurrency(item.product.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-soft pt-4">
                  <p className="text-lg font-semibold text-price-accent">Tổng: {formatCurrency(getOrderTotal(order.items, order.shippingFee))}</p>
                  <div className="flex flex-wrap gap-2">
                    <Button type="button" tone="secondary" onClick={() => setSelectedOrder(order)}>
                      Xem chi tiết
                    </Button>
                    {order.status === "completed" ? <Button type="button">Mua lại</Button> : null}
                    {order.status === "pending" ? <Button type="button" tone="danger">Hủy đơn</Button> : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl bg-neutral-soft text-center">
            <Package size={44} className="mb-4 text-brand-green" aria-hidden />
            <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">Chưa có đơn hàng nào</h2>
            <p className="mt-2 text-sm text-text-muted">Bạn chưa có đơn hàng ở trạng thái này.</p>
            <ButtonLink href="/#featured-products" className="mt-5">
              Mua sắm ngay
            </ButtonLink>
          </div>
        )}
      </div>
      <OrderDetailModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
    </section>
  );
}
