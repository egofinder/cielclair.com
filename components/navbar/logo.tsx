import { cn } from "@/lib/utils";
import { Roboto_Serif } from "next/font/google";
import Link from "next/link";

const robotoSerif = Roboto_Serif({ subsets: ["latin-ext"] });
const Logo = () => {
  return (
    <div
      className={cn(
        "text-center text-3xl font-extralight md:text-4xl",
        robotoSerif.className,
      )}
    >
      <Link href="/">Ciel Clair</Link>
    </div>
  );
};

export default Logo;
