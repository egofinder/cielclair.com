import { cn } from "@/lib/utils";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";

const componentsA: { title: string; href: string; description: string }[] = [
  {
    title: "2024 봄 컬렉션",
    href: "",
    description: "",
  },
  {
    title: "2024 주얼리 컬렉션",
    href: "",
    description: "",
  },
  {
    title: "모두보기",
    href: "",
    description: "",
  },
  {
    title: "여성",
    href: "",
    description: "",
  },
  {
    title: "남성",
    href: "",
    description: "",
  },
  {
    title: "주얼리",
    href: "",
    description: "",
  },
  {
    title: "가방",
    href: "",
    description: "",
  },
  {
    title: "홈",
    href: "",
    description: "",
  },
  {
    title: "잡화",
    href: "",
    description: "",
  },
];
const componentsB: { title: string; href: string; description: string }[] = [
  {
    title: "컬렉션",
    href: "",
    description: "",
  },
  {
    title: "브랜드 소개",
    href: "",
    description: "",
  },
  {
    title: "정보",
    href: "",
    description: "",
  },
  {
    title: "공지사항",
    href: "",
    description: "",
  },
  {
    title: "매장안내",
    href: "",
    description: "",
  },
  {
    title: "1:1 문의",
    href: "",
    description: "",
  },
];

interface NavbarMobileProps {
  isOpen: boolean;
  isLogin: boolean;
  signout: () => Promise<void>;
}

const NavbarMobile = ({ isOpen, isLogin, signout }: NavbarMobileProps) => {
  return (
    <div
      className={cn(
        "sticky inset-0 z-40 flex h-[100vh] flex-auto transition duration-500 md:hidden",
        {
          "hidden opacity-0": !isOpen,
          "opacity-100": isOpen,
        },
      )}
    >
      <div
        className={
          "flex w-[75%] flex-row bg-white pl-[30px] pt-[115px] text-sm"
        }
      >
        <ul className="flex flex-1 flex-col gap-2">
          {componentsA.map((component) => (
            <li key={component.title}>{component.title}</li>
          ))}
          {componentsB.map((component) => (
            <li key={component.title}>{component.title}</li>
          ))}
          <div className="m-8 flex justify-end gap-8">
            <Link className={cn({ hidden: isLogin })} href="/auth/login">
              로그인
            </Link>
            <button className={cn({ hidden: !isLogin })} onClick={signout}>
              로그아웃
            </button>
            <div>검색</div>
          </div>
        </ul>
      </div>
      <div className="w-[25%] backdrop-blur-lg" />
    </div>
  );
};

export default NavbarMobile;
