import { locales } from "@/config/i18n.config";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as "en")) notFound();

  return {
    messages: (await (locale === "en" ? import("./messages/en.json") : import(`./messages/${locale}.json`))).default,
  };
});
