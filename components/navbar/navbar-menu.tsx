"use client";

import Logo from "./logo";
import { cn } from "@/lib/utils";

interface NavbarMenuProps {
  isOpen: boolean;
  isHomePage: boolean;
  toggle: () => void;
}

export default function NavbarMenu({
  isOpen,
  isHomePage,
  toggle,
}: NavbarMenuProps) {
  return (
    <nav
      className={cn("z-40 text-sm transition duration-500", {
        "text-white": !isOpen,
        "text-black": isOpen || !isHomePage,
      })}
    >
      <ul className="flex flex-row justify-between">
        <li className="w-[20%] flex-auto cursor-pointer" onClick={toggle}>
          <div>메뉴</div>
        </li>
        <li className="w-[60%] flex-auto">
          <Logo />
        </li>
        <li className="flex w-[20%] flex-auto flex-row justify-end gap-5">
          <div className="hidden md:block md:min-w-fit">로그인</div>
          <div className="hidden md:block md:min-w-fit">검색</div>
          <div>장바구니</div>
        </li>
      </ul>
    </nav>
  );
}
