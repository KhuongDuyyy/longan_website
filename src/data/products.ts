import type { Product, ProductCategory, ProductSpecification, ProductVariant } from "@/types/product";

const categoryDetails: Record<
  ProductCategory,
  {
    longDescription: string;
    detailImages: string[];
    highlights: string[];
    specifications: ProductSpecification[];
    storageTips: string[];
    origin: string;
  }
> = {
  fresh: {
    longDescription:
      "Nhãn lồng tươi được tuyển chọn theo độ chín, độ mọng và độ ngọt trước khi đóng gói. Sản phẩm phù hợp dùng hằng ngày, làm quà biếu hoặc chuẩn bị mâm trái cây gia đình.",
    detailImages: ["/assets/fresh-longan.svg", "/assets/longan-bunch.svg", "/assets/farm-gallery.svg"],
    highlights: ["Cùi dày, hạt nhỏ, vị ngọt thanh", "Thu hoạch và phân loại trong ngày", "Đóng gói chống dập, giữ chùm thoáng khí"],
    specifications: [
      { label: "Nguồn gốc", value: "Vườn nhãn tuyển chọn tại Hưng Yên" },
      { label: "Quy cách", value: "Đóng túi, giỏ hoặc hộp tùy sản phẩm" },
      { label: "Độ chín", value: "Quả già vừa, thơm nhẹ, ăn ngọt thanh" },
      { label: "Giao hàng", value: "Nội thành trong ngày, toàn quốc theo lịch vận chuyển" }
    ],
    storageTips: ["Bảo quản ngăn mát 3-5 ngày.", "Không rửa trước khi cất tủ lạnh.", "Mở thoáng túi nếu chưa dùng ngay để hạn chế hấp hơi."],
    origin: "Hưng Yên"
  },
  dried: {
    longDescription:
      "Nhãn sấy được làm từ nhãn chọn lọc, giữ vị ngọt tự nhiên và hương thơm đặc trưng. Sản phẩm tiện dùng trực tiếp, pha trà, nấu chè hoặc chuẩn bị hộp quà.",
    detailImages: ["/assets/dried-longan.svg", "/assets/dried-bowl.svg", "/assets/gift-combo.svg"],
    highlights: ["Dẻo thơm, ngọt tự nhiên", "Đóng gói sạch, dễ bảo quản", "Dùng ăn trực tiếp, pha trà hoặc nấu chè"],
    specifications: [
      { label: "Thành phần", value: "100% nhãn chọn lọc" },
      { label: "Quy cách", value: "Túi/hộp kín, có hướng dẫn bảo quản" },
      { label: "Hương vị", value: "Thơm đậm, ngọt dịu, hậu vị sạch" },
      { label: "Hạn dùng khuyến nghị", value: "Dùng ngon nhất trong 2-3 tháng sau khi mở" }
    ],
    storageTips: ["Đóng kín miệng túi sau khi dùng.", "Để nơi khô ráo, tránh ánh nắng trực tiếp.", "Có thể bảo quản ngăn mát để giữ độ dẻo lâu hơn."],
    origin: "Nhãn Việt"
  },
  combo: {
    longDescription:
      "Combo được phối từ nhãn tươi, nhãn sấy hoặc hộp quà theo nhu cầu dùng thử và biếu tặng. Mỗi set được đóng gói gọn gàng, dễ vận chuyển và phù hợp nhiều dịp.",
    detailImages: ["/assets/gift-combo.svg", "/assets/fresh-longan.svg", "/assets/dried-longan.svg"],
    highlights: ["Phối nhiều vị trong cùng một set", "Đóng gói lịch sự, phù hợp biếu tặng", "Tối ưu chi phí khi mua nhiều sản phẩm"],
    specifications: [
      { label: "Thành phần", value: "Tùy combo, gồm nhãn tươi và/hoặc nhãn sấy" },
      { label: "Đóng gói", value: "Hộp quà, túi quà hoặc combo tiêu chuẩn" },
      { label: "Phù hợp", value: "Dùng thử, biếu gia đình, đối tác" },
      { label: "Tư vấn", value: "Có thể liên hệ để chọn combo theo ngân sách" }
    ],
    storageTips: ["Tách riêng nhãn tươi và nhãn sấy khi bảo quản.", "Nhãn tươi nên dùng trong 3-5 ngày.", "Nhãn sấy đóng kín sau khi mở hộp/túi."],
    origin: "Nhãn Việt"
  }
};

