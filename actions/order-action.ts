"use server";

import { createClient } from "@/lib/supabase/server";
import { log } from "@/lib/utils";

export async function createOrderHistory(email: string, paymentIntent: string) {
  const supabase = createClient();
  const userEmail = email;

  //Get customer id from email
  const { data: customer, error } = await supabase
    .from("profiles")
    .select("user_id, email")
    .eq("email", userEmail)
    .single();
  const userId = customer?.user_id;

  log("Customer: ", customer);
  log("Error: ", error);
  log("User ID: ", userId);

  const data = {
    user_id: userId,
    payment_intent: paymentIntent,
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
