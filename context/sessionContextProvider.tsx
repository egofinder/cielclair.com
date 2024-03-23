"use client";

import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

interface SessionContext {
  session: Session | null;
  setSession: (session: Session) => void;
}

const SessionContext = createContext<SessionContext | null>(null);

const useSessionContext = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context;
};

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const supabase = createClient();

    // 로그인 상태가 변경될 때마다 사용자 정보를 업데이트합니다.
    const subscription = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          setSession(session);
        } else if (event === "SIGNED_OUT") {
          setSession(null);
          console.log("Signed out");
        } else {
          console.log("event: ", event);
        }
      },
    );
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      subscription.data.subscription.unsubscribe();
    };
  });

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, useSessionContext };
