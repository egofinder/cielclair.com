"use server";

import { Product } from "@/type/product";
import { cookies } from "next/headers";

async function saveToBasketCookie(productId: Product["id"], quantity: number) {
  const prevBasket = cookies().get("basket")?.value;

  const basket = JSON.parse(prevBasket || "[]");

  const existingItem = basket.find(
    (item: { id: Product["id"]; quantity: number }) => item.id === productId,
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    basket.push({ id: productId, quantity: quantity });
  }
  cookies().set("basket", JSON.stringify(basket));
}

async function updateBasketCookie(productId: Product["id"], quantity: number) {
  const prevBasket = cookies().get("basket")?.value;

  const basket = JSON.parse(prevBasket || "[]");

  const existingItem = basket.find(
    (item: { id: Product["id"]; quantity: number }) => item.id === productId,
  );

  if (existingItem) {
    existingItem.quantity = quantity;
  }
  cookies().set("basket", JSON.stringify(basket));
}

async function removeFromBasketCookie(productId: Product["id"]) {
  const prevBasket = cookies().get("basket")?.value;
  const basket = JSON.parse(prevBasket || "[]");
  const updatedBasket = basket.filter(
    (item: { id: Product["id"]; quantity: number }) => item.id !== productId,
  );
  cookies().set("basket", JSON.stringify(updatedBasket));
}

function getBasketCookie() {
  return JSON.parse(cookies().get("basket")?.value || "[]");
}

export {
  saveToBasketCookie,
  removeFromBasketCookie,
  updateBasketCookie,
  getBasketCookie,
};
