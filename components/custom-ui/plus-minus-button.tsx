"use client";

import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import { Button } from "../ui/button";

interface PlusMinusButtonProps {
  quantity: number;
  setQuantity: (quantity: number | ((prevQuantity: number) => number)) => void;
}

export default function PlusMinusButton({
  quantity,
  setQuantity,
}: PlusMinusButtonProps) {
  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  function decrementQuantity() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }
  return (
    <div className={"flex-cols flex h-10 w-fit border border-black font-light"}>
      <div className="flex w-full items-center justify-start">
        <Button
          className="h-full rounded-none border-none"
          variant="outline"
          onClick={decrementQuantity}
        >
          <PiMinusThin />
        </Button>
      </div>
      <div className="flex h-full w-[50px] items-center justify-center">
        {quantity}
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <Button
          className="h-full rounded-none border-none"
          variant="outline"
          onClick={incrementQuantity}
        >
          <PiPlusThin />
        </Button>
      </div>
    </div>
  );
}
