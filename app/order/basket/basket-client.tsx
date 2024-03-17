"use client";

import { useContext } from "react";
import { formatPrice } from "@/lib/utils";
import { BasketContext } from "@/context/basketContext";
import ItemCard from "@/components/order/basket/item-card";
import OrderButton from "@/components/custom-ui/order-button";
import EmptyBasket from "@/components/order/basket/empty-basket";

const BasketClient = () => {
  const basketContext = useContext(BasketContext);

  if (!basketContext) {
    throw new Error("BasketContext not found");
  }

  const { basketItems, totalPriceOfItems } = basketContext;

  console.log(basketItems);

  if (basketItems.length <= 0) {
    return <EmptyBasket />;
  }

  const totalAmount = totalPriceOfItems;
  const shippingFee = 0;
  const totalPayment = totalAmount + shippingFee;

  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col gap-4">
      <div className="flex flex-col items-center gap-4 px-4">
        {basketItems.map((product, index) =>
          product ? <ItemCard key={index} product={product} /> : null,
        )}
      </div>
      <div className="flex flex-col gap-1 px-4 text-sm">
        <div className="flex justify-end">
          <div className="w-40 text-right">상품금액</div>
          <div className="w-40 text-right">{formatPrice(totalAmount)}</div>
        </div>
        <div className="flex justify-end">
          <div className="w-40 text-right">배송비</div>
          <div className="w-40 text-right">{formatPrice(shippingFee)}</div>
        </div>
        <div className="flex justify-end">
          <div className="w-40 text-right">총 결제금액</div>
          <div className="w-40 text-right">{formatPrice(totalPayment)}</div>
        </div>
        <div className="mt-4 flex justify-end">
          <OrderButton className="w-52" />
        </div>
      </div>
    </div>
  );
};

export default BasketClient;
