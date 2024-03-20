"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { getBasketDB } from "@/actions/basketAction";
import { BasketItem } from "@/type/basket-item";

interface BasketContextType {
  basketItems: BasketItem[];
  updateLoginStatus: (isLogin: boolean) => void;
  addToCart: (item: BasketItem) => void;
  removeFromCart: (product: BasketItem) => void;
  updateFromCart: (product: BasketItem) => void;
  clearCart: () => void;
  numberOfItems: number;
  totalPriceOfItems: number;
}

export const BasketContext = createContext<BasketContextType | null>(null);

export const BasketProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isLogin, setIsLogin] = useState(false);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const prevLoginRef = useRef(isLogin);

  useEffect(() => {
    const wasLoggedIn = prevLoginRef.current;
    prevLoginRef.current = isLogin;

    if (wasLoggedIn && !isLogin) {
      localStorage.clear();
    }
  }, [isLogin]);

  useEffect(() => {
    const fetchBasket = async () => {
      const basketState = isLogin ? await getBasketDB() : [];
      setBasketItems(basketState);
    };
    fetchBasket();
  }, [isLogin]);

  useEffect(() => {
    const storedBasketItems = localStorage.getItem("basket");
    if (storedBasketItems) {
      setBasketItems(JSON.parse(storedBasketItems));
    }
  }, [isLogin]);

  const numberOfItems = useMemo(() => {
    return basketItems.reduce((total, item) => total + item.quantity, 0);
  }, [basketItems]);

  const totalPriceOfItems = useMemo(() => {
    return basketItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [basketItems]);

  const addToCart = useCallback(
    (item: BasketItem) => {
      setBasketItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (prevItem) => prevItem.id === item.id && prevItem.size === item.size,
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + item.quantity,
          };
          localStorage.setItem("basket", JSON.stringify(updatedItems));
          return updatedItems;
        } else {
          const newItems = prevItems.concat(item);
          localStorage.setItem("basket", JSON.stringify(newItems));
          return newItems;
        }
      });
    },
    [setBasketItems],
  );

  const removeFromCart = useCallback(
    (product: BasketItem) => {
      setBasketItems((prevItems) => {
        const updatedItems = prevItems.filter(
          (item) => item.id !== product.id || item.size !== product.size,
        );
        localStorage.setItem("basket", JSON.stringify(updatedItems));
        return updatedItems;
      });
    },
    [setBasketItems],
  );

  const updateFromCart = useCallback(
    (product: BasketItem) => {
      setBasketItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: product.quantity }
            : item,
        );
        localStorage.setItem("basket", JSON.stringify(updatedItems));
        return updatedItems;
      });
    },
    [setBasketItems],
  );

  const clearCart = useCallback(() => {
    localStorage.clear();
  }, []);

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
    clearCart,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
