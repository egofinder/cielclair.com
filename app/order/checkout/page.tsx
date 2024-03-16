"use client";

import { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { createEmbededCheckoutSession } from "@/actions/checkoutAction";
import { BasketContext } from "@/context/basketContext";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function CheckoutPage() {
  const basketContext = useContext(BasketContext);
  if (!basketContext) throw new Error("BasketContext not found");
  const { basketItems } = basketContext;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      const response = await createEmbededCheckoutSession(
        window.location.origin,
        basketItems,
      );
      setClientSecret(response?.clientSecret!);
    };
    fetchCheckoutSession();
  }, [basketItems]);

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
