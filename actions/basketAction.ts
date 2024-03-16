"use server";

import { createClient } from "@/lib/supabase/server";
import { BasketItem } from "@/type/basket-item";

// Database related function
export async function getBasketDB() {
  const supabase = createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;
  const { data: baskets, error } = await supabase
    .from("baskets")
    .select("items")
    .eq("user_id", userId)
    .single();

  if (!baskets?.items) {
    return [];
  }
  return baskets.items;
}

export async function saveToBasketDB(basketItem: BasketItem) {
  const prevBasket = await getBasketDB();

  const supabase = createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;

  const existingItem = prevBasket.find(
    (item: { id: BasketItem["id"]; size: BasketItem["size"] }) =>
      item.id === basketItem.id && item.size === basketItem.size,
  );

  if (existingItem) {
    existingItem.quantity += basketItem.quantity;
  } else {
    prevBasket.push(basketItem);
  }

  let items = { user_id: userId, items: prevBasket };

  await supabase.from("baskets").upsert(items, { onConflict: "user_id" });
}

export async function updateBasketDB(basketItem: BasketItem) {
  const prevBasket = await getBasketDB();

  const supabase = createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;

  const existingItem = prevBasket.find(
    (item: { id: BasketItem["id"]; size: BasketItem["size"] }) =>
      item.id === basketItem.id && item.size === basketItem.size,
  );

  if (existingItem) {
    existingItem.quantity = basketItem.quantity;
  }
  let items = { user_id: userId, items: prevBasket };

  await supabase.from("baskets").upsert(items, { onConflict: "user_id" });
}

export async function removeFromBasketDB(basketItem: BasketItem) {
  const prevBasket = await getBasketDB();

  const supabase = createClient();
  const userId = (await supabase.auth.getUser()).data.user?.id;

  const updatedBasket = prevBasket.filter(
    (item: { id: BasketItem["id"]; size: BasketItem["size"] }) =>
      item.id !== basketItem.id || item.size !== basketItem.size,
  );
  let items = { user_id: userId, items: updatedBasket };

  await supabase.from("baskets").upsert(items, { onConflict: "user_id" });
}
