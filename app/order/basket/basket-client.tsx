import { Product } from "@/type/product";
import ItemCard from "@/components/order/basket/item-card";
import { formatPrice } from "@/lib/utils";
import OrderButton from "@/components/custom-ui/order-button";
import { products } from "@/data/products";
import EmptyBasket from "@/components/order/basket/empty-basket";

interface BasketClientProps {
  basketProducts: { id: Product["id"]; size: string; quantity: number }[];
}

const BasketClient = ({ basketProducts }: BasketClientProps) => {
  const wholeProducts = basketProducts.map((basketProduct) => {
    const product = products.find((product) => product.id === basketProduct.id);
    if (product) {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        etc: product.etc,
        thumbnail: product.thumbnail,
        size: basketProduct.size,
        quantity: basketProduct.quantity,
      };
    }
  });

  const totalAmount = wholeProducts.reduce(
    (total, product) =>
      product ? total + product.price * product.quantity : total,
    0,
  );
  const shippingFee = 0;
  const totalPayment = totalAmount + shippingFee;

  if (wholeProducts.length === 0) return <EmptyBasket />;

  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col gap-4">
      <div className="flex flex-col items-center gap-4 px-4">
        {wholeProducts.map((product, index) =>
          product ? <ItemCard key={index} product={product} /> : null,
        )}
      </div>
      <div className="flex flex-col gap-1 px-4 text-sm">
        <div className="flex justify-end">
          <div className="w-40 text-right">상품금액</div>
          <div className="w-40 text-right">{formatPrice(totalAmount)}</div>
        </div>
        <div className="flex justify-end">
          <div className="w-40 text-right">배송비</div>
          <div className="w-40 text-right">{formatPrice(shippingFee)}</div>
        </div>
        <div className="flex justify-end">
          <div className="w-40 text-right">총 결제금액</div>
          <div className="w-40 text-right">{formatPrice(totalPayment)}</div>
        </div>
        <div className="mt-4 flex justify-end">
          <OrderButton className="w-52" />
        </div>
      </div>
    </div>
  );
};

export default BasketClient;
