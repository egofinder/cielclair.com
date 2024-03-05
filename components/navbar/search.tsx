"use client";

import { IoMdSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import { useState } from "react";

interface SearchProps {
  isOpen: boolean;
  closeSearch: () => void;
}

const Search = ({ isOpen, closeSearch }: SearchProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/product?category=${searchValue}`);
  };

  return (
    <div
      className={cn(
        "container sticky inset-0 z-50 h-[100vh] w-[100vw] bg-black/30 bg-blend-normal backdrop-blur-3xl transition duration-500",
        { "opacity-100": isOpen, "invisible h-0 w-0 opacity-0": !isOpen },
      )}
      onClick={closeSearch}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-[50%] flex-row items-center justify-between px-3">
          <input
            type="text"
            className="h-full w-full border-b-2 bg-transparent text-xl text-white placeholder-white focus:border-b-2  focus:outline-none md:text-[50px]"
            placeholder="검색어를 입력하세요"
            value={searchValue}
            onChange={handleInputChange}
            onClick={(e) => e.stopPropagation()}
          ></input>
          <IoMdSearch
            className="cursor-pointer text-4xl md:text-[80px]"
            color="rgb(0 0 0 / 0.6)"
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