const freshStandardVariants: ProductVariant[] = [
  {
    id: "fresh-1kg",
    name: "1kg tiêu chuẩn",
    description: "Phù hợp dùng thử hoặc ăn trong ngày",
    price: 69000,
    oldPrice: 79000,
    unit: "kg",
    image: "/assets/fresh-longan.svg",
    badge: "Phổ biến",
    stockLabel: "Còn hàng"
  },
  {
    id: "fresh-2kg",
    name: "2kg gia đình",
    description: "Túi nhãn tươi cho 3-4 người",
    price: 135000,
    unit: "túi",
    image: "/assets/longan-bunch.svg",
    badge: "Tiết kiệm",
    stockLabel: "Còn hàng"
  },
  {
    id: "fresh-5kg",
    name: "5kg tiết kiệm",
    description: "Phù hợp đặt dùng cả tuần hoặc chia quà",
    price: 325000,
    unit: "túi",
    image: "/assets/fresh-longan.svg",
    badge: "Giá tốt",
    stockLabel: "Đặt trước"
  }
];

const freshBunchVariants: ProductVariant[] = [
  {
    id: "bunch-2kg",
    name: "Nguyên chùm 2kg",
    description: "Chùm đẹp, quả đều",
    price: 135000,
    unit: "túi",
    image: "/assets/longan-bunch.svg",
    badge: "Mới",
    stockLabel: "Còn hàng"
  },
  {
    id: "bunch-3kg",
    name: "Nguyên chùm 3kg",
    description: "Đóng giỏ chống dập",
    price: 198000,
    unit: "giỏ",
    image: "/assets/longan-bunch.svg",
    badge: "Bán chạy",
    stockLabel: "Còn hàng"
  },
  {
    id: "bunch-5kg",
    name: "Nguyên chùm 5kg",
    description: "Phù hợp đặt gia đình đông người",
    price: 325000,
    unit: "túi",
    image: "/assets/fresh-longan.svg",
    stockLabel: "Đặt trước"
  }
];

const freshGiftVariants: ProductVariant[] = [
  {
    id: "gift-2kg",
    name: "Hộp quà 2kg",
    description: "Hộp lịch sự, dễ biếu tặng",
    price: 245000,
    unit: "hộp",
    image: "/assets/gift-combo.svg",
    badge: "Quà biếu",
    stockLabel: "Còn hàng"
  },
  {
    id: "gift-3kg",
    name: "Hộp quà 3kg",
    description: "Nhiều hơn cho gia đình, đối tác",
    price: 349000,
    unit: "hộp",
    image: "/assets/gift-combo.svg",
    stockLabel: "Đặt trước"
  }
];

const driedVariants: ProductVariant[] = [
  {
    id: "dried-250g",
    name: "Túi 250g",
    description: "Túi nhỏ tiện dùng thử",
    price: 69000,
    unit: "túi",
    image: "/assets/dried-longan.svg",
    stockLabel: "Còn hàng"
  },
  {
    id: "dried-500g",
    name: "Túi 500g",
    description: "Lựa chọn phổ biến cho gia đình",
    price: 125000,
    unit: "túi",
    image: "/assets/dried-longan.svg",
    badge: "Bán chạy",
    stockLabel: "Còn hàng"
  },
  {
    id: "dried-1kg",
    name: "Túi 1kg",
    description: "Tiết kiệm hơn khi dùng thường xuyên",
    price: 239000,
    unit: "túi",
    image: "/assets/dried-bowl.svg",
    badge: "Giá tốt",
    stockLabel: "Còn hàng"
  }
];

