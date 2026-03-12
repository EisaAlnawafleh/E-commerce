import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./(user)/guest/components/Header";
import Footer from "./(user)/guest/components/Footer";
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
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
      <body className={cairo.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
