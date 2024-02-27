"use client";

import { randomUUID } from "crypto";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const router = useRouter();
  const handleClick = (index: string) => {
    router.push(`/product/${index}`);
  };

  const products = [
    {
      id: "1232-2223-1111",
      name: "칼라리스 싱글-브레스티드 올 블레이저",
      description: "2차 - 3월 28일부터 순차 출고",
      price: 2890,
      images: ["/product/sample.jpeg", "/product/sample-2.jpeg"],
    },
    {
      id: "22222-23223-2232",
      name: "칼라리스 싱글-브레스티드 올 블레이저2",
      description: "2차 - 3월 28일부터 순차 출고",
      price: 1680,
      images: ["/product/sample.jpeg", "/product/sample-2.jpeg"],
    },
    {
      id: "3982392-290222-231",
      name: "칼라리스 싱글-브레스티드 올 블레이저3",
      description: "2차 - 3월 28일부터 순차 출고",
      price: 1290,
      images: ["/product/sample.jpeg", "/product/sample-2.jpeg"],
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {products.map((product) => (
          <div
            className="p-4"
            key={product.id}
            onClick={() => handleClick(product.id)}
          >
            <div className="relative mb-4 h-[500px] w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={500}
                height={500}
                className="absolute inset-0 h-full object-cover transition-opacity duration-200 hover:opacity-0"
              />
              <Image
                src={product.images[1]}
                alt={product.name}
                width={500}
                height={500}
                className="absolute inset-0 h-full object-cover opacity-0 transition-opacity duration-200 hover:opacity-100"
              />
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p className="">{product.name}</p>
              <p className="">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </p>
              <p className="font-semibold">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
