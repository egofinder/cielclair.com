"use client";

import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";
import { useState } from "react";

const PasswordUpdatePage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const supabase = createClient();
    const { data: user } = await supabase.auth.updateUser({
      password: password,
    });
    redirect("/");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto flex h-[50vh] flex-col items-center justify-center px-6 py-8 md:h-[70vh]">
        <div className="w-full bg-white sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4">
            <form className="space-y-4">
              <div className="flex justify-between border-b border-black text-sm font-normal text-black">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className="w-[90%] placeholder-black focus:outline-none"
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-[10%] hover:text-gray-500"
                >
                  {showPassword ? "숨기기" : "보이기"}
                </button>
              </div>
              <div className="flex justify-between border-b border-black text-sm font-normal text-black">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-[90%] placeholder-black focus:outline-none"
                  placeholder="비밀번호 확인"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-[10%] hover:text-gray-500"
                >
                  {showPassword ? "숨기기" : "보이기"}
                </button>
              </div>

              <button
                formAction={handleUpdatePassword}
                className="w-full border border-black py-4 text-center text-base font-normal text-black"
              >
                비밀번호 재설정
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdatePage;
