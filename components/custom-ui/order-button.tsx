"use client";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface OrderButtonProps {
  cartId?: string;
  className?: string;
}

const OrderButton = ({ className }: OrderButtonProps) => {
  return (
    <Button className={cn("h-10 rounded-none", className)}>주문하기</Button>
  );
};

export default OrderButton;
