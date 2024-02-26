"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
  const imageList = [
    "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1529397938791-2aba4681454f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1545776312-71c1641b3849?q=80&w=3574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <main className="container">
      <Carousel
        className="container absolute inset-0 h-[60vh] w-[100vw] md:h-[100vh]"
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {imageList.map((image, index) => (
            <CarouselItem key={index}>
              <div className="h-[60vh] bg-slate-600 md:h-[100vh]">
                <Image
                  src={image}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                  alt="Models"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Dummy div tag for below paragraph */}
      <div className="container h-[calc(60vh-115px)] w-[100vw] md:h-[calc(100vh-115px)]" />
      <div className="flex flex-col p-8 md:flex-row">
        <p className="text-md md:w-[60%] md:text-2xl">
          AVIE MUAH IS AN ARTISAN CLOTHING BRAND BASED ON THE UNIQUE TASTES OF
          ITS FOUNDER.THE BRAND USES NATURAL FIBERS TO CREATE COMFORTABLE
          CLOTHING FOR A WIDE VARIETY OF LIFESTYLES.AVIE MUAH VALUES THE WORK OF
          INDEPENDENT EMERGING DESIGNERS WHO HELP TO OFFER HIGH QUALITY.HANDMADE
          GARMENTS FOR EVERY CUSTOMER.
        </p>
        <div className="text-end text-sm font-light underline md:w-[40%] md:text-xl">
          <Link href="/product">SHOP NOW</Link>
        </div>
      </div>
    </main>
  );
}
