import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
export const metadata: Metadata = {
  title: "DTAL STORE",
  description: "Welcome To DTAL STORE ",
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
