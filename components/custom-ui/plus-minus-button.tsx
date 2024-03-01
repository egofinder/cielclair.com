"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { PiPlusThin, PiMinusThin } from "react-icons/pi";
import { Button } from "../ui/button";

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
    <div
      className={cn(
        "flex-cols flex h-[40px] w-fit  border border-black font-light",
      )}
    >
      <div className="flex h-full w-full items-center justify-start">
        <Button
          className="rounded-none border-none"
          variant="outline"
          size="icon"
          onClick={decrementCount}
        >
          <PiMinusThin />
        </Button>
      </div>
      <div className="flex h-full w-[50px] items-center justify-center">
        {count}
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <Button
          className="rounded-none border-none"
          variant="outline"
          size="icon"
          onClick={incrementCount}
        >
          <PiPlusThin />
        </Button>
      </div>
      {/* <button
        className="flex h-full w-[50px] items-center justify-center"
        onClick={incrementCount}
      >
        <PiPlusThin />
      </button> */}
    </div>
  );
}
