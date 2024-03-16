import { useCallback, useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  removeFromBasketDB,
  saveToBasketDB,
  updateBasketDB,
} from "@/actions/basketAction";
import { BasketContext } from "@/context/basketContext";
import { BasketItem } from "@/type/basket-item";

const useBasket = () => {
  const basketContext = useContext(BasketContext);

  if (!basketContext) {
    throw new Error(
      "BasketContext is null. Make sure you're inside a BasketProvider.",
    );
  }

  const { addToCart, removeFromCart, updateFromCart } = basketContext;

  const { toast } = useToast();

  const saveToBasket = useCallback(
    async (basketItem: BasketItem, isLogin: boolean) => {
      try {
        if (isLogin) {
          await saveToBasketDB(basketItem);
        }
        addToCart(basketItem);
        toast({
          title: "Added to Basket",
          description: "Check your Basket",
          duration: 500,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to add to Basket",
          description: "Failed to update Basket",
          duration: 500,
        });
      }
    },
    [toast, addToCart],
  );

  const removeFromBasket = useCallback(
    async (basketItem: BasketItem, isLogin: boolean) => {
      try {
        if (isLogin) {
          await removeFromBasketDB(basketItem);
        }
        removeFromCart(basketItem);
        toast({
          title: "Remove from Basket",
          description: "Check your Basket",
          duration: 500,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to remove product from Basket",
          description: "Failed to update Basket",
          duration: 500,
        });
      }
    },
    [toast, removeFromCart],
  );

  const updateBasket = useCallback(
    async (basketItem: BasketItem, isLogin: boolean) => {
      try {
        if (isLogin) {
          await updateBasketDB(basketItem);
        }
        updateFromCart(basketItem);
      } catch (error) {
        throw new Error("Failed to update Basket");
      }
    },
    [updateFromCart],
  );

  return {
    saveToBasket,
    removeFromBasket,
    updateBasket,
  };
};

export default useBasket;
