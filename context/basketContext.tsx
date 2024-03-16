"use client";

import { getBasketDB } from "@/actions/basketAction";
import { createClient } from "@/lib/supabase/client";
import { BasketItem } from "@/type/basket-item";
import { createContext, useEffect, useState } from "react";

type BasketState = BasketItem[];

type BasketContextType = {
  basketItems: BasketState;
  addToCart: (item: BasketItem) => void;
  removeFromCart: (product: BasketItem) => void;
  updateFromCart: (product: BasketItem) => void;
  numberOfItems: number;
  totalPriceOfItems: number;
};

export const BasketContext = createContext<BasketContextType | null>(null);

export const BasketProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const supabase = createClient();
  const [basketItems, setBasketItems] = useState<BasketState>([]);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session) {
        const basketState = await getBasketDB();
        setBasketItems(basketState);
        localStorage.setItem("basket", JSON.stringify(basketItems));
      }
    };
    fetchSession();
  }, [supabase, basketItems]);

  const numberOfItems = basketItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPriceOfItems = basketItems.reduce(
    (total, item) => (item ? total + item.price * item.quantity : total),
    0,
  );

  const addToCart = (item: BasketItem) => {
    setBasketItems([...basketItems, item]);
  };

  const removeFromCart = (product: BasketItem) => {
    setBasketItems(basketItems.filter((item) => item.id !== product.id));
  };

  const updateFromCart = (product: BasketItem) => {
    const existingItem = basketItems.find(
      (item: { id: BasketItem["id"]; size: BasketItem["size"] }) =>
        item.id === product.id && item.size === product.size,
    );
    if (existingItem) {
      existingItem.quantity = product.quantity;
    }
    setBasketItems([...basketItems]);
  };

  const contextValue = {
    basketItems,
    numberOfItems,
    totalPriceOfItems,
    addToCart,
    removeFromCart,
    updateFromCart,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
