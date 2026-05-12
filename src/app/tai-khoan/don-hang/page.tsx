import type { Metadata } from "next";
import { OrdersContent } from "@/components/orders/OrdersContent";

export const metadata: Metadata = {
  title: "Đơn hàng của tôi",
  description: "Theo dõi danh sách đơn hàng, trạng thái và chi tiết đơn hàng tại Nhãn Việt."
};

export default function OrdersPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-green-light to-brand-cream px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold leading-tight text-brand-green-dark">Đơn hàng của tôi</h1>
      </section>
      <OrdersContent />
    </main>
  );
}
