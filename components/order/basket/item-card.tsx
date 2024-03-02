import Image from "next/image";
import PlusMinusButton from "@/components/order/basket/plus-minus-button";
import useCart from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { MdOutlineCancel } from "react-icons/md";
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
      <div className="flex h-[150px] w-full flex-row text-sm">
        <div className="relative w-[20%] bg-muted">
          <Image
            className="object-contain object-center"
            fill
            src={images[0]}
            alt={name}
          />
        </div>
        <div className="flex w-[60%] flex-col items-start gap-1 pl-4">
          <div className="font-bold">{name}</div>
          <div className="">{etc}</div>
          <div className="font-extrabold">{formatPrice(price || 0)}</div>

          <div>
            <PlusMinusButton />
          </div>
        </div>
        <div className="flex w-[20%] flex-col items-end ">
          <MdOutlineCancel
            size={20}
            className="cursor-pointer"
            onClick={() => removeFromCart(id)}
          />
          <div className="mt-auto w-full text-end font-bold">
            총 금액: $12,333
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default ItemCard;
