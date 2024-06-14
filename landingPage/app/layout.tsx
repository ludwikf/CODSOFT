import type { Metadata } from "next";
import { unbounded } from "./ui/fonts";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Trim Studio | Styles for Modern Gentlemen",
  description:
    "Step into a world of expert barbering at TrimStudio. Discover the artistry of classic cuts, modern trends and personalized grooming experiences tailored just for you. Book your appointment today and redefine your style journey with our skilled team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
