"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCheckoutSession } from "@/actions/checkoutAction";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { FaInstagram } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";

type SessionState = "open" | "complete" | "expired";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<SessionState>();
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      if (sessionId) {
        const response = await getCheckoutSession(sessionId);
        setStatus(response?.status as SessionState);
        setCustomerEmail(response?.customer_email as string);
      }
    };
    fetchSession();
  });

  //   if (status === "open") {
  //     return redirect("/");
  //   }

  if (status === "complete") {
    return (
      <div className="container flex h-[89vh] items-center justify-center md:h-[calc(100vh-90px)]">
        <div className="w-[95%] text-center md:w-[70%]">
          <div className="flex items-center justify-evenly text-5xl">
            <HiOutlineShoppingBag />
          </div>
          <div className="m-5 text-xl md:text-[5rem]">
            <p>Thank you!</p>
          </div>
          <div className="m-5">
            <p>
              A confirmation email will be sent to{" "}
              <span className="font-semibold text-blue-400">
                {customerEmail}
              </span>
              .
            </p>
            <p>
              We will send you a tracking number when is ready to be shipped.
            </p>
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
      </div>
    );
  }
}
