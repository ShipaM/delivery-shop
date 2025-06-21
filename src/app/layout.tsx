import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

const rubik = Rubik({
  variable: "--font-rubic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Северяночка",
  description: "Доставка и покупка продуктов питания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
