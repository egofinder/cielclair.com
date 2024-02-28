import { Skeleton } from "@/components/ui/skeleton";

const ProductLoading = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <>
            <div className="p-4" key={index}>
              <div className="relative mb-4 h-[500px] w-full">
                <Skeleton className="h-[500px] w-full" />
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductLoading;
