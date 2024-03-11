import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode, memo } from "react";

import type { Metadata } from "next";

import { configService } from "@/services/server";
import { appConfig } from "@/utils/config";
import "../styles/global.scss";

import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const { title } = await configService.getBaseConfigs();

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
  };
};

const RootLayout = ({ children, params: { locale } }: Readonly<{ children: ReactNode } & BasePageProps>) => {
  if (!appConfig.locales.includes(locale)) notFound();

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
