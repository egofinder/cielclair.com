import useCartTotal from "./useCartTotal";
import useCartItems from "./useCartItems";

const useCart = () => {
  const {
    cartItems,
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
  } = useCartItems();

  const { total, updateCartTotal } = useCartTotal();

  return {
    cartItems,
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
    total,
    updateCartTotal,
  };
};

export default useCart;
