"use client";

import Image from "next/image";
import PlusMinusButton from "@/components/order/basket/plus-minus-button";
import useBasket from "@/hooks/useBasket";
import { formatPrice } from "@/lib/utils";
import { RxCross1 } from "react-icons/rx";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";
import { BasketItem } from "@/type/basket-item";

interface ItemCardProps {
  product: BasketItem;
}

const ItemCard = ({ product }: ItemCardProps) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (session) {
        setIsLogin(true);
      }
    };
    fetchSession();
  }, [supabase]);

  const { id, name, etc, price, thumbnail, quantity, size } = product;
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
          <div
            className="cursor-pointer font-semibold"
            onClick={() => router.push(`/product/${id}`)}
          >
            {name}
          </div>
          <div>옵션: {size}</div>
          <div className="">{etc}</div>
          <div className="font-bold">{formatPrice(price)}</div>
          <div>
            <PlusMinusButton basketItem={product} isLogin={isLogin} />
          </div>
        </div>
        <div className="flex w-fit flex-col items-end">
          <RxCross1
            size={15}
            className="cursor-pointer"
            onClick={() => removeFromBasket(product, isLogin)}
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
