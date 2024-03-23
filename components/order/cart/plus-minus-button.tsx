"use client";

import { cn } from "@/lib/utils";
import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import { CartItem } from "@/type/CartItem";
import useCart from "@/hooks/useCart";

interface PlusMinusButtonProps {
  basketItem: CartItem;
}

export default function PlusMinusButton({ basketItem }: PlusMinusButtonProps) {
  const { increaseItemQuantity, decreaseItemQuantity } = useCart();

  return (
    <div className={cn("flex-cols flex h-10 w-fit font-light")}>
      <div className="flex h-full w-full items-center justify-start">
        <button disabled={basketItem.quantity === 1}>
          <PiMinusThin
            onClick={() => decreaseItemQuantity(basketItem)}
            className={cn(
              basketItem.quantity === 1
                ? "cursor-not-allowed"
                : "cursor-pointer",
            )}
          />
        </button>
      </div>
      <div className="flex h-full w-10 items-center justify-center">
        {basketItem.quantity}
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <PiPlusThin
          onClick={() => increaseItemQuantity(basketItem)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
