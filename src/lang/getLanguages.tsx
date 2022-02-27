import { useRouter } from "next/router";
import PL from "./PL";
import EN from "./EN";
import RU from "./RU";
import UA from "./UA";

export const getLanguage = (page, key) => {
  const { locale } = useRouter();
  if (locale === "ua-UA") return UA[page][key];
  if (locale === "en-EN") return EN[page][key];
  if (locale === "ru-RU") return RU[page][key];

  return PL[page][key];
};
