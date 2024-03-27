"use server";

import { Stripe } from "stripe";
import { createClient } from "@/lib/supabase/server";
import { CartItem } from "@/type/CartItem";

export async function createEmbededCheckoutSession(
  origin: string,
  cartItems: CartItem[],
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const userEmail = user?.email;
  let lineItems: { price: string; quantity: number }[] = [];

  cartItems.map((item: CartItem) => {
    lineItems.push({
      price: item?.price_id,
      quantity: item.quantity,
    });
  });

  try {
    // Create Checkout Sessions from body params.
    const stripeSession = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: lineItems,
      customer_email: userEmail,
      mode: "payment",
      return_url: `${origin}/order/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    });

    return { clientSecret: stripeSession.client_secret };
  } catch (err) {
    console.log(err);
  }
}

export async function getCheckoutSession(sessionId: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
    return {
      customer_email: stripeSession.customer_email,
      payment_intent_id: stripeSession.payment_intent,
      status: stripeSession.status,
      total_amount: stripeSession.amount_total,
    };
  } catch (err) {
    throw new Error("Error fetching session");
  }
}
