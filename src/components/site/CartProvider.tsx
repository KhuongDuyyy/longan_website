"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product, ProductVariant } from "@/types/product";
import { getProductById } from "@/data/products";

type CartItem = Product & {
  quantity: number;
  baseProductId: string;
  selectedVariant?: ProductVariant;
};

type StoredCartItem = {
  productId: string;
  variantId?: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  cartCount: number;
  isCartOpen: boolean;
  isLoginOpen: boolean;
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openLogin: () => void;
  closeLogin: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_STORAGE_KEY = "nhan-viet-cart";

function createCartItem(product: Product, quantity: number, variant?: ProductVariant): CartItem {
  const selectedVariant = variant ?? product.variants?.[0];

  return {
    ...product,
    id: selectedVariant ? `${product.id}:${selectedVariant.id}` : product.id,
    baseProductId: product.id,
    selectedVariant,
    price: selectedVariant?.price ?? product.price,
    oldPrice: selectedVariant?.oldPrice ?? product.oldPrice,
    unit: selectedVariant?.unit ?? product.unit,
    image: selectedVariant?.image ?? product.image,
    quantity
  };
}

function isStoredCartItem(item: unknown): item is StoredCartItem {
  if (!item || typeof item !== "object") {
    return false;
  }

  const value = item as Partial<StoredCartItem>;

  return typeof value.productId === "string" && typeof value.quantity === "number" && value.quantity > 0;
}

function loadStoredCartItems() {
  try {
    const storedValue = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsed = JSON.parse(storedValue);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .filter(isStoredCartItem)
      .map((storedItem) => {
        const product = getProductById(storedItem.productId);
        const variant = product?.variants?.find((item) => item.id === storedItem.variantId);

        return product ? createCartItem(product, storedItem.quantity, variant) : null;
      })
      .filter((item): item is CartItem => Boolean(item));
  } catch {
    return [];
  }
}

function saveStoredCartItems(items: CartItem[]) {
  try {
    const storedItems: StoredCartItem[] = items.map((item) => ({
      productId: item.baseProductId,
      variantId: item.selectedVariant?.id,
      quantity: item.quantity
    }));

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedItems));
  } catch {
    // Ignore storage failures so cart interactions still work in restricted browsers.
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartLoaded, setCartLoaded] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const cartCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  useEffect(() => {
    queueMicrotask(() => {
      setItems(loadStoredCartItems());
      setCartLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (isCartLoaded) {
      saveStoredCartItems(items);
    }
  }, [isCartLoaded, items]);

  function addItem(product: Product, quantity = 1, variant?: ProductVariant) {
    const cartItem = createCartItem(product, quantity, variant);

    setItems((current) => {
      const existing = current.find((item) => item.id === cartItem.id);
      if (existing) {
        return current.map((item) => (item.id === cartItem.id ? { ...item, quantity: item.quantity + quantity } : item));
      }

      return [...current, cartItem];
    });
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity < 1) {
      removeItem(id);
      return;
    }

    setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)));
  }

  const value: CartContextValue = {
    items,
    subtotal,
    cartCount,
    isCartOpen,
    isLoginOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart: () => setItems([]),
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    openLogin: () => setLoginOpen(true),
    closeLogin: () => setLoginOpen(false)
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
