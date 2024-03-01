"use client";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/type/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductProps {
  products: Product[];
}

const ProductClient = ({ products }: ProductProps) => {
  const router = useRouter();
  const handleClick = (index: string) => {
    router.push(`/product/${index}`);
  };
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          className="w-full min-w-[250px] max-w-[500px] cursor-pointer p-4"
          key={product.id}
          onClick={() => handleClick(product.id)}
        >
          <div className="relative mb-4 aspect-[3/4]">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={500}
              height={500}
              className="absolute inset-0 h-full object-cover object-center transition-opacity duration-200 hover:opacity-0"
            />
            <Image
              src={product.images[1]}
              alt={product.name}
              width={500}
              height={500}
              className="absolute inset-0 h-full object-cover object-center opacity-0 transition-opacity duration-200 hover:opacity-100"
            />
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <p className="">{product.name}</p>
            <p className="">USD {formatPrice(product.price)}</p>
            <p className="font-semibold">{product.etc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductClient;
