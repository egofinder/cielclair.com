"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { PiPlusThin, PiMinusThin } from "react-icons/pi";

export default function PlusMinusButton() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    if (count === 0) return;
    setCount(count - 1);
  }
  return (
    <div className={cn("flex-cols flex h-10 w-fit font-light")}>
      <div className="flex h-full w-full items-center justify-start">
        <PiMinusThin onClick={decrementCount} />
      </div>
      <div className="flex h-full w-10 items-center justify-center">
        {count}
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <PiPlusThin onClick={incrementCount} />
      </div>
    </div>
  );
}
