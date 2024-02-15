import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scrappy",
  description: "This is the description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
