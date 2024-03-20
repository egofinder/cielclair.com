import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return formattedPrice.replace(/(\D)(\d)/, "$1 $2");
}

export function log(...params: any[]) {
  if (process.env.NODE_ENV === "development") {
    console.log(__filename, ...params);
  }
}
