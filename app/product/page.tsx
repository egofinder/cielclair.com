import { Metadata } from "next";
import { Product } from "@/type/product";
import { products as data } from "@/data/products";
import EmptyProduct from "@/components/product/empty-product";
import ProductClient from "./product-client";

export const metadata: Metadata = {
  title: "Product",
};

interface ProductProps {
  searchParams: {
    category: string;
  };
}
const ProductPage = async ({ searchParams }: ProductProps) => {
  const category = searchParams.category;

  const products: Product[] = await new Promise((resolve) => {
    setTimeout(() => {
      let productData = data;
      if (category) {
        productData = data.filter((prodcut) => prodcut.category === category);
      }
      resolve(productData);
    }, 200);
  });

  return (
    <div className="container">
      {products.length > 0 ? (
        <ProductClient products={products} />
      ) : (
        <EmptyProduct />
      )}
    </div>
  );
};

export default ProductPage;
