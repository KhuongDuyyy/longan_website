import type { Product } from "./product";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipping"
  | "completed"
  | "cancelled";

export type OrderItem = {
  product: Pick<Product, "id" | "name" | "price" | "unit" | "image">;
  quantity: number;
};

export type Order = {
  id: string;
  date: string;
  status: OrderStatus;
  customerName: string;
  phone: string;
  address: string;
  note?: string;
  paymentMethod: "COD" | "Bank Transfer";
  items: OrderItem[];
  shippingFee: number;
};
