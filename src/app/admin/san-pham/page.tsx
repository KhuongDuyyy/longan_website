import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/AdminShell";
import { Button } from "@/components/ui/Button";
import { ThemedAssetImage } from "@/components/ui/ThemedAssetImage";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin Sản phẩm",
  robots: { index: false, follow: false }
};

export default function AdminProductsPage() {
  return (
    <AdminShell title="Sản phẩm">
      <section className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">Danh sách sản phẩm</h2>
          <Button type="button">
            <Plus size={16} aria-hidden />
            Thêm sản phẩm
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-border-soft text-xs uppercase text-text-muted">
              <tr>
                <th className="py-3">Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Biến thể</th>
                <th>Giá</th>
                <th>Tồn kho</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft text-text-main">
              {products.slice(0, 8).map((product, index) => (
                <tr key={product.id}>
                  <td className="py-4">
                    <ThemedAssetImage src={product.image} alt={product.name} width={48} height={48} className="h-12 w-12 rounded-xl bg-neutral-soft object-cover" />
                  </td>
                  <td className="font-medium text-brand-green-dark">{product.name}</td>
                  <td>{product.category === "fresh" ? "Nhãn lồng tươi" : product.category === "dried" ? "Nhãn sấy" : "Combo"}</td>
                  <td>{product.unit}</td>
                  <td>{formatCurrency(product.price)}</td>
                  <td>{24 - index * 2}</td>
                  <td><span className="rounded-full bg-brand-green-light px-3 py-1 text-xs font-medium text-brand-green-dark">Hiển thị</span></td>
                  <td><button className="text-brand-green hover:underline" type="button">Sửa</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-brand-green-dark">Form thêm sản phẩm</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {["Tên sản phẩm", "Slug", "Mô tả ngắn", "Giá", "Giá khuyến mãi", "Đơn vị", "Tồn kho", "Biến thể"].map((label) => (
            <label key={label} className="grid gap-2 text-sm font-medium text-text-main">
              {label}
              <input className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none focus:border-brand-green" />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-medium text-text-main">
            Danh mục
            <select className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none focus:border-brand-green">
              <option>Nhãn lồng tươi</option>
              <option>Nhãn sấy</option>
              <option>Combo</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-text-main md:col-span-2">
            Mô tả chi tiết
            <textarea rows={5} className="rounded-xl border border-border-soft px-4 py-3 text-sm font-normal outline-none focus:border-brand-green" />
          </label>
        </div>
      </section>
    </AdminShell>
  );
}
