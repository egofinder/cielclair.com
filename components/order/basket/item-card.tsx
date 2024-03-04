"use client";

import Image from "next/image";
import PlusMinusButton from "@/components/order/basket/plus-minus-button";
import useBasket from "@/hooks/useBasket";
import { formatPrice } from "@/lib/utils";
import { RxCross1 } from "react-icons/rx";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/type/product";
import { useRouter } from "next/navigation";

interface ItemCardProps {
  product: {
    id: Product["id"];
    name: Product["name"];
    price: Product["price"];
    etc: Product["etc"];
    thumbnail: Product["thumbnail"];
    quantity: number;
  };
}

const ItemCard = ({ product }: ItemCardProps) => {
  const router = useRouter();
  const { id, thumbnail, name, etc, price, quantity } = product;
  const itemTotalPrice = price * quantity;
  const { removeFromBasket } = useBasket();

  return (
    <>
      <div className="flex h-fit w-full flex-row justify-between text-sm">
        <div
          className="relative aspect-[3/4] h-[100px] cursor-pointer"
          onClick={() => router.push(`/product/${id}`)}
        >
          <Image
            className="object-cover object-center"
            fill
            src={thumbnail[0]}
            alt={name}
          />
        </div>
        <div className="flex w-full flex-col items-start gap-1 pl-4">
          <div className="font-semibold">{name}</div>
          <div className="">{etc}</div>
          <div className="font-bold">{formatPrice(price)}</div>
          <div>
            <PlusMinusButton productId={id} quantity={quantity} />
          </div>
        </div>
        <div className="flex w-fit flex-col items-end">
          <RxCross1
            size={15}
            className="cursor-pointer"
            onClick={() => removeFromBasket(id)}
          />
          <div className="mt-auto whitespace-nowrap text-end text-sm font-semibold">
            {formatPrice(itemTotalPrice)}
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default ItemCard;
