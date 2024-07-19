"use client";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "@/lib/QueryClient";

export default function QueryClientProviderWrapper({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
