"use server";

import { createClient } from "@/lib/supabase/server";
import { CartItem } from "@/type/CartItem";
import { SupabaseClient } from "@supabase/supabase-js";

const getUserId = async (supabase: SupabaseClient) => {
  const user = await supabase.auth.getUser();
  const userId = user.data.user?.id;
  return userId;
};

export async function getCartItemsFromDB() {
  const supabase = createClient();
  const userId = await getUserId(supabase);

  const { data: cartItems, error } = await supabase
    .from("carts")
    .select("items")
    .eq("user_id", userId)
    .single();

  if (!cartItems?.items) {
    return [];
  }
  return cartItems.items;
}

export async function saveCartItemsToDB(cartItems: CartItem[]) {
  const supabase = createClient();
  const userId = await getUserId(supabase);

  // console.log(cartItems);
  if (userId) {
    const { data, error } = await supabase
      .from("carts")
      .upsert({ user_id: userId, items: cartItems }, { onConflict: "user_id" });

    // if (data) {
    //   console.log(data);
    // }
    if (error) {
      console.log(error);
      // throw new Error("Error saving cart items to DB");
    }
  }
}
