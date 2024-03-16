"use client";

import { cn } from "@/lib/utils";
import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import useBasket from "@/hooks/useBasket";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { BasketItem } from "@/type/basket-item";

interface PlusMinusButtonProps {
  basketItem: BasketItem;
  isLogin: boolean;
}

export default function PlusMinusButton({
  basketItem,
  isLogin,
}: PlusMinusButtonProps) {
  const { removeFromBasket, updateBasket } = useBasket();
  const [count, setCount] = useState(basketItem.quantity);

  const debouncedUpdateBasket = useDebouncedCallback(() => {
    basketItem.quantity = count;
    updateBasket(basketItem, isLogin);
  }, 1000);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    debouncedUpdateBasket();
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    debouncedUpdateBasket();
  };
  return (
    <div className={cn("flex-cols flex h-10 w-fit font-light")}>
      <div className="flex h-full w-full items-center justify-start">
        <button disabled={count === 1}>
          <PiMinusThin
            onClick={decrementCount}
            className={cn(
              count === 1 ? "cursor-not-allowed" : "cursor-pointer",
            )}
          />
        </button>
      </div>
      <div className="flex h-full w-10 items-center justify-center">
        {count}
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <PiPlusThin onClick={incrementCount} className="cursor-pointer" />
      </div>
    </div>
  );
}
