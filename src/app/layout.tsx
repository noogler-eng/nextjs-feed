import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "anonomus-feed",
  description: "write day to day life activity",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
