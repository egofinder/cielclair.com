"use client";

import Logo from "./logo";
import { cn } from "@/lib/utils";

interface NavbarMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function NavbarMenu({ isOpen, toggle }: NavbarMenuProps) {
  return (
    <div className="sticky inset-0 z-50 w-full bg-transparent p-8">
      <nav
        className={cn(
          "container mx-auto px-0 text-sm transition duration-500",
          {
            "text-white": !isOpen,
            "text-black": isOpen,
          },
        )}
      >
        <ul className="flex flex-row justify-between">
          <li className="flex-1 flex-shrink cursor-pointer" onClick={toggle}>
            <div>메뉴</div>
          </li>
          <li className="min-w-fit flex-1">
            <Logo />
          </li>
          <li className="flex flex-1 flex-shrink flex-row justify-end gap-8">
            <div className="hidden md:block md:min-w-fit">로그인</div>
            <div className="hidden md:block md:min-w-fit">검색</div>
            <div>장바구니</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
