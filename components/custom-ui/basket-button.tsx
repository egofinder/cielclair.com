"use client";

import useBasket from "@/hooks/useBasket";
import { Button } from "../ui/button";

interface CartButtonProps {
  productId: string;
  quantity: number;
}

const CartButton = ({ productId, quantity }: CartButtonProps) => {
  const { saveToBasket } = useBasket();

  return (
    <Button
      className="h-10 rounded-none"
      variant="secondary"
      onClick={() => saveToBasket(productId, quantity)}
    >
      장바구니
    </Button>
  );
};

export default CartButton;
