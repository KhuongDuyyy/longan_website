import type { Metadata } from "next";
import { adminStats } from "@/data/admin";
import { orders } from "@/data/orders";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/orders/StatusBadge";
import { formatCurrency, getOrderTotal } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false }
};

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
            <p className="text-sm text-text-muted">{stat.label}</p>
            <p className="mt-3 text-2xl font-semibold leading-tight text-brand-green-dark">{stat.value}</p>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-brand-green-dark">Bảng đơn hàng mới</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
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
                  <td><button className="text-brand-green hover:underline" type="button">Xem</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}
