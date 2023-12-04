import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header/header";

// main font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// heading font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfairDisplay",
});

export const metadata: Metadata = {
  title: "Ferdous Al Hasan - Fullstack Web Developer",
  description:
    "Ferdous Al Hasan - Fullstack Web Developer. Wokking as a part-time front-end web developer at Upsoul Digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${playfairDisplay.variable} text-textColor1`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
