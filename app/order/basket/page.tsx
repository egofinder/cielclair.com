"use client";

import ItemCard from "@/components/order/basket/item-card";
import { useEffect, useState } from "react";

const BasketPage = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  return (
    <div className="container flex w-full max-w-[980px] flex-col gap-4">
      <div className="flex flex-col items-center gap-4 px-4">
        {cart.map((productId, index) => (
          <ItemCard key={index} productId={productId} />
        ))}
      </div>
      <div className="w-full px-4 font-medium">
        <div className="flex justify-end gap-2">
          <div>총 금액</div>
          <div>$12,333</div>
        </div>
        <div className="flex  justify-end gap-2">
          <div>배송비</div>
          <div>$12,333</div>
        </div>
        <div className="flex  justify-end gap-2">
          <div>총 결제 금액</div>
          <div>$12,333</div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
