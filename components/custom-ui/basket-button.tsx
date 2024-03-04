"use client";

import { Button } from "../ui/button";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  return (
    <Button className="h-10 rounded-none" variant="secondary" onClick={onClick}>
      장바구니
    </Button>
  );
};

export default CartButton;
