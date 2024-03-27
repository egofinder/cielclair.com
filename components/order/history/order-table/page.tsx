import { OrderHistory } from "@/type/OrderHistory";
import { columns } from "./columns";
import { DataTable } from "./data-table";

interface HistoryItemProps {
  orderHistory: OrderHistory[];
}

export default async function HistoryTablePage({
  orderHistory,
}: HistoryItemProps) {
  return (
    <div className="container mx-auto p-10 ">
      <DataTable columns={columns} data={orderHistory} />
    </div>
  );
}
