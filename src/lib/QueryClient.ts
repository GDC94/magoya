import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount) => {
        if (failureCount >= 3) {
          return false;
        }

        return true;
      },
    },
  },
});

export default queryClient;
