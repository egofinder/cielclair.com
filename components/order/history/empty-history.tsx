import { Separator } from "@/components/ui/separator";
import React from "react";

const EmptyHistory = () => {
  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col items-center justify-center gap-4">
      <Separator />
      <div className="my-14">주문 내역이 없습니다.</div>
      <Separator />
    </div>
  );
};

export default EmptyHistory;
