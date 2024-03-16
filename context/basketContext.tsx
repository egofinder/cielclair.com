"use client";

import { getBasketDB } from "@/actions/basketAction";
import { BasketItem } from "@/type/basket-item";
import { createContext, useEffect, useState } from "react";

type BasketState = BasketItem[];

type BasketContextType = {
  basketItems: BasketState;
  updateLoginStatus: (isLogin: boolean) => void;
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
  const [isLogin, setIsLogin] = useState(false);
  const [basketItems, setBasketItems] = useState<BasketState>([]);

  useEffect(() => {
    const fetchSession = async () => {
      if (isLogin) {
        const basketState = await getBasketDB();
        setBasketItems(basketState);
      } else {
        setBasketItems([]);
      }
    };
    fetchSession();
  }, [isLogin]);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);

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
    setBasketItems(
      basketItems.filter(
        (item) => item.id !== product.id || item.size !== product.size,
      ),
    );
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

  const updateLoginStatus = (isLogin: boolean) => {
    setIsLogin(isLogin);
  };

  const contextValue = {
    basketItems,
    numberOfItems,
    totalPriceOfItems,
    updateLoginStatus,
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
