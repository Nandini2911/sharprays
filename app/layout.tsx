import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharp Rays — Digital Marketing Agency",
  description:
    "Sharp strategy. Brighter growth. Digital marketing built to make brands stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}