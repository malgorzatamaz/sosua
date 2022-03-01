import { QueryClient } from "react-query";
import { fetchData } from "../../../../lib/fetchData";

const queryKey = (locale: string) => [locale, "accomodations"];

export type AccomodationsData = any[];

const queryFn = async () => {
  const data = await fetchData<AccomodationsData>("/api/accommodations");

  return data;
};

export const prefetchAccomodationsApi = (
  queryClient: QueryClient,
  locale: string
) => {
  return queryClient.prefetchQuery({
    queryKey: queryKey(locale),
    queryFn: () => queryFn(),
  });
};
