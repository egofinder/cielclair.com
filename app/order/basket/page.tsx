import { Metadata } from "next";
import BasketClient from "./basket-client";

export const metadata: Metadata = {
  title: "Basket",
};

const BasketPage = () => {
  return <BasketClient />;
};

export default BasketPage;
