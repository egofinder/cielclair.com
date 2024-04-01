import { getOrderDetail } from "@/actions/order-action";
import ItemCard from "@/components/order/cart/item-card";
import { formatPrice } from "@/lib/utils";

interface ParamProps {
  orderId: string;
}

const OrderDetailPage = async ({ params }: { params: ParamProps }) => {
  const orderId = params.orderId;
  const paymentIntents = await getOrderDetail(orderId);

  console.log(paymentIntents?.items);

  return (
    <div className="container my-20 flex w-full max-w-[980px] flex-col gap-4">
      <div className="container p-10">
        {paymentIntents?.items.map((item: any) => {
          return <ItemCard key={item.id} product={item} editable={false} />;
        })}
      </div>
      <div className="flex flex-col gap-1 px-4 text-sm">
        <div className="flex justify-end">
          <div className="w-40 text-right">상품금액</div>
          <div className="w-40 text-right">{formatPrice(0)}</div>
        </div>
        <div className="flex justify-end">
          <div className="w-40 text-right">배송비</div>
          <div className="w-40 text-right">{formatPrice(0)}</div>
        </div>
        <div className="flex justify-end">
          <div className="w-40 text-right">총 결제금액</div>
          <div className="w-40 text-right">{formatPrice(0)}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
