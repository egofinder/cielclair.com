import { useCartContext } from "@/context/cartContextProvider";

import { CartItem } from "@/type/CartItem";
import { CartTotal } from "@/type/CartTotal";

const useCartTotal = () => {
  const { total, setTotal } = useCartContext();

  const updateCartTotal = (items: CartItem[]) => {
    const itemQuantity = items.reduce(
      (total: number, item: CartItem) => total + item.quantity,
      0,
    );

    const totalPrice = items.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0,
    );

    const total: CartTotal = {
      itemQuantity,
      totalPrice,
    };

    setTotal(total);
  };

  return {
    total,
    updateCartTotal,
  };
};

export default useCartTotal;
