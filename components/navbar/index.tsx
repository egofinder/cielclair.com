"use client";

import { useEffect, useState } from "react";
import NavbarDesktop from "./navbar-desktop";
import useWindowSize from "@/hooks/useWidnowsSize";
import NavbarMobile from "./navbar-mobile";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { width } = useWindowSize();
  let mobile = false;

  if (width < 768) {
    mobile = true;
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={cn("container sticky inset-0 z-50 bg-transparent p-8", {
          "bg-white": isOpen,
        })}
      >
        <nav
          className={cn("w-full text-sm transition duration-500", {
            "text-white": !isOpen,
            "text-black": isOpen,
          })}
        >
          <ul className="flex flex-row justify-between">
            <li className="flex-1 cursor-pointer" onClick={toggle}>
              <div>메뉴</div>
            </li>
            <li className="min-w-fit flex-1">
              <Logo />
            </li>
            <li className="flex flex-1 flex-row justify-end gap-8">
              <div className="hidden md:block md:min-w-fit">로그인</div>
              <div className="hidden md:block md:min-w-fit">검색</div>
              <div>장바구니</div>
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
