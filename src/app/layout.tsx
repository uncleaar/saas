import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Navbar } from "@/components";
import Providers from "@/providers/providers";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
