"use client";

import Logo from "./logo";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function Navbar({ isOpen, toggle }: NavbarProps) {
  return (
    <div className="absolute z-50 h-[110px] w-full bg-transparent pt-8">
      <nav
        className={cn("container mx-auto text-sm transition", {
          "text-white": !isOpen,
          "text-black": isOpen,
        })}
      >
        <ul className="flex flex-row justify-between">
          <li className="w-[20%] md:w-[30%]">
            <div className="cursor-pointer" onClick={toggle}>
              메뉴
            </div>
          </li>
          <li className="w-[60%] md:w-[40%]">
            <Logo />
          </li>
          <li className="flex w-[20%] flex-row justify-end gap-8 md:w-[30%] ">
            <div className="hidden md:block">로그인</div>
            <div className="hidden md:block">검색</div>
            <div>장바구니</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
