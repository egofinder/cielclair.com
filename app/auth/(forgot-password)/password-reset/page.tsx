"use client";

import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PasswordResetPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sucessMessage, setSucessMessage] = useState("");

  const handleButton = async () => {
    const supabase = createClient();
    setIsLoading(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/password-update`,
    });
    setIsLoading(false);

    if (error) {
      setSucessMessage("비밀번호 재설정 메일을 보내는데 실패했습니다.");
    } else {
      setSucessMessage("비밀번호 재설정 메일을 보냈습니다.");
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto flex h-[50vh] flex-col items-center justify-center px-6 py-8 md:h-[70vh]">
        <div className="w-full bg-white sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4">
            <form className="space-y-4">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border-b border-black pb-2 text-sm text-black placeholder-black focus:outline-none"
                placeholder="아이디"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div>{sucessMessage}</div>
              <button
                formAction={handleButton}
                disabled={isLoading}
                className={cn(
                  "w-full border border-black py-4 text-center text-base font-normal text-black",
                  {
                    "bg-gray-700": isLoading,
                  },
                )}
              >
                비밀번호 재설정 메일 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;
