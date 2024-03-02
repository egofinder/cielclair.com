"use client";

import { useEffect, useState } from "react";
import NavbarDesktop from "./navbar-desktop";
import useWindowSize from "@/hooks/useWidnowsSize";
import NavbarMobile from "./navbar-mobile";
import { cn } from "@/lib/utils";

import Logo from "./logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const params = usePathname();
  const isHomePage = params === "/";
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [mobile, setMobile] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setMobile(width < 768);
    if (!mobile) setIsOpen(false);
  }, [width, mobile]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    document.body.style.overflowX = "hidden"; // Add this line

    // cleanup function
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "auto"; // Add this line
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn(
          "container sticky inset-0 z-50 h-[90px] px-5 pt-5 bg-blend-normal",
          {
            "bg-white/5": isOpen,
            "bg-white/20": mobile,
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
              <div className="hidden md:block">로그인</div>
              <div className="hidden md:block">검색</div>
              <div>
                <Link href="/order/basket">장바구니</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <NavbarDesktop isOpen={isOpen && !mobile} />
      <NavbarMobile isOpen={isOpen && mobile} />
    </>
  );
};

export default Navbar;
