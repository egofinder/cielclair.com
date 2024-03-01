"use client";

import { formatPrice } from "@/lib/utils";
import { Product } from "@/type/product";
import CollapseBox from "@/components/product/collapse-box";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import PlusMinusButton from "@/components/custom-ui/plus-minus-button";
import SizeSelect from "@/components/custom-ui/size-select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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

  const { id, name, price, description, etc, images } = product;
  return (
    <div className="gap-8">
      <div
        className="hidden overflow-y-auto md:absolute md:-top-[115px] md:left-0 md:block md:h-[calc(100%+115px)] md:w-[70%]"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            className="w-full bg-muted object-contain object-center"
            src={image}
            alt={name}
            width={500}
            height={500}
          />
        ))}
      </div>
      <div className="absolute -top-[115px] left-0 flex h-[100vh] w-full bg-muted md:hidden">
        <Carousel plugins={[plugin.current]}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    className="h-[100vh] w-full object-contain object-center"
                    alt="Models"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="pt-[calc(100vh-100px)] md:ml-[70%] md:mt-0 md:w-[30%] md:p-4">
        <div className="flex flex-col gap-4 text-sm">
          <div>{name}</div>
          <div>USD {formatPrice(price)}</div>
          <div>
            <SizeSelect />
          </div>
          <div>
            <PlusMinusButton />
          </div>
          <div>
            <CollapseBox title="상품 설명" data={description} />
            <CollapseBox title="배송 정보" data={shippingInfo} />
            <CollapseBox title="반품 정책" data={returnPolicy} />
          </div>
          <div className="mt-10 flex flex-col gap-4 p-4">
            <Button className="rounded-none" variant="secondary">
              장바구니
            </Button>
            <Button className="rounded-none">바로 구매</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIdClient;
