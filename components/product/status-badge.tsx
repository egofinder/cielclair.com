import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProductStatus } from "@/type/enums";

interface StatusBadgeProps {
  status: ProductStatus;
  position: string;
}

const StatusBadge = ({ status, position }: StatusBadgeProps) => {
  const title = {
    [ProductStatus.InStock]: "In Stock",
    [ProductStatus.LowStock]: "Low Stock",
    [ProductStatus.SoldOut]: "Sold Out",
  };

  return (
    <div className={cn("absolute h-fit w-fit", position)}>
      <Badge
        variant="default"
        className={cn("rounded-none", {
          "bg-slate-800": status === ProductStatus.LowStock,
          "bg-black": status === ProductStatus.SoldOut,
        })}
      >
        {title[status]}
      </Badge>
    </div>
  );
};

export default StatusBadge;
