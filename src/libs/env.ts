import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {},
  server: {
    NEXT_APP_LOGTAIL_SOURCE_TOKEN: z.string(),
  },
  runtimeEnv: {
    NEXT_APP_LOGTAIL_SOURCE_TOKEN: process.env.NEXT_APP_LOGTAIL_SOURCE_TOKEN,
  },
});
