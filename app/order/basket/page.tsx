"use client";

import { products } from "@/data/products";
import ItemCard from "@/components/order/basket/item-card";
import { useEffect, useState } from "react";
import { Product } from "@/type/product";
import { formatPrice } from "@/lib/utils";
import OrderButton from "@/components/custom-ui/order-button";

const BasketPage = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const cartProducts: Product[] = cart
    .map((productId) => products.find((product) => product.id === productId))
    .filter((product): product is Product => product !== undefined);

  const totalAmount = cartProducts.reduce(
    (total, product) => (product ? total + product.price : total),
    0,
  );
  const shippingFee = 65;
  const totalPayment = totalAmount + shippingFee;

  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col gap-4">
      <div className="flex flex-col items-center gap-4 px-4">
        {cartProducts.map((product, index) => (
          <ItemCard key={index} product={product} />
        ))}
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

export default BasketPage;
