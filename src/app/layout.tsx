import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Message Block Pro - The Ultimate SMS Filtering Service",
  description:
    "Message Block Pro is a powerful and easy-to-use SMS filtering service that helps you block spam and unwanted messages. With our advanced filtering technology, you can finally take control of your inbox and enjoy a spam-free messaging experience. Sign up today and start blocking unwanted messages!",
  openGraph: {
    title: "Message Block Pro - The Ultimate SMS Filtering Service",
    description:
      "Tired of spam? Message Block Pro offers a simple and effective solution to block unwanted SMS messages. Our smart filtering technology keeps your inbox clean and clutter-free. Get started in minutes and say goodbye to spam forever!",
    url: "https://messageblock.pro",
    siteName: "Message Block Pro",
    images: [
      {
        url: "https://messageblock.pro/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
