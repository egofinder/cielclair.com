"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/type/product";
import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import useBasket from "@/hooks/useBasket";

interface PlusMinusButtonProps {
  productId: Product["id"];
  size: string;
  quantity: number;
}

export default function PlusMinusButton({
  productId,
  size,
  quantity,
}: PlusMinusButtonProps) {
  const { removeFromBasket, updateBasket } = useBasket();

  function incrementCount() {
    updateBasket(productId, size, quantity + 1);
  }
  function decrementCount() {
    if (quantity - 1 === 0) {
      removeFromBasket(productId, size);
    }
    updateBasket(productId, size, quantity - 1);
  }
  return (
    <div className={cn("flex-cols flex h-10 w-fit font-light")}>
      <div className="flex h-full w-full items-center justify-start">
        <PiMinusThin onClick={decrementCount} className="cursor-pointer" />
      </div>
      <div className="flex h-full w-10 items-center justify-center">
        {quantity}
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <PiPlusThin onClick={incrementCount} className="cursor-pointer" />
      </div>
    </div>
  );
}
