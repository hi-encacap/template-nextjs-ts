import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { ReactNode, memo } from "react";

import type { Metadata } from "next";

import { configService } from "@/services/server";
import "../styles/global.scss";

import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const { title, favicon } = await configService.getBaseConfigs();

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    icons: {
      icon: favicon,
    },
  };
};

const RootLayout = ({ children, params: { locale } }: Readonly<{ children: ReactNode } & BasePageProps>) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default memo(RootLayout);
