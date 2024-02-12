import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Profile",
  description: "Sunny's Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background">{children}</body>
    </html>
  );
}
