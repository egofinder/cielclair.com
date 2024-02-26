import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="container absolute inset-0 h-[60vh] w-[100vw] md:h-[100vh]">
        <Image
          src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          className="object-cover object-center"
          alt="Models"
        />
      </div>
      <div className="mt-[48vh] flex flex-col p-8 md:mt-[88vh] md:flex-row">
        <p className="text-md md:w-[60%] md:text-2xl">
          AVIE MUAH IS AN ARTISAN CLOTHING BRAND BASED ON THE UNIQUE TASTES OF
          ITS FOUNDER.THE BRAND USES NATURAL FIBERS TO CREATE COMFORTABLE
          CLOTHING FOR A WIDE VARIETY OF LIFESTYLES.AVIE MUAH VALUES THE WORK OF
          INDEPENDENT EMERGING DESIGNERS WHO HELP TO OFFER HIGH QUALITY.HANDMADE
          GARMENTS FOR EVERY CUSTOMER.
        </p>
        <Link
          className="text-end  text-sm font-light underline md:w-[40%] md:text-xl"
          href="/product"
        >
          SHOP NOW
        </Link>
      </div>
    </main>
  );
}
