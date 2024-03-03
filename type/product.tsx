import { ProductStatus } from "./enums";

export type Product = {
  id: string;
  name: string;
  sizes: string[];
  description: string[];
  price: number;
  etc?: string;
  images: string[];
  thumbnail: string[];
  status: ProductStatus;
};
