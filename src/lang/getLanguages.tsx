import { useRouter } from "next/router";
import PL from "./PL";
import EN from "./EN";
import RU from "./RU";
import UA from "./UA";
import CZ from "./CZ";
import HU from "./HU";
import SK from "./SK";

export const getLanguage = (page, key) => {
  const { locale } = useRouter();

  if (locale === "cz-CZ") return CZ[page][key];
  if (locale === "hu-HU") return HU[page][key];
  if (locale === "sk-SK") return SK[page][key];
  if (locale === "ua-UA") return UA[page][key];
  if (locale === "en-EN") return EN[page][key];
  if (locale === "ru-RU") return RU[page][key];

  return PL[page][key];
};
