import { getOrderDetail } from "@/actions/order-action";
import ItemCard from "@/components/order/cart/item-card";

interface ParamProps {
  orderId: string;
}

const OrderDetailPage = async ({ params }: { params: ParamProps }) => {
  const orderId = params.orderId;
  const paymentIntents = await getOrderDetail(orderId);

  console.log(paymentIntents?.items);

  return (
    <div className="container p-10">
      {paymentIntents?.items.map((item: any) => {
        return <ItemCard key={item.id} product={item} editable={false} />;
      })}
    </div>
  );
};

export default OrderDetailPage;
