import { DefaultOptions, QueryClient } from "react-query";

const defaultOptions: DefaultOptions = {
  queries: {
    notifyOnChangeProps: ["data", "error"],
    refetchOnWindowFocus: false,
    useErrorBoundary: true,
    staleTime: 5 * 1000,
  },
};

export const getQueryClient = () => new QueryClient({ defaultOptions });
