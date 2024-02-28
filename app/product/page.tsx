import ProductClient from "./product-client";
import { Product } from "@/type/product";

const ProductPage = async () => {
  const products: Product[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1232-2223-1111",
          name: "실크 플로럴 프린트 블랙 블라우스",
          description: "HOT ITEM",
          price: 2890,
          images: ["/product/model-1.png", "/product/sample-2.jpeg"],
        },
        {
          id: "22222-23223-2232",
          name: "실크 심플 데님 블라우스",
          description: "",
          price: 1680,
          images: ["/product/model-2.png", "/product/sample-2.jpeg"],
        },
        {
          id: "3982392-290222-231",
          name: "실크 플로럴 프린트 블루 블라우스",
          description: "",
          price: 1290,
          images: ["/product/model-3.png", "/product/sample-2.jpeg"],
        },
        {
          id: "3982392-290222-231",
          name: "실크 심플 그레이 블라우스",
          description: "",
          price: 1290,
          images: ["/product/model-4.png", "/product/sample-2.jpeg"],
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
