"use client";

import Logo from "./logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { signout } from "@/actions/authAction";
import { useContext, useState } from "react";
import Search from "./search";
import { usePathname, useRouter } from "next/navigation";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";
import type { User } from "@supabase/supabase-js";
import { BasketContext } from "@/context/basketContext";

interface NavbarMenuProps {
  user: User | null;
}

export default function NavbarMenu({ user }: NavbarMenuProps) {
  const basketContext = useContext(BasketContext);
  if (!basketContext) {
    throw new Error("BasketContext not found");
  }

  const { numberOfItems } = basketContext;

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const params = usePathname();
  const isHomePage = params === "/";
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleSignOut = async () => {
    await signout();
    router.refresh();
  };

  return (
    <>
      <div
        className={cn(
          "container sticky inset-0 z-50 h-[90px] bg-white/20 px-5 pt-5 bg-blend-normal md:bg-transparent",
          {
            "bg-white/5": isOpen,
          },
        )}
      >
        <nav
          className={cn("text-sm transition duration-500", {
            "text-white": !isOpen,
            "text-black": isOpen || !isHomePage,
          })}
        >
          <ul className="flex flex-row justify-between">
            <li className="w-[25%] flex-auto cursor-pointer" onClick={toggle}>
              <div>메뉴</div>
            </li>
            <li className="w-[60%] flex-auto">
              <Logo />
            </li>
            <li className="flex w-[25%] flex-auto flex-row justify-end gap-5">
              <div className="hidden md:block">
                <Link className={cn({ hidden: user })} href="/auth/login">
                  로그인
                </Link>
                <button
                  className={cn({ hidden: !user })}
                  onClick={handleSignOut}
                >
                  로그아웃
                </button>
              </div>
              <div
                className="hidden cursor-pointer md:block"
                onClick={searchToggle}
              >
                검색
              </div>
              <div>
                <Link href="/order/basket">장바구니 ({numberOfItems})</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <NavbarDesktop isOpen={isOpen} />
      <NavbarMobile isOpen={isOpen} user={user} signout={handleSignOut} />
      <Search isOpen={isSearchOpen} closeSearch={searchToggle} />
    </>
  );
}
