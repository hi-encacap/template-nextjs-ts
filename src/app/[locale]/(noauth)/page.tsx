import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { memo } from "react";

import { QueryKey } from "@/constants/query-key";
import { configService } from "@/services/server";

import Home from "./components/Home";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKey.BASE_CONFIGS],
    queryFn: configService.getBaseConfigs,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
};

export default memo(HomePage);