const driedGiftVariants: ProductVariant[] = [
  {
    id: "dried-gift-small",
    name: "Hộp quà nhỏ",
    description: "Hộp nhãn sấy 500g",
    price: 289000,
    unit: "hộp",
    image: "/assets/gift-combo.svg",
    badge: "Quà biếu",
    stockLabel: "Còn hàng"
  },
  {
    id: "dried-gift-large",
    name: "Hộp quà lớn",
    description: "Hộp phối túi 500g và 1kg",
    price: 399000,
    unit: "hộp",
    image: "/assets/gift-combo.svg",
    stockLabel: "Đặt trước"
  }
];

const comboVariants: ProductVariant[] = [
  {
    id: "combo-trial",
    name: "Combo dùng thử",
    description: "Nhãn tươi và nhãn sấy cỡ nhỏ",
    price: 199000,
    oldPrice: 229000,
    unit: "combo",
    image: "/assets/gift-combo.svg",
    badge: "Sale",
    stockLabel: "Còn hàng"
  },
  {
    id: "combo-family",
    name: "Combo gia đình",
    description: "Tăng lượng nhãn tươi, thêm túi nhãn sấy",
    price: 289000,
    unit: "combo",
    image: "/assets/gift-combo.svg",
    badge: "Tiết kiệm",
    stockLabel: "Còn hàng"
  },
  {
    id: "combo-gift",
    name: "Combo quà biếu",
    description: "Đóng hộp quà lịch sự",
    price: 399000,
    unit: "combo",
    image: "/assets/gift-combo.svg",
    badge: "Quà biếu",
    stockLabel: "Đặt trước"
  }
];

const baseProducts: Product[] = [
  {
    id: "fresh-1kg",
    name: "Nhãn lồng tươi loại 1 - 1kg",
    description: "Cùi dày, hạt nhỏ, ngọt thanh",
    price: 69000,
    oldPrice: 79000,
    unit: "kg",
    image: "/assets/fresh-longan.svg",
    category: "fresh",
    tags: ["Theo kg", "Tất cả"],
    badge: "Bán chạy",
    featured: true
  },
  {
    id: "fresh-2kg",
    name: "Nhãn lồng tươi nguyên chùm - 2kg",
    description: "Tươi ngon, phù hợp ăn gia đình",
    price: 135000,
    unit: "túi",
    image: "/assets/longan-bunch.svg",
    category: "fresh",
    tags: ["Nguyên chùm", "Tất cả"],
    badge: "Mới",
    featured: true
  },
  {
    id: "dried-500g",
    name: "Nhãn sấy dẻo - 500g",
    description: "Dẻo thơm, ngọt tự nhiên",
    price: 125000,
    unit: "túi",
    image: "/assets/dried-longan.svg",
    category: "dried",
    tags: ["Túi 500g", "Tất cả"],
    badge: "Bán chạy",
    featured: true
  },
  {
    id: "combo-trial",
    name: "Combo nhãn tươi + nhãn sấy",
    description: "Phù hợp dùng thử hoặc biếu tặng",
    price: 199000,
    oldPrice: 229000,
    unit: "combo",
    image: "/assets/gift-combo.svg",
    category: "combo",
    tags: ["Hộp quà", "Tất cả"],
    badge: "Sale 10%",
    featured: true
  },
  {
    id: "fresh-3kg",
    name: "Nhãn nguyên chùm - 3kg",
    description: "Chùm đẹp, quả đều, đóng gói chống dập",
    price: 198000,
    unit: "giỏ",
    image: "/assets/longan-bunch.svg",
    category: "fresh",
    tags: ["Nguyên chùm", "Tất cả"]
  },
  {
    id: "fresh-family-5kg",
    name: "Túi nhãn gia đình - 5kg",
    description: "Lựa chọn tiết kiệm cho gia đình",
    price: 325000,
    unit: "túi",
    image: "/assets/fresh-longan.svg",
    category: "fresh",
    tags: ["Theo kg", "Tất cả"]
  },
  {
    id: "fresh-gift-box",
    name: "Hộp nhãn lồng cao cấp",
    description: "Đóng hộp đẹp, phù hợp quà biếu",
    price: 245000,
    unit: "hộp",
    image: "/assets/gift-combo.svg",
    category: "fresh",
    tags: ["Hộp quà", "Tất cả"],
    badge: "Quà biếu"
  },
  {
    id: "dried-250g",
    name: "Nhãn sấy dẻo - 250g",
    description: "Túi nhỏ tiện dùng, giữ vị ngọt tự nhiên",
    price: 69000,
    unit: "túi",
    image: "/assets/dried-longan.svg",
    category: "dried",
    tags: ["Túi 250g", "Tất cả"]
  },
  {
    id: "dried-crispy-500g",
    name: "Nhãn sấy khô - 500g",
    description: "Vị thơm đậm, phù hợp pha trà",
    price: 139000,
    unit: "túi",
    image: "/assets/dried-bowl.svg",
    category: "dried",
    tags: ["Túi 500g", "Tất cả"]
  },
  {
    id: "dried-premium",
    name: "Nhãn sấy cao cấp",
    description: "Chọn lọc kỹ, đóng gói sạch",
    price: 159000,
    unit: "túi",
    image: "/assets/dried-bowl.svg",
    category: "dried",
    tags: ["Túi 500g", "Tất cả"],
    badge: "Cao cấp"
  },
  {
    id: "dried-gift",
    name: "Hộp quà nhãn sấy",
    description: "Hộp quà lịch sự cho gia đình và đối tác",
    price: 289000,
    unit: "hộp",
    image: "/assets/gift-combo.svg",
    category: "dried",
    tags: ["Hộp quà", "Tất cả"],
    badge: "Quà biếu"
  },
  {
    id: "dried-trial-combo",
    name: "Combo nhãn sấy dùng thử",
    description: "Gồm túi 250g và 500g",
    price: 185000,
    unit: "combo",
    image: "/assets/gift-combo.svg",
    category: "combo",
    tags: ["Tất cả"],
    badge: "Combo"
  }
];

