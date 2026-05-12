import type { OrderStatus } from "@/types/order";
import { cn } from "@/lib/utils";

const labels: Record<OrderStatus, string> = {
  pending: "Chờ xác nhận",
  confirmed: "Đã xác nhận",
  shipping: "Đang giao",
  completed: "Hoàn thành",
  cancelled: "Đã hủy"
};

const tones: Record<OrderStatus, string> = {
  pending: "bg-brand-yellow-soft text-price-accent",
  confirmed: "bg-brand-green-light text-brand-green-dark",
  shipping: "bg-brand-green-light text-brand-green",
  completed: "bg-brand-green-light text-brand-green-dark",
  cancelled: "bg-brand-cream text-danger-red"
};

export function StatusBadge({ status, className }: { status: OrderStatus; className?: string }) {
  return <span className={cn("rounded-full px-3 py-1 text-xs font-medium", tones[status], className)}>{labels[status]}</span>;
}

export const statusLabels = labels;
