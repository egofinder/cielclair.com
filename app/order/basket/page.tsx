import { getBasketCookie } from "@/actions/basketAction";
import BasketClient from "./basket-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basket",
};

const BasketPage = async () => {
  const basketProducts = await getBasketCookie();

  return <BasketClient basketProducts={basketProducts} />;
};

export default BasketPage;
