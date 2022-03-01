const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const fetchData = async <T>(
  url: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const result = await fetch(API_URL + url, { ...init });
  const data = result.json();
  return data;
};
