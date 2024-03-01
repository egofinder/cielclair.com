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

interface NavbarDesktopProps {
  isOpen: boolean;
}

const NavbarDesktop = ({ isOpen }: NavbarDesktopProps) => {
  return (
    <div
      className={cn("container sticky inset-0 z-40 transition duration-500", {
        "hidden opacity-0": !isOpen,
        "opacity-100": isOpen,
      })}
    >
      <div
        className={
          "item flex h-[650px] justify-center bg-white px-[10vw] py-[115px] text-sm"
        }
      >
        <ul className="flex w-[25%] flex-col gap-2">
          {componentsA.map((component) => (
            <li key={component.title}>{component.title}</li>
          ))}
        </ul>
        <ul className="flex w-[25%] flex-col gap-2">
          {componentsB.map((component) => (
            <li key={component.title}>{component.title}</li>
          ))}
        </ul>
        <div className="relative flex h-full w-[50%] flex-col gap-2">
          <div className="bg-sky-40 h-[90%]">
            <Image
              src="/product/model-1.png"
              alt="Image"
              className="h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="h-[5%]">여성</div>
          <div className="h-[5%]">바로가기</div>
        </div>
      </div>

      <div className="h-[calc(100vh-650px)]  bg-white/30 backdrop-blur-xl" />
    </div>
  );
};

export default NavbarDesktop;
