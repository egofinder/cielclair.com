"use client";

import useCart from "@/hooks/useCart";
import { Button } from "../ui/button";
// import { SafeUser } from "@/types";

interface CartButtonProps {
  productId: string;
}

const CartButton = ({ productId }: CartButtonProps) => {
  const { saveToCart } = useCart();

  return (
    <Button
      className="h-10 rounded-none"
      variant="secondary"
      onClick={() => saveToCart(productId)}
    >
      장바구니
    </Button>
  );
};

export default CartButton;
