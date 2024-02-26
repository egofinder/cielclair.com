import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="container absolute inset-0 h-[100vh] w-[100vw]">
        <Image
          src="https://images.unsplash.com/photo-1564910443496-5fd2d76b47fa?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          className="object-cover object-center"
          alt="Models"
        />
      </div>
      <div className="mt-[85vh] flex flex-row">
        <p className="w-[60%] text-2xl">
          AVIE MUAH IS AN ARTISAN CLOTHING BRAND BASED ON THE UNIQUE TASTES OF
          ITS FOUNDER.THE BRAND USES NATURAL FIBERS TO CREATE COMFORTABLE
          CLOTHING FOR A WIDE VARIETY OF LIFESTYLES.AVIE MUAH VALUES THE WORK OF
          INDEPENDENT EMERGING DESIGNERS WHO HELP TO OFFER HIGH QUALITY.HANDMADE
          GARMENTS FOR EVERY CUSTOMER.
        </p>
        <p className="w-[40%] text-end text-xl underline">SHOP NOW</p>
      </div>
    </main>
  );
}
