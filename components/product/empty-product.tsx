import { Separator } from "@/components/ui/separator";
import React from "react";

const EmptyProduct = () => {
  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col items-center justify-center gap-4">
      <Separator />
      <div className="my-14">해당되는 제품이 존재하지 않습니다.</div>
      <Separator />
    </div>
  );
};

export default EmptyProduct;
