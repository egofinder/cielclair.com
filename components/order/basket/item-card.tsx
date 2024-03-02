import { products } from "@/data/products";
import Image from "next/image";
import PlusMinusButton from "@/components/order/basket/plus-minus-button";
import useCart from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { MdOutlineCancel } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

interface ItemCardProps {
  productId: string;
}

const ItemCard = ({ productId }: ItemCardProps) => {
  const product = products.find((product) => product.id === productId);
  const { removeFromCart } = useCart();

  return (
    <>
      <div className="flex h-[150px] w-full flex-row text-sm">
        <div className="relative w-[20%] bg-muted">
          <Image
            className="object-contain object-center"
            fill
            src={product?.images[0] || ""}
            alt={product?.name || ""}
          />
        </div>
        <div className="flex w-[60%] flex-col items-start gap-1 pl-4">
          <div className="font-bold">{product?.name}</div>
          <div className="">{product?.etc}</div>
          <div className="font-extrabold">
            {formatPrice(product?.price || 0)}
          </div>

          <div>
            <PlusMinusButton />
          </div>
        </div>
        <div className="flex w-[20%] flex-col items-end ">
          <MdOutlineCancel
            size={20}
            className="cursor-pointer"
            onClick={() => removeFromCart(productId)}
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
