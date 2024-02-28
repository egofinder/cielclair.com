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
    "/hero/hero-1.png",
    "/hero/hero-2.png",
    "/hero/hero-3.png",
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
                  className="h-full w-full object-cover object-top"
                  alt="Models"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Dummy div tag for below paragraph */}
      <div className="container h-[calc(60vh-115px)] w-[100vw] md:h-[calc(100vh-115px)]" />
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <p className="text-md p-2 uppercase md:w-[70%] md:text-2xl">
          CIEL CLAIR, an artisan clothing brand, drawing inspiration from unique
          perspectives to craft garments infused with personality. The
          brand&apos;s commitment to quality and comfort is evident in its
          utilization of natural fibers, ensuring a relaxed and pleasant wearing
          experience across diverse lifestyles. Furthermore, its partnership
          with talented emerging designers underscores CIEL CLAIR&apos;s
          dedication to supporting independent artists.
        </p>
        <p className="p-2 text-end text-sm font-light underline md:w-[30%] md:text-xl">
          <Link href="/product">SHOP NOW</Link>
        </p>
      </div>
    </main>
  );
}
