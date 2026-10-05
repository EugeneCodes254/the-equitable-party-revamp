import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Equitable Party | Tusawazishe",
  description:
    "The Equitable Party — building a fair, just, sustainable and prosperous Kenya.",
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
