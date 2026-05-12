"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { ProductGrid } from "./ProductGrid";

export function ProductTabs({ tabs, products }: { tabs: string[]; products: Product[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0] ?? "Tất cả");

  const filtered = useMemo(() => {
    if (activeTab === "Tất cả") {
      return products;
    }

    return products.filter((product) => product.tags.includes(activeTab));
  }, [activeTab, products]);

  return (
    <div>
      <div className="mb-8 flex gap-3 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Lọc sản phẩm">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={activeTab === tab}
            className={cn(
              "min-w-fit rounded-full px-5 py-2 text-sm font-medium transition",
              activeTab === tab ? "bg-brand-green text-on-brand" : "bg-surface text-text-main ring-1 ring-border-soft hover:text-brand-green"
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <ProductGrid products={filtered.slice(0, 4)} />
    </div>
  );
}
