import { useCartContext } from "@/context/cartContextProvider";
// import useCartTotal from "./useCartTotal";
import { CartItem } from "@/type/CartItem";
import { useToast } from "@/components/ui/use-toast";

const useCartItems = () => {
  const { cartItems, setCartItems } = useCartContext();
  // const { updateCartTotal } = useCartTotal();
  const { toast } = useToast();

  const updateItemQuantity = (
    prevItem: CartItem,
    newItem: CartItem,
    quantity: number,
  ): CartItem => {
    if (prevItem.id === newItem.id && prevItem.size === newItem.size) {
      return {
        ...prevItem,
        quantity: prevItem.quantity + quantity,
      };
    } else {
      return prevItem;
    }
  };

  const addItem = (newItem: CartItem) => {
    let updatedItems;
    const isItemAlreadyInCart = cartItems.some(
      (item: CartItem) => newItem.id === item.id && newItem.size === item.size,
    );

    if (isItemAlreadyInCart) {
      updatedItems = cartItems.map((item: CartItem) =>
        updateItemQuantity(item, newItem, newItem.quantity),
      );
    } else {
      updatedItems = [...cartItems, newItem];
    }

    setCartItems(updatedItems);
    // updateCartTotal(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    toast({
      title: "Added to Cart",
      description: "Check your Cart",
      duration: 500,
    });
  };

  const removeItem = (itemToRemove: CartItem) => {
    const updatedItems = cartItems.filter(
      (item: CartItem) =>
        item.id !== itemToRemove.id || item.size !== itemToRemove.size,
    );
    setCartItems(updatedItems);
    // updateCartTotal(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));

    toast({
      title: "Removed From Cart",
      description: "Check your Cart",
      duration: 500,
    });
  };

  const increaseItemQuantity = (itemToIncrease: CartItem) => {
    const updatedItems = cartItems.map((item: CartItem) =>
      updateItemQuantity(item, itemToIncrease, 1),
    );
    setCartItems(updatedItems);
    // updateCartTotal(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const decreaseItemQuantity = (itemToDecrease: CartItem) => {
    const updatedItems = cartItems.map((item: CartItem) =>
      updateItemQuantity(item, itemToDecrease, -1),
    );
    setCartItems(updatedItems);
    // updateCartTotal(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    console.log("clearing cart from hook!");
    setCartItems([]);
    // updateCartTotal([]);
    localStorage.removeItem("cartItems");
  };

  return {
    cartItems,
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
  };
};

export default useCartItems;
