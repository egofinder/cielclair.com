import ProductClient from "./product-client";
import { Product } from "@/type/product";
import { products as data } from "@/data/products";
import { Metadata } from "next";
import EmptyProduct from "@/components/product/empty-product";

export const metadata: Metadata = {
  title: "Product",
};

interface IParams {
  searchParams: {
    category: string;
  };
}
const ProductPage = async ({ searchParams }: IParams) => {
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

  if (products.length === 0) return <EmptyProduct />;

  return (
    <div className="container">
      <ProductClient products={products} />
    </div>
  );
};

export default ProductPage;
