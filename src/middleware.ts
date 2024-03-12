import createMiddleware from "next-intl/middleware";

import { appConfig } from "./utils/config";

const intlMiddleware = createMiddleware({
  locales: appConfig.locales,
  localePrefix: "as-needed",
  defaultLocale: appConfig.defaultLocale,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default intlMiddleware;
