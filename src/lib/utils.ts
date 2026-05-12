export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

export function getOrderTotal(items: Array<{ product: { price: number }; quantity: number }>, shippingFee = 0) {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0) + shippingFee;
}
