import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/orders/StatusBadge";
import { orders } from "@/data/orders";
import { formatCurrency, getOrderTotal } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin Đơn hàng",
  robots: { index: false, follow: false }
};

export default function AdminOrdersPage() {
  return (
    <AdminShell title="Đơn hàng">
      <section className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-brand-green-dark">Quản lý đơn hàng</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="border-b border-border-soft text-xs uppercase text-text-muted">
              <tr>
                <th className="py-3">Mã đơn</th>
                <th>Khách hàng</th>
                <th>Số điện thoại</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th>Thời gian</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft text-text-main">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-4 font-medium text-brand-green-dark">{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.phone}</td>
                  <td>{formatCurrency(getOrderTotal(order.items, order.shippingFee))}</td>
                  <td><StatusBadge status={order.status} /></td>
                  <td>{order.date}</td>
                  <td className="space-x-3">
                    <button className="text-brand-green hover:underline" type="button">Xem</button>
                    <button className="text-danger-red hover:underline" type="button">Hủy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}
