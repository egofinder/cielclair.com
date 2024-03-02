import { useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const useCart = () => {
  const { toast } = useToast();
  const router = useRouter();

  const saveToCart = useCallback(
    (productId: string) => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push(productId);
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
        toast({
          title: "Added to cart",
          description: "Check your carts",
          duration: 500,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to add to cart",
          description: "Failed to update favorite",
          duration: 500,
        });
      }
    },
    [toast],
  );

  const removeFromCart = useCallback(
    (productId: string) => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = cart.filter((item: string) => item !== productId);
      try {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast({
          title: "Remove from cart",
          description: "Check your carts",
          duration: 500,
        });
        console.log("After:", localStorage.getItem("cart"));
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Failed to remove product from cart",
          description: "Failed to update favorite",
          duration: 500,
        });
      }
    },
    [toast],
  );

  return {
    saveToCart,
    removeFromCart,
  };
};

export default useCart;
