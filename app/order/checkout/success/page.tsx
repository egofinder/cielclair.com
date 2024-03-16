"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { getCheckoutSession } from "@/actions/checkoutAction";

type SessionState = "open" | "complete" | "expired";

export default function SuccessPage() {
  const [status, setStatus] = useState<SessionState>();
  const [customerEmail, setCustomerEmail] = useState("");
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      if (sessionId) {
        const response = await getCheckoutSession(sessionId);
        setStatus(response?.status as SessionState);
        setCustomerEmail(response?.customer_email as string);
      }
    };
    fetchSession();
    console.log(status);
    console.log(customerEmail);
  }, [sessionId, status, customerEmail]);

  //   if (status === "open") {
  //     return redirect("/");
  //   }

  if (status === "complete") {
    return (
      <section id="success" className="container">
        <div className="flex items-center justify-center">
          <div className="w-[50%] text-center">
            <p>We appreciate your business!</p>
            <p>A confirmation email will be sent to {customerEmail}.</p>
            <p>
              If you have any questions, please email{" "}
              <a href="mailto:orders@example.com">orders@example.com</a>.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
