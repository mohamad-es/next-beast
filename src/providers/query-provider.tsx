"use client";

import { getQueryClient } from "@/lib/react-query/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
