import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ReactNode, memo } from "react";

import "./styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script id="inline-script">{`console.log('Hello world!');`}</Script>
    </html>
  );
};

export default memo(RootLayout);
