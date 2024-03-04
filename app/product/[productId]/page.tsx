import { shippingInfo as shippingInfoData } from "@/data/shipping-info";
import ProductIdClient from "./product-id-client";
import { products as productData } from "@/data/products";
import { returnPolicy as returnPolicyData } from "@/data/return-policy";

interface IParams {
  productId: string;
}

const findProduct = (productId: string) => {
  return productData.find((product) => product.id === productId);
};

export async function generateMetadata({ params }: { params: IParams }) {
  const product = findProduct(params.productId);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product?.name,
  };
}

const ProductDetailPage = ({ params }: { params: IParams }) => {
  const product = findProduct(params.productId);

  const shippingInfo = shippingInfoData;
  const returnPolicy = returnPolicyData;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container relative">
      <ProductIdClient
        product={product}
        shippingInfo={shippingInfo}
        returnPolicy={returnPolicy}
      />
    </div>
  );
};

export default ProductDetailPage;
