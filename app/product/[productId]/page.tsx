import { shippingInfo as shippingInfoData } from "@/data/shipping-info";
import ProductIdClient from "./product-id-client";
import { products as productData } from "@/data/products";
import { returnPolicy as returnPolicyData } from "@/data/return-policy";

interface IParams {
  productId: string;
}

const ProductDetailPage = ({ params }: { params: IParams }) => {
  const product = productData.find(
    (product) => product.id === params.productId,
  );

  const shippingInfo = shippingInfoData;
  const returnPolicy = returnPolicyData;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductIdClient
      product={product}
      shippingInfo={shippingInfo}
      returnPolicy={returnPolicy}
    />
  );
};

export default ProductDetailPage;
