import {  Poppins,  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Design agency",
  description: "Design agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={poppins.className}>
        <div className=" max-w-7xl mx-auto">
          <Navbar />
          {children}
          <Subscribe />
          <Footer />
        </div>
      </body>
    </html>
  );
}
