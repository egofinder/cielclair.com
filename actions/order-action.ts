"use server";

import { createClient } from "@/lib/supabase/server";
import { log } from "@/lib/utils";
import { CartItem } from "@/type/CartItem";

export async function createOrderHistory({
  userId,
  paymentIntent,
  items,
  status,
}: {
  userId: string;
  paymentIntent: string;
  items: CartItem[];
  status: string;
}) {
  const supabase = createClient();

  const data = {
    user_id: userId,
    payment_intent: paymentIntent,
    items: items,
    status: status,
  };

  try {
    const { data: response, error } = await supabase
      .from("orders")
      .insert(data)
      .select();
    log("Data Inserted: ", response);
  } catch (error) {
    log("Data Insert failed: ", error);
  }
}
