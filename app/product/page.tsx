import ProductClient from "./product-client";
import { Product } from "@/type/product";
import { products as data } from "@/data/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};

const ProductPage = async () => {
  const products: Product[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });

  return (
    <div className="container">
      <ProductClient products={products} />
    </div>
  );
};

export default ProductPage;
