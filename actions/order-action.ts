"use server";

import { createClient } from "@/lib/supabase/server";
import { log } from "@/lib/utils";
import { CartItem } from "@/type/CartItem";
import Stripe from "stripe";

export async function createOrderHistory({
  userId,
  paymentIntent,
  amount,
  items,
  status,
}: {
  userId: string;
  paymentIntent: string;
  amount: number;
  items: CartItem[];
  status: string;
}) {
  const supabase = createClient();

  const data = {
    user_id: userId,
    payment_intent: paymentIntent,
    amount: amount,
    items: items,
    status: status,
  };

  try {
    const { data: response, error } = await supabase
      .from("orders")
      .upsert(data, { onConflict: "payment_intent" })
      .select();
    log("Data Inserted: ", response);
  } catch (error) {
    log("Data Insert failed: ", error);
  }
}

export async function getOrderHistory(userId: string) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", userId);
    return data;
  } catch (error) {
    log("Data Fetch failed: ", error);
  }
}

export async function getOrderDetail(orderId: string) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("items")
      .eq("id", orderId)
      .single();
    return data;
  } catch (error) {
    log("Data Fetch failed: ", error);
  }
}
