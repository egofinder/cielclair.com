"use server";

import { Product } from "@/type/product";
import { cookies } from "next/headers";

export async function saveToBasketCookie(
  productId: Product["id"],
  size: string,
  quantity: number,
) {
  const prevBasket = cookies().get("basket")?.value;

  const basket = JSON.parse(prevBasket || "[]");

  const existingItem = basket.find(
    (item: { id: Product["id"]; size: string; quantity: number }) =>
      item.id === productId && item.size === size,
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    basket.push({ id: productId, size: size, quantity: quantity });
  }
  cookies().set("basket", JSON.stringify(basket));
}

export async function updateBasketCookie(
  productId: Product["id"],
  size: string,
  quantity: number,
) {
  const prevBasket = cookies().get("basket")?.value;

  const basket = JSON.parse(prevBasket || "[]");

  const existingItem = basket.find(
    (item: { id: Product["id"]; size: string; quantity: number }) =>
      item.id === productId && item.size === size,
  );

  if (existingItem) {
    existingItem.quantity = quantity;
  }
  cookies().set("basket", JSON.stringify(basket));
}

export async function removeFromBasketCookie(
  productId: Product["id"],
  size: string,
) {
  const prevBasket = cookies().get("basket")?.value;
  const basket = JSON.parse(prevBasket || "[]");
  const updatedBasket = basket.filter(
    (item: { id: Product["id"]; size: string }) =>
      item.id !== productId || item.size !== size,
  );
  cookies().set("basket", JSON.stringify(updatedBasket));
}

export async function getBasketCookie() {
  return JSON.parse(cookies().get("basket")?.value || "[]");
}
