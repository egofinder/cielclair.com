"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  user_id: string;
  payment_intent: string;
  status: string;
  created_at: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "payment_intent",
    header: "Payment Intent",
  },
  {
    accessorKey: "amount",
    header: "Total",
  },
  {
    accessorKey: "created_at",
    header: "Order Placed",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
