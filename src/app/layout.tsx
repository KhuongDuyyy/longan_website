import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://nhanviet.vn"),
  title: {
    default: "Nhãn Việt - Chuyên nhãn lồng tươi & nhãn sấy tự nhiên",
    template: "%s | Nhãn Việt"
  },
  description:
    "Nhãn lồng tươi ngọt thanh, cùi dày, hạt nhỏ. Nhãn sấy dẻo thơm tự nhiên, phù hợp ăn gia đình và làm quà biếu.",
  openGraph: {
    title: "Nhãn Việt",
    description: "Chuyên nhãn lồng tươi và nhãn sấy tự nhiên.",
    locale: "vi_VN",
    siteName: "Nhãn Việt",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
