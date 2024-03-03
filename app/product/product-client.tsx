"use client";
import StatusBadge from "@/components/product/status-badge";
import { formatPrice } from "@/lib/utils";
import { ProductStatus } from "@/type/enums";
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
      {products.map((product) => {
        const { id, thumbnail, name, etc, price, status } = product;
        return (
          <div
            className="aspect-[3/4] w-full min-w-[250px] max-w-[500px] cursor-pointer p-4"
            key={id}
            onClick={() => handleClick(id)}
          >
            <div className="relative aspect-[3/4] bg-white">
              <Image
                src={thumbnail[0]}
                alt={name}
                fill
                className="object-contain transition-opacity duration-200 hover:opacity-0"
              />
              <Image
                src={thumbnail[1]}
                alt={name}
                fill
                className="bg-white object-contain opacity-0 transition-opacity duration-200 hover:opacity-100"
              />

              {status !== ProductStatus.InStock ? (
                <StatusBadge status={status} position="inset-2" />
              ) : null}
            </div>
            <div className="flex flex-col gap-3 p-4 text-sm">
              <p className="">{name}</p>
              <p className="">USD {formatPrice(price)}</p>
              <p className="font-semibold">{etc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductClient;
