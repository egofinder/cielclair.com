"use client";

import { formatPrice } from "@/lib/utils";
import ItemCard from "@/components/order/cart/item-card";
import OrderButton from "@/components/custom-ui/order-button";
import EmptyCart from "@/components/order/cart/empty-cart";
import useCart from "@/hooks/useCart";

const BasketClient = () => {
  const { cartItems, total } = useCart();

  if (total.itemQuantity <= 0) {
    return <EmptyCart />;
  }

  const shippingFee = 0;
  const totalPayment = total.totalPrice + shippingFee;

  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col gap-4">
      <div className="flex flex-col items-center gap-4 px-4">
        {cartItems.map((product, index) =>
          product ? <ItemCard key={index} product={product} /> : null,
        )}
      </div>
      <div className="flex flex-col gap-1 px-4 text-sm">
        <div className="flex justify-end">
          <div className="w-40 text-right">상품금액</div>
          <div className="w-40 text-right">{formatPrice(total.totalPrice)}</div>
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
