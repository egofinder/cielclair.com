import { cn } from "@/lib/utils";
import { Roboto_Serif } from "next/font/google";

const robotoSerif = Roboto_Serif({ subsets: ["latin-ext"] });
const Logo = () => {
  return (
    <div
      className={cn(
        "text-center text-3xl font-extralight md:text-4xl",
        robotoSerif.className,
      )}
    >
      Ciel Clair
    </div>
  );
};

export default Logo;
