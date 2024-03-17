"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/type/product";
import { ProductStatus } from "@/type/enums";
import { formatPrice } from "@/lib/utils";
import StatusBadge from "@/components/product/status-badge";

interface ProductProps {
  products: Product[];
}

const ProductClient = ({ products }: ProductProps) => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { id, thumbnail, name, etc, price, status } = product;
        return (
          <Link
            className="w-full cursor-pointer p-4"
            key={id}
            href={`/product/${id}`}
          >
            <div
              className="relative aspect-[3/4]"
              style={{
                backgroundImage: `url(${thumbnail[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Image
                src={thumbnail[0]}
                alt={name}
                fill
                className="object-cover transition-opacity duration-200 hover:opacity-0"
              />
              {status !== ProductStatus.InStock ? (
                <StatusBadge status={status} position="inset-2" />
              ) : null}
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <p className="">{name}</p>
              <p className="">USD {formatPrice(price)}</p>
              <p className="font-semibold">{etc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductClient;
