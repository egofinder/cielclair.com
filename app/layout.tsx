import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/footer/footer";
import Navigation from "@/components/navbar/navigation";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
