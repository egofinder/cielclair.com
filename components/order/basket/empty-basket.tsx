import { Separator } from "@/components/ui/separator";
import React from "react";

const EmptyBasket = () => {
  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col items-center justify-center gap-4">
      <Separator />
      <div className="my-14">장바구니가 비어 있습니다.</div>
      <Separator />
    </div>
  );
};

export default EmptyBasket;
