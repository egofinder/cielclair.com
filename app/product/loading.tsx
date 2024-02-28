import { Skeleton } from "@/components/ui/skeleton";

const ProductLoading = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <>
            <div className="w-full p-4" key={index}>
              <div className="flex flex-col gap-4">
                <Skeleton className="m-auto aspect-[3/4] w-full max-w-[450px]" />
                <div className="m-auto aspect-[3/4] w-full max-w-[450px] space-y-4">
                  <Skeleton className="h-4 w-[50%]" />
                  <Skeleton className="h-4 w-[30%]" />
                  <Skeleton className="h-4 w-[30%]" />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductLoading;
