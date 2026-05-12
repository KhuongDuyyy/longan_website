"use client";

import { useState } from "react";
import { CheckCircle2, Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/components/site/CartProvider";
import { Button } from "@/components/ui/Button";
import { ThemedAssetImage } from "@/components/ui/ThemedAssetImage";
import { formatCurrency } from "@/lib/utils";

type Step = "cart" | "checkout" | "success";

export function CartModal() {
  const { isCartOpen, closeCart, items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const shippingFee = subtotal === 0 || subtotal >= 499000 ? 0 : 30000;
  const total = subtotal + shippingFee;

  if (!isCartOpen) {
    return null;
  }

  function finishOrder() {
    setStep("success");
    clearCart();
  }

  function closeAndReset() {
    closeCart();
    setStep("cart");
  }

  return (
    <div className="fixed inset-0 z-50 bg-overlay/45" role="dialog" aria-modal="true">
      <aside className="ml-auto flex h-full w-full max-w-2xl flex-col bg-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-brand-green-dark">
              {step === "cart" ? "Giỏ hàng" : step === "checkout" ? "Thanh toán" : "Đặt hàng thành công"}
            </h2>
            {step === "cart" ? <p className="text-sm text-text-muted">{items.length} sản phẩm trong giỏ</p> : null}
          </div>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft text-text-main hover:text-brand-green"
            onClick={closeAndReset}
            aria-label="Đóng giỏ hàng"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {step === "cart" ? (
            items.length > 0 ? (
              <div className="grid gap-4">
                {items.map((item) => (
                  <article key={item.id} className="grid grid-cols-[80px_1fr] gap-4 rounded-2xl border border-border-soft p-3">
                    <ThemedAssetImage src={item.image} alt={item.name} width={80} height={80} className="h-20 w-20 rounded-xl bg-neutral-soft object-cover" />
                    <div className="min-w-0">
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <h3 className="line-clamp-2 text-sm font-semibold text-brand-green-dark">{item.name}</h3>
                          {item.selectedVariant ? (
                            <p className="mt-1 text-xs text-text-muted">Phân loại: {item.selectedVariant.name}</p>
                          ) : null}
                          <p className="mt-1 text-xs text-text-muted">Đơn vị: {item.unit}</p>
                          <p className="mt-2 text-base font-semibold text-price-accent">{formatCurrency(item.price)}</p>
                        </div>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center rounded-full text-danger-red hover:bg-brand-cream"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Xóa ${item.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="mt-3 inline-flex items-center rounded-full border border-border-soft">
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center text-text-main"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Giảm số lượng"
                        >
                          <Minus size={15} />
                        </button>
                        <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center text-text-main"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Tăng số lượng"
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl bg-neutral-soft text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface text-brand-green">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="text-2xl font-semibold text-brand-green-dark">Giỏ hàng đang trống</h3>
                <p className="mt-2 max-w-sm text-sm text-text-muted">Chọn nhãn tươi, nhãn sấy hoặc combo quà biếu để bắt đầu đặt hàng.</p>
              </div>
            )
          ) : null}

          {step === "checkout" ? (
            <CheckoutForm onBack={() => setStep("cart")} onSubmit={finishOrder} total={total} shippingFee={shippingFee} subtotal={subtotal} />
          ) : null}

          {step === "success" ? <SuccessState onClose={closeAndReset} /> : null}
        </div>

        {step === "cart" ? (
          <div className="border-t border-border-soft bg-surface px-5 py-4">
            <Summary subtotal={subtotal} shippingFee={shippingFee} total={total} />
            <Button type="button" size="lg" className="mt-4 w-full" disabled={items.length === 0} onClick={() => setStep("checkout")}>
              Tiến hành đặt hàng
            </Button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

function Summary({ subtotal, shippingFee, total }: { subtotal: number; shippingFee: number; total: number }) {
  return (
    <dl className="grid gap-2 text-sm">
      <div className="flex justify-between text-text-muted">
        <dt>Tạm tính</dt>
        <dd>{formatCurrency(subtotal)}</dd>
      </div>
      <div className="flex justify-between text-text-muted">
        <dt>Phí giao hàng</dt>
        <dd>{shippingFee === 0 ? "Miễn phí" : formatCurrency(shippingFee)}</dd>
      </div>
      <p className="text-xs text-text-muted">Miễn phí giao hàng cho đơn từ 499.000đ.</p>
      <div className="flex justify-between border-t border-border-soft pt-3 text-lg font-semibold text-brand-green-dark">
        <dt>Tổng cộng</dt>
        <dd>{formatCurrency(total)}</dd>
      </div>
    </dl>
  );
}

function CheckoutForm({
  subtotal,
  shippingFee,
  total,
  onBack,
  onSubmit
}: {
  subtotal: number;
  shippingFee: number;
  total: number;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <form className="grid gap-4">
      <button type="button" className="w-fit text-sm font-medium text-brand-green hover:underline" onClick={onBack}>
        Quay lại giỏ hàng
      </button>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ tên" placeholder="Nguyễn Văn A" />
        <Field label="Số điện thoại" placeholder="0866.918.366" />
      </div>
      <Field label="Địa chỉ giao hàng" placeholder="Số nhà, phường/xã, quận/huyện, tỉnh/thành" />
      <label className="grid gap-2 text-sm font-medium text-text-main">
        Ghi chú
        <textarea
          rows={4}
          className="rounded-xl border border-border-soft px-4 py-3 text-sm font-normal outline-none focus:border-brand-green"
          placeholder="Thời gian giao, lưu ý đóng gói..."
        />
      </label>
      <fieldset className="grid gap-3 rounded-2xl border border-border-soft p-4">
        <legend className="px-1 text-sm font-semibold text-brand-green-dark">Phương thức thanh toán</legend>
        <label className="flex items-center gap-3 text-sm text-text-main">
          <input type="radio" name="payment" defaultChecked />
          Thanh toán khi nhận hàng
        </label>
        <label className="flex items-center gap-3 text-sm text-text-main">
          <input type="radio" name="payment" />
          Chuyển khoản ngân hàng
        </label>
      </fieldset>
      <div className="rounded-2xl bg-neutral-soft p-4">
        <Summary subtotal={subtotal} shippingFee={shippingFee} total={total} />
      </div>
      <Button type="button" size="lg" className="w-full" onClick={onSubmit}>
        Gửi đơn hàng
      </Button>
    </form>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-text-main">
      {label}
      <input className="h-11 rounded-xl border border-border-soft px-4 text-sm font-normal outline-none focus:border-brand-green" placeholder={placeholder} />
    </label>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
        <CheckCircle2 size={42} />
      </div>
      <h3 className="text-2xl font-semibold text-brand-green-dark">Đặt hàng thành công!</h3>
      <p className="mt-3 max-w-md text-base text-text-muted">
        Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất. Mã đơn dự kiến: NV-2026-MOCK.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button type="button" onClick={onClose}>
          Tiếp tục mua sắm
        </Button>
        <Button type="button" tone="secondary" onClick={onClose}>
          Xem đơn hàng
        </Button>
      </div>
    </div>
  );
}
