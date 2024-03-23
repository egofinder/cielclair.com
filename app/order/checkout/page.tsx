"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { createEmbededCheckoutSession } from "@/actions/checkout-action";
import useCart from "@/hooks/useCart";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      const response = await createEmbededCheckoutSession(
        window.location.origin,
        cartItems,
      );
      setClientSecret(response?.clientSecret!);
    };
    fetchCheckoutSession();
  });

  return (
    <div className="container h-fit">
      <div id="checkout">
        {clientSecret && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    </div>
  );
}
