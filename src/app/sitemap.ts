import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const routes = ["", "/vuon-nhan", "/lien-he", "/tai-khoan", "/tai-khoan/don-hang"];
const productRoutes = products.map((product) => `/san-pham/${product.id}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...productRoutes].map((route) => ({
    url: `https://nhanviet.vn${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/san-pham") ? 0.8 : 0.7
  }));
}
