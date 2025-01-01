import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Shashank",
    default: "Shashank",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="antialiased diphylleia max-w-2xl mx-auto px-4"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
