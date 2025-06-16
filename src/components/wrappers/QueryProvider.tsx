"use client";

import { QueryClientProvider, QueryClient, HydrationBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { PropsWithChildren, useState } from "react";

type Props = PropsWithChildren & {
  state?: unknown;
};

const QueryProvider = ({ children, state }: Props) => {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <HydrationBoundary state={state}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default QueryProvider;
