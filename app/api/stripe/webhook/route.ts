import { createOrderHistory } from "@/actions/order-action";
import { log } from "@/lib/utils";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  return new Response("This is a Stripe Webhook endpoint");
}

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  const relevantEvents = new Set(["checkout.session.completed"]);
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case "checkout.session.completed":
          const paymentIntentId = event.data.object.payment_intent as string;
          const userEmail = event.data.object.customer_email as string;
          await createOrderHistory(userEmail, paymentIntentId);
          log("Checkout session completed event received: ", paymentIntentId);
          break;
        default:
          throw new Error("Unhandled relevant event!");
      }
    } catch (error) {
      console.log(error);
      return new Response("Webhook handler failed. View logs.", {
        status: 400,
      });
    }
  }
  return new Response(JSON.stringify({ received: true }));
}
