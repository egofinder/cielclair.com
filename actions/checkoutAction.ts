"use server";

import { Stripe } from "stripe";
import { createClient } from "@/lib/supabase/server";
import { BasketItem } from "@/type/basket-item";

export async function createEmbededCheckoutSession(
  origin: string,
  basketItems: BasketItem[],
) {
  const supabase = createClient();
  const { data: session } = await supabase.auth.getSession();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const userEmail = session.session?.user.email!;
  let lineItems: { price: string; quantity: number }[] = [];

  basketItems.map((item: BasketItem) => {
    lineItems.push({
      price: item?.price_id!,
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
      status: stripeSession.status,
    };
  } catch (err) {
    console.log(err);
  }
}
