"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCheckoutSession } from "@/actions/checkout-action";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { cn } from "@/lib/utils";
import useCartItems from "@/hooks/useCartItems";
import useSession from "@/hooks/useSession";
import { createOrderHistory } from "@/actions/order-action";

type SessionState = "open" | "complete" | "expired";

function SuccessPageWithSession() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const [customerEmail, setCustomerEmail] = useState("customer@example.com");
  const [status, setStatus] = useState<SessionState | null>();

  const { session } = useSession();
  const userId = session?.user?.id;

  const { cartItems, clearCart } = useCartItems();

  useEffect(() => {
    const fetchSession = async (sessionId: string) => {
      try {
        const response = await getCheckoutSession(sessionId);
        setStatus(response?.status as SessionState);
        setCustomerEmail(response?.customer_email as string);
      } catch (error) {
        console.error(error);
      }
    };

    if (sessionId) {
      fetchSession(sessionId);
    }
  }, [sessionId]);

  //TODO: 이 부분이 이해가 너무 안됨. 왜 이렇게 하면 되고 다른식이면 안되는지.
  useEffect(() => {
    const insertOrder = async () => {
      if (userId && sessionId && status) {
        const data = {
          userId: userId,
          paymentIntent: sessionId,
          items: cartItems,
          status: status,
        };
        await createOrderHistory(data);
      }
    };
    insertOrder();

    if (status === "complete") {
      // clearCart();
    }

    if (status === "open") {
      console.log("Open Stripe Session Status: ", status);
    }
  }, [status]);
  ////////////////////////////////////////////////

  return (
    <div className="container relative flex h-[89vh] items-center justify-center md:h-[calc(100vh-90px)]">
      {/* <button onClick={clearCart}>Clear Cart</button> */}
      <div
        className={cn("w-[95%] text-center opacity-20 md:w-[70%]", {
          "opacity-100": status,
        })}
      >
        <div className="flex items-center justify-evenly text-5xl">
          <HiOutlineShoppingBag />
        </div>
        <div className="m-5 text-xl md:text-[5rem]">
          <p>Thank you!</p>
        </div>
        <div className="m-5">
          <p>
            A confirmation email will be sent to{" "}
            <span className="font-semibold text-blue-400">{customerEmail}</span>
            .
          </p>
          <p>We will send you a tracking number when is ready to be shipped.</p>
          <p>Since you&apos;re here, join our list for discounts!</p>
          <div className="m-5 flex items-center justify-center gap-5">
            <input className="w-60 border border-solid p-2"></input>
            <Button
              className="hover:ring-opacity bg-gradient-to-r from-violet-300 to-pink-300 p-5  text-base font-bold text-white hover:text-white hover:ring-2 hover:ring-violet-300 hover:ring-offset-1 hover:ring-offset-white"
              variant="outline"
            >
              Subscribe
            </Button>
          </div>
          <p>
            If you have any questions, please email{" "}
            <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
        </div>
        <div className="m-5 pt-20">
          <div className="flex justify-center gap-5">
            <div>Let&apos;s Be Friend!</div>
            <div className="flex gap-1 text-2xl">
              <FaInstagram />
              <FaXTwitter />
              <PiTiktokLogo />
              <RiKakaoTalkLine />
            </div>
          </div>
        </div>
      </div>
      {/* Loading Spinner */}
      <div
        role="status"
        className={cn(
          "absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2",
          {
            hidden: status,
          },
        )}
      >
        <svg
          aria-hidden="true"
          className="h-16 w-16 animate-spin fill-violet-400 text-gray-200 duration-1000 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessPageWithSession />
    </Suspense>
  );
}
