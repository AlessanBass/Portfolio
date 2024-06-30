import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import iconPage from "../../public/icon_page.png";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "./globals.css";

const oswald = Oswald({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Página Inicial",
  icons:iconPage.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider >
        <body className={oswald.className}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
