import Image from "next/image";
import PlusMinusButton from "@/components/order/basket/plus-minus-button";
import useCart from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { RxCross1 } from "react-icons/rx";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/type/product";

interface ItemCardProps {
  product: Product;
}

const ItemCard = ({ product }: ItemCardProps) => {
  const { id, images, name, etc, price } = product;
  const { removeFromCart } = useCart();

  return (
    <>
      <div className="flex h-fit w-full flex-row justify-between text-sm">
        <div className="relative aspect-[3/4] h-[100px]">
          <Image
            className="object-cover object-center"
            fill
            src={images[0]}
            alt={name}
          />
        </div>
        <div className="flex w-full flex-col items-start gap-1 pl-4">
          <div className="font-semibold">{name}</div>
          <div className="">{etc}</div>
          <div className="font-bold">{formatPrice(price)}</div>
          <div>
            <PlusMinusButton />
          </div>
        </div>
        <div className="flex w-fit flex-col items-end">
          <RxCross1
            size={15}
            className="cursor-pointer"
            onClick={() => removeFromCart(id)}
          />
          <div className="mt-auto whitespace-nowrap text-end text-sm font-semibold">
            {formatPrice(12333)}
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default ItemCard;
