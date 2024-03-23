"use client";

import { CartItem } from "@/type/CartItem";
import { CartTotal } from "@/type/CartTotal";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContext {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  total: CartTotal;
  setTotal: (cartTotal: CartTotal) => void;
}

const CartContext = createContext<CartContext | null>(null);

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};

const initialCartItems: CartItem[] = [];

const totalInitialValues: CartTotal = {
  itemQuantity: 0,
  totalPrice: 0,
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [total, setTotal] = useState<CartTotal>(totalInitialValues);

  useEffect(() => {
    const cartItemsString = localStorage.getItem("cartItems");
    const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    setCartItems(cartItems);
  }, []);

  useEffect(() => {
    setTotal({
      itemQuantity: cartItems.reduce((total, item) => total + item.quantity, 0),
      totalPrice: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    });
  }, [cartItems]);

  const CartContextValue: CartContext = {
    cartItems,
    setCartItems,
    total,
    setTotal,
  };

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCartContext };
