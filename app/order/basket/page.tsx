import { getBasketCookie } from "@/actions/basketAction";
import BasketClient from "./basket-client";

const BasketPage = async () => {
  const basketProducts = await getBasketCookie();

  return <BasketClient basketProducts={basketProducts} />;
};

export default BasketPage;