function uniqueImages(product: Product) {
  const variantImages = product.variants?.map((variant) => variant.image).filter((image): image is string => Boolean(image)) ?? [];

  return Array.from(new Set([product.image, ...variantImages, ...categoryDetails[product.category].detailImages])).slice(0, 4);
}

function getDefaultVariants(product: Product): ProductVariant[] {
  if (product.variants?.length) {
    return product.variants;
  }

  if (product.category === "combo") {
    return comboVariants;
  }

  if (product.tags.includes("Hộp quà")) {
    return product.category === "fresh" ? freshGiftVariants : driedGiftVariants;
  }

  if (product.category === "dried") {
    return driedVariants;
  }

  if (product.tags.includes("Nguyên chùm")) {
    return freshBunchVariants;
  }

  return freshStandardVariants;
}

export const products: Product[] = baseProducts.map((product) => {
  const details = categoryDetails[product.category];
  const variants = getDefaultVariants(product);

  return {
    ...product,
    variants,
    longDescription: product.longDescription ?? details.longDescription,
    detailImages: product.detailImages ?? uniqueImages({ ...product, variants }),
    highlights: product.highlights ?? details.highlights,
    specifications: product.specifications ?? details.specifications,
    storageTips: product.storageTips ?? details.storageTips,
    origin: product.origin ?? details.origin
  };
});

export const featuredProducts = products.filter((product) => product.featured);
export const freshProducts = products.filter((product) => product.category === "fresh").slice(0, 6);
export const driedProducts = products.filter((product) => product.category === "dried").slice(0, 6);

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(product: Product, limit = 4) {
  const sameCategory = products.filter((item) => item.category === product.category && item.id !== product.id);
  const fallback = products.filter((item) => item.id !== product.id && !sameCategory.some((same) => same.id === item.id));

  return [...sameCategory, ...fallback].slice(0, limit);
}
