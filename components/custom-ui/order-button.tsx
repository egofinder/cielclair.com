"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface OrderButtonProps {
  cartId?: string;
  className?: string;
}

const OrderButton = ({ className }: OrderButtonProps) => {
  const router = useRouter();

  return (
    <Button
      className={cn("h-10 rounded-none", className)}
      onClick={() => router.push("/order/checkout")}
    >
      주문하기
    </Button>
  );
};

export default OrderButton;
