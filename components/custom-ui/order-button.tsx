"use client";

import useCart from "@/hooks/useBasket";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
// import { SafeUser } from "@/types";

interface OrderButtonProps {
  cartId?: string;
  className?: string;
}

const OrderButton = ({ cartId, className }: OrderButtonProps) => {
  //   const { saveToCart } = useCart();

  return (
    <Button
      className={cn("h-10 rounded-none", className)}
      //   onClick={() => saveToCart(productId)}
    >
      주문하기
    </Button>
  );
};

export default OrderButton;
