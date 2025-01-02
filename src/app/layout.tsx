import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Shashank",
    default: "Shashank - Portfolio",
  },
  description:
    "Created by: That person you never thought you'd need… until you did. And now, well, you're welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:image" content="/cover.png" />
      <meta name="twitter:image" content="/cover.png" />
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
