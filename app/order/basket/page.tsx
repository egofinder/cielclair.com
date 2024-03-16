import BasketClient from "./basket-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basket",
};

const BasketPage = async () => {
  return <BasketClient />;
};

export default BasketPage;
