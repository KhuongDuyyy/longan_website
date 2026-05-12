import { products } from "./products";
import type { Order } from "@/types/order";

export const orders: Order[] = [
  {
    id: "NV-2026-0018",
    date: "2026-05-06",
    status: "pending",
    customerName: "Nguyễn Minh Anh",
    phone: "0866.918.366",
    address: "Quận Cầu Giấy, Hà Nội",
    note: "Giao giờ hành chính",
    paymentMethod: "COD",
    shippingFee: 30000,
    items: [
      { product: products[0], quantity: 2 },
      { product: products[2], quantity: 1 }
    ]
  },
  {
    id: "NV-2026-0012",
    date: "2026-05-02",
    status: "shipping",
    customerName: "Trần Hoàng Nam",
    phone: "0901.222.888",
    address: "TP. Thủ Đức, TP. Hồ Chí Minh",
    paymentMethod: "Bank Transfer",
    shippingFee: 0,
    items: [{ product: products[3], quantity: 1 }]
  },
  {
    id: "NV-2026-0009",
    date: "2026-04-28",
    status: "completed",
    customerName: "Lê Phương Linh",
    phone: "0912.345.678",
    address: "TP. Hưng Yên, Hưng Yên",
    paymentMethod: "COD",
    shippingFee: 0,
    items: [
      { product: products[1], quantity: 1 },
      { product: products[7], quantity: 2 }
    ]
  }
];
