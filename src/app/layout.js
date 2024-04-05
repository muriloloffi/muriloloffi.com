import { Inter } from "next/font/google";
import "./globals.css";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Murilo's homepage",
  description: "Welcome! Checkout my posts, portfolio and CV.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
