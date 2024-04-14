import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "./bracket.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Music Tourney",
  description: "Compete with the best tunes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
