"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/type/product";
import CollapseBox from "@/components/product/collapse-box";
import { Button } from "@/components/ui/button";
import PlusMinusButton from "@/components/custom-ui/plus-minus-button";
import SizeSelect from "@/components/custom-ui/size-select";
import BasketButton from "@/components/custom-ui/basket-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import OrderButton from "@/components/custom-ui/order-button";
import { ProductStatus } from "@/type/enums";

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
  const [quantity, setQuantity] = useState(1);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const { id, name, sizes, price, description, status, images } = product;
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block md:overflow-auto">
        <div
          className="absolute -top-[90px] h-[100vh] w-[60%] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              className="object-cover object-center"
              src={image}
              alt={name}
              width={1000}
              height={1000}
            />
          ))}
        </div>
      </div>
      <div className="block overflow-auto md:hidden">
        {/* Mobile View */}
        <div className="absolute -top-[90px] h-[100vh] w-full">
          <Carousel plugins={[plugin.current]}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <Image
                      src={image}
                      width={500}
                      height={500}
                      className="h-[100vh] w-full object-cover object-center"
                      alt="Models"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="mt-[calc(100vh-90px)] w-full p-4 md:ml-[60%] md:mt-0 md:h-[100vh] md:w-[40%] md:p-10">
        <div className="flex flex-col gap-4 text-sm">
          <div>{name}</div>
          <div>USD {formatPrice(price)}</div>
          <div>
            <SizeSelect sizes={sizes} />
          </div>
          <div>
            <PlusMinusButton quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className="flex flex-col gap-2">
            <CollapseBox title="상품 설명" data={description} />
            <CollapseBox title="배송 정보" data={shippingInfo} />
            <CollapseBox title="반품 정책" data={returnPolicy} />
          </div>
          <div className="mt-10 flex flex-col gap-4">
            {status === ProductStatus.SoldOut ? (
              <Button className="h-10 rounded-none" variant="secondary">
                Sold Out
              </Button>
            ) : (
              <>
                <BasketButton productId={id} quantity={quantity} />
                <OrderButton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdClient;
