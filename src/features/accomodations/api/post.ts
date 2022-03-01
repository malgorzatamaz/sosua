import { useRouter } from "next/router";
import { useMutation } from "react-query";

const mutationKey = (locale: string) => [locale, "accomodations"];

type Variables = {
  data: {
    host: {
      name: string;
      email: string;
    };
    location: {
      city: string;
      state: string;
    };
    conditions: any[];
    preferences: any[];
    resources: any[];
  };
};

export const useAddAccomodationsMutation = () => {
  const { locale } = useRouter();
  return useMutation({
    mutationFn: ({ data }: Variables) => mutationFn(data),
    mutationKey: mutationKey(locale),
  });
};

const mutationFn = async (data: Variables["data"]) => {
  return fetch("/api/accommodations/add", {
    method: "post",
    body: JSON.stringify(data),
  });
};
