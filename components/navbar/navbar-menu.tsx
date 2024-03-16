"use client";

import { use, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { signout } from "@/actions/authAction";
import { BasketContext } from "@/context/basketContext";
import Logo from "./logo";
import Search from "./search";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

interface NavbarMenuProps {
  isLogin: boolean;
}

export default function NavbarMenu({ isLogin }: NavbarMenuProps) {
  const router = useRouter();
  const params = usePathname();

  const isHomePage = params === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const searchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSignOut = async () => {
    await signout();
    router.refresh();
  };

  const basketContext = useContext(BasketContext);

  if (!basketContext) {
    throw new Error("BasketContext not found");
  }

  const { numberOfItems, updateLoginStatus } = basketContext;

  useEffect(() => {
    updateLoginStatus(isLogin);
  }, [isLogin, updateLoginStatus]);

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
                <Link className={cn({ hidden: isLogin })} href="/auth/login">
                  로그인
                </Link>
                <button
                  className={cn({ hidden: !isLogin })}
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
                <Link href="/order/basket">
                  장바구니 {numberOfItems > 0 ? `(${numberOfItems})` : null}
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <NavbarDesktop isOpen={isOpen} />
      <NavbarMobile isOpen={isOpen} isLogin={isLogin} signout={handleSignOut} />
      <Search isOpen={isSearchOpen} closeSearch={searchToggle} />
    </>
  );
}
