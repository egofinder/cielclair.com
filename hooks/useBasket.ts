import { useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  removeFromBasketCookie,
  saveToBasketCookie,
  updateBasketCookie,
} from "@/actions/basketAction";

const useBasket = () => {
  const { toast } = useToast();

  const saveToBasket = useCallback(
    async (productId: string, quantity: number) => {
      try {
        await saveToBasketCookie(productId, quantity);
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
    [toast],
  );

  const removeFromBasket = useCallback(
    async (productId: string) => {
      try {
        await removeFromBasketCookie(productId);
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
    [toast],
  );

  const updateBasket = useCallback(
    async (productId: string, quantity: number) => {
      try {
        await updateBasketCookie(productId, quantity);
      } catch (error) {
        throw new Error("Failed to update Basket");
      }
    },
    [],
  );

  return {
    saveToBasket,
    removeFromBasket,
    updateBasket,
  };
};

export default useBasket;
