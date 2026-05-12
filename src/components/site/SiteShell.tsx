import type { ReactNode } from "react";
import { CartProvider } from "./CartProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingContactButtons } from "./FloatingContactButtons";
import { LoginModal } from "@/components/modals/LoginModal";
import { CartModal } from "@/components/modals/CartModal";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Header />
      {children}
      <Footer />
      <FloatingContactButtons />
      <LoginModal />
      <CartModal />
    </CartProvider>
  );
}
