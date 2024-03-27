"use client";

import Image from "next/image";
import PlusMinusButton from "@/components/order/cart/plus-minus-button";
import { formatPrice } from "@/lib/utils";
import { RxCross1 } from "react-icons/rx";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { CartItem } from "@/type/CartItem";
import useCart from "@/hooks/useCart";

interface ItemCardProps {
  product: CartItem | any;
  editable?: boolean;
}

const ItemCard = ({ product, editable = true }: ItemCardProps) => {
  const router = useRouter();

  const { id, name, etc, price, thumbnail, quantity, size } = product;
  const itemTotalPrice = price * quantity;
  const { removeItem } = useCart();

  return (
    <>
      <div className="flex h-fit w-full flex-row justify-between py-4 text-sm">
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
          <div
            className="cursor-pointer font-semibold"
            onClick={() => router.push(`/product/${id}`)}
          >
            {name}
          </div>
          <div>옵션: {size}</div>
          <div className="">{etc}</div>
          <div className="font-bold">{formatPrice(price)}</div>

          {editable ? (
            <div>
              <PlusMinusButton basketItem={product} />
            </div>
          ) : null}
        </div>
        <div className="flex w-fit flex-col items-end">
          {editable ? (
            <RxCross1
              size={15}
              className="cursor-pointer"
              onClick={() => removeItem(product)}
            />
          ) : null}
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
