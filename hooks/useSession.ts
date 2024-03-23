"use client";

import { useSessionContext } from "@/context/sessionContextProvider";
import { createClient } from "@/lib/supabase/client";
import useCart from "./useCart";
import { useRouter } from "next/navigation";

const useSession = () => {
  const router = useRouter();
  const { session } = useSessionContext();
  const { clearCart } = useCart();

  const login = async (email: string, password: string) => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data) {
      router.push("/");
    }
  };

  const logout = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      clearCart();
      router.push("/");
    }
  };

  return {
    session,
    login,
    logout,
  };
};

export default useSession;
