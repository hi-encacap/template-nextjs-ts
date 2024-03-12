"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { memo, useEffect } from "react";

interface GlobalErrorProps {
  error: Error;
}

const GlobalError = ({ error }: GlobalErrorProps) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <Error statusCode={null as unknown as never} />
      </body>
    </html>
  );
};

export default memo(GlobalError);
