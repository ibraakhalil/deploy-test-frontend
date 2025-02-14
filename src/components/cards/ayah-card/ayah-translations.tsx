import { useSettings } from "@/stores/use-settings";
import { Fragment } from "react";

interface TranslationType {
  value: string;
  text: string;
}

interface AyahTranslationsProps {
  error?: boolean;
  isLoading: boolean;
  translations: TranslationType[];
}

export function AyahTranslations({ translations, isLoading, error }: AyahTranslationsProps) {
  const { translators } = useSettings();

  if (error) {
    return <p>Error while fetching</p>;
  }

  return (
    <div className="space-y-4">
      {isLoading && (
        <div className="animate-pulse space-y-2">
          {translators.map(loader => (
            <Fragment key={loader}>
              <div className="h-5 w-1/3 rounded-sm bg-secondary-bg" />
              <div className="mb-3 h-5 w-full rounded-sm bg-secondary-bg" />
            </Fragment>
          ))}
        </div>
      )}
      {!isLoading &&
        translations &&
        translations.map(translation => {
          if (!translation.text) return null;

          return (
            <div key={translation.value} className="space-y-1">
              <h3 className="text-subtitle uppercase text-subtitle-color">{translation.value}</h3>
              <p className="text-body text-pure-color" style={{ fontSize: "var(--translation-font-size)" }}>
                {translation.text}
              </p>
            </div>
          );
        })}
    </div>
  );
}
