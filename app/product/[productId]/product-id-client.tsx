import { formatPrice } from "@/lib/utils";
import { Product } from "@/type/product";
import CollapseBox from "@/components/product/collapse-box";
import { returnPolicy } from "@/data/return-policy";
import Image from "next/image";

interface ProductClientProps {
  product: Product;
  shippingInfo: string[];
  returnPolicy: string[];
}

const ProductIdClient = ({
  product,
  shippingInfo,
  returnPolicy,
}: ProductClientProps) => {
  const { id, name, price, description, etc, images } = product;
  return (
    <div className="container relative">
      <div className="m-4 grid grid-cols-1 justify-between gap-8 md:grid-cols-[2fr,1fr]">
        <div
          className="absolute -top-[115px] h-[90vh] w-[calc(66%-2rem)] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <Image
            className="h-[100vh] w-full bg-sky-400 object-cover"
            src="/product/model-4.png"
            alt={name}
            width={500}
            height={500}
          />
          <Image
            className="h-[100vh] w-full bg-yellow-500 object-cover"
            src="/product/model-2.png"
            alt={name}
            width={500}
            height={500}
          />
        </div>
        {/* Dummy div for image box */}
        <div className="w-[calc(66%-2rem)]" />
        <div className="h-[calc(90vh-115px)] w-full">
          <div className="flex flex-col gap-4 py-4">
            <p className="text-sm">{name}</p>
            <p className="text-sm">USD {formatPrice(price)}</p>
            <CollapseBox title="상품 설명" data={description} />
            <CollapseBox title="배송 정보" data={shippingInfo} />
            <CollapseBox title="반품 정책" data={returnPolicy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdClient;
