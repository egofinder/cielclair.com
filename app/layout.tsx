import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/cartContextProvider";
import { SessionProvider } from "@/context/sessionContextProvider";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Home",
  },
  description: "A simple e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <CartProvider>
          <SessionProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </SessionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
