import { Suspense } from "react";
import ProductClient from "./product-client";
import { Product } from "@/type/product";
import ProductLoading from "./loading";

const ProductPage = async () => {
  const products: Product[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1232-2223-1111",
          name: "칼라리스 싱글-브레스티드 올 블레이저",
          description: "HOT ITEM",
          price: 2890,
          images: ["/product/sample.jpeg", "/product/sample-2.jpeg"],
        },
        {
          id: "22222-23223-2232",
          name: "칼라리스 싱글-브레스티드 올 블레이저 - 2",
          description: "",
          price: 1680,
          images: ["/product/sample.jpeg", "/product/sample-2.jpeg"],
        },
        {
          id: "3982392-290222-231",
          name: "칼라리스 싱글-브레스티드 올 블레이저 - 3",
          description: "",
          price: 1290,
          images: ["/product/sample.jpeg", "/product/sample-2.jpeg"],
        },
      ]);
    }, 1000);
  });

  return (
    <div className="container">
      <ProductClient products={products} />
    </div>
  );
};

export default ProductPage;
