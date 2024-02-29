import ProductClient from "./product-client";
import { Product } from "@/type/product";
import { products as data } from "@/data/products";

const ProductPage = async () => {
  const products: Product[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  return (
    <div className="container">
      <ProductClient products={products} />
    </div>
  );
};

export default ProductPage;
