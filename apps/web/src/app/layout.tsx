import type { Metadata } from "next";
import { Inter, Montserrat, Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const INTER = Inter({ subsets: ["latin"] });
const MONTSERRAT = Montserrat({ subsets: ["latin"] });
const LATO = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes App",
  description: "This is an app to take notes.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(INTER.className, MONTSERRAT.className, LATO.className)}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
