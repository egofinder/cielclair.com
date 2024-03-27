import { Metadata } from "next";
import { getOrderHistory } from "@/actions/order-action";
import { createClient } from "@/lib/supabase/server";

import EmptyHistory from "@/components/order/history/empty-history";
import { OrderHistory } from "@/type/OrderHistory";
import HistoryTablePage from "@/components/order/history/order-table/page";

export const metadata: Metadata = {
  title: "Order History",
};

const HistoryPage = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let orderHistory: OrderHistory[] = [];

  if (user?.id) {
    orderHistory = (await getOrderHistory(user.id)) || [];
    orderHistory = orderHistory.map((order) => ({
      ...order,
      created_at: new Date(order.created_at).toLocaleDateString("en-US"),
      amount: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(parseInt(order.amount) / 100),
    }));
  }

  return (
    <div className="min-h-[60vh]">
      {orderHistory.length != 0 ? (
        <HistoryTablePage orderHistory={orderHistory} />
      ) : (
        <EmptyHistory />
      )}
    </div>
  );
};

export default HistoryPage;
