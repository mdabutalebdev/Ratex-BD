import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sheard/Navbar";
import Footer from "@/components/sheard/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Ratex BD - Your Trusted Online Store",
  description: " Discover the latest trends in fashion at Ratex BD. Shop stylish clothing, accessories, and more with unbeatable prices and exclusive collections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
