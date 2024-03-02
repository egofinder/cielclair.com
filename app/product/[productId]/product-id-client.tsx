"use client";

import Image from "next/image";
import { useRef } from "react";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/type/product";
import CollapseBox from "@/components/product/collapse-box";
import { Button } from "@/components/ui/button";
import PlusMinusButton from "@/components/custom-ui/plus-minus-button";
import SizeSelect from "@/components/custom-ui/size-select";
import CartButton from "@/components/custom-ui/basket-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const { id, name, sizes, price, description, etc, images } = product;
  return (
    <>
      {/* TODO: 공통된 요소 하나로 합쳐서 개발해야 함. */}
      {/* Desktop View */}
      <div className="hidden md:block">
        <div
          className="absolute -top-[90px] h-[calc(100vh+90px)] w-[60%] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              className="h-full w-full object-cover object-center"
              src={image}
              alt={name}
              width={500}
              height={500}
            />
          ))}
        </div>
        <div className="ml-[60%] h-[100vh] w-[40%] p-10">
          <div className="flex flex-col gap-4 text-sm">
            <div>{name}</div>
            <div>USD {formatPrice(price)}</div>
            <div>
              <SizeSelect sizes={sizes} />
            </div>
            <div>
              <PlusMinusButton />
            </div>
            <div className="flex flex-col gap-2">
              <CollapseBox title="상품 설명" data={description} />
              <CollapseBox title="배송 정보" data={shippingInfo} />
              <CollapseBox title="반품 정책" data={returnPolicy} />
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <CartButton productId={id} />
              <Button className="rounded-none">바로 구매</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block overflow-auto md:hidden">
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
        <div className="mt-[calc(100vh-90px)] w-full p-4">
          <div className="flex flex-col gap-4 text-sm">
            <div>{name}</div>
            <div>USD {formatPrice(price)}</div>
            <div>
              <SizeSelect sizes={sizes} />
            </div>
            <div>
              <PlusMinusButton />
            </div>
            <div className="flex flex-col gap-2">
              <CollapseBox title="상품 설명" data={description} />
              <CollapseBox title="배송 정보" data={shippingInfo} />
              <CollapseBox title="반품 정책" data={returnPolicy} />
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <CartButton productId={id} />
              <Button className="rounded-none">바로 구매</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIdClient;
