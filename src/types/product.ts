export type ProductCategory = "fresh" | "dried" | "combo";

export type ProductSpecification = {
  label: string;
  value: string;
};

export type ProductVariant = {
  id: string;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  unit: string;
  image?: string;
  badge?: string;
  stockLabel?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  oldPrice?: number;
  unit: string;
  image: string;
  detailImages?: string[];
  category: ProductCategory;
  tags: string[];
  variants?: ProductVariant[];
  badge?: string;
  featured?: boolean;
  highlights?: string[];
  specifications?: ProductSpecification[];
  storageTips?: string[];
  origin?: string;
};
