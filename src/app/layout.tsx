import { NextIntlClientProvider, useMessages } from "next-intl";
import { Be_Vietnam_Pro as BeVietnamPro } from "next/font/google";
import { ReactNode, memo } from "react";

import type { Metadata } from "next";

import { configService } from "@/services/server";
import "../styles/global.scss";

import Provider from "./provider";

const beVietnamPro = BeVietnamPro({
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  weight: ["400", "500", "600", "700"],
});

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
    <html className={beVietnamPro.variable} lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider>{children}</Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default memo(RootLayout);
