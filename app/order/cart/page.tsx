import { Metadata } from "next";
import CartClient from "./cart-client";

export const metadata: Metadata = {
  title: "Cart",
};

const CartPage = () => {
  return <CartClient />;
};

export default CartPage;
