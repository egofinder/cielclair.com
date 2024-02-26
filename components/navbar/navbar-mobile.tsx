import { cn } from "@/lib/utils";
import Image from "next/image";

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
}

const NavbarMobile = ({ isOpen }: NavbarMobileProps) => {
  return (
    <div
      className={cn("sticky inset-0 z-40 flex transition duration-500", {
        "hidden opacity-0": !isOpen,
        "opacity-100": isOpen,
      })}
    >
      <div
        className={"h-[100vh] w-[75%] bg-white pl-[100px] pt-[150px] text-sm"}
      >
        <ul className="flex flex-col gap-2">
          {componentsA.map((component) => (
            <li key={component.title}>{component.title}</li>
          ))}
          {componentsB.map((component) => (
            <li key={component.title}>{component.title}</li>
          ))}
        </ul>
      </div>
      <div className="h-[100vh] w-[25%] backdrop-blur-lg" />
    </div>
  );
};

export default NavbarMobile;
