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

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div
      className={cn(
        "absolute top-0 z-40 w-full transition-opacity ease-in-out",
        {
          "hidden opacity-0": !isOpen,
          "block opacity-100": isOpen,
        },
      )}
    >
      <div className="w-full">
        <div
          className={
            "grid h-[100vh] w-[75%] grid-cols-2 bg-white px-[50px] pt-[110px] text-sm  md:h-[550px] md:w-full md:grid-cols-3 md:px-[150px]"
          }
        >
          <ul className="flex flex-col gap-2">
            {componentsA.map((component) => (
              <li key={component.title}>{component.title}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            {componentsB.map((component) => (
              <li key={component.title}>{component.title}</li>
            ))}
          </ul>

          <div className="block md:hidden" />
          <div className="m-auto md:m-0">
            <div className="hidden w-full items-end md:flex md:flex-col md:items-start md:justify-center">
              <Image
                src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
                width={250}
                height={250}
              />
              <div className="mb-2 mt-5">잡화</div>
              <button>바로가기</button>
            </div>
            <div className="flex w-full items-end justify-end gap-4 md:hidden">
              <div className="">로그인</div>
              <div className="">검색</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:h-[calc(100vh-550px)] md:bg-white/30 md:backdrop-blur-xl"></div>
      </div>
    </div>
  );
};

export default Sidebar;
