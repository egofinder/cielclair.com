import { ProductStatus } from "./enums";

export type Product = {
  id: string;
  category: string;
  name: string;
  sizes: string[];
  description: string[];
  price: number;
  price_id: string;
  etc?: string;
  images: string[];
  thumbnail: string[];
  status: ProductStatus;
};
