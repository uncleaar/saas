import { Inter } from "next/font/google";
import Providers from "@/providers/providers";
import { Navbar } from "@/components";
import { cn } from "@/lib/utils";

import "react-loading-skeleton/dist/skeleton.css";
import "@radix-ui/themes/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <Providers>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
