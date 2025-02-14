import { CheckBox } from "@/components/common/check-box";
import { SearchInput } from "@/components/common/search-input";
import { DropDownArrowIcon } from "@/components/svg";
import { translationList } from "@/constants/dummy-data";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/stores/use-settings";
import { InputHTMLAttributes } from "react";

const structuredTranslations = translationList.reduce<LanguageGroup[]>((acc, trans) => {
  const existingLang = acc.find(group => group.lang === trans.lang);
  if (existingLang) {
    existingLang.translations.push({ name: trans.name, value: trans.file_name });
  } else {
    acc.push({
      lang: trans.lang,
      translations: [{ name: trans.name, value: trans.file_name }],
    });
  }
  return acc;
}, []);

interface TranslationValue {
  name: string;
  value: string;
}
interface CheckedItemProps extends InputHTMLAttributes<HTMLInputElement> {
  translator: TranslationValue;
}
interface LanguageGroup {
  lang: string;
  translations: TranslationValue[];
}

function CheckedItem({ translator, ...props }: CheckedItemProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2 px-2" key={translator.name} htmlFor={translator.value}>
      <CheckBox id={translator.value} ariaLabel={translator.name} {...props} />
      {translator.name}
    </label>
  );
}

export function Translators() {
  const { setActiveState, setTranslators, translators } = useSettings();
  const { results, searchTerm, setSearchTerm } = useSearch(structuredTranslations, {
    keys: ["lang", "translations.name"],
  });

  const handleTranslator = (value: string) => {
    if (translators.includes(value)) {
      setTranslators(translators.filter(item => item !== value));
    } else {
      if (translators.length > 5) return;
      setTranslators([...translators, value]);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden">
      <div className="space-y-4 pe-[--gap-end] ps-[--gap-start]">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveState("tab")}
            className="flex items-center gap-3 text-body font-semibold text-primary"
          >
            <DropDownArrowIcon className="size-5 rotate-90" /> Translations
          </button>
          <span
            onClick={() => setTranslators(["en_sahih"])}
            className="flex-shrink-0 cursor-pointer text-subtitle text-subtitle-color"
          >
            Reset
          </span>
        </div>

        <SearchInput
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search Translator"
          className="flex-grow rounded-sm"
        />
      </div>

      <div className="relative h-full overflow-auto pe-[--gap-end] ps-[--gap-start]">
        {results.map(({ lang, translations }) => (
          <div key={lang}>
            <h3 className="rounded-sm bg-secondary-bg px-2 py-1 font-medium capitalize">{lang}</h3>
            <div className="space-y-2 py-3">
              {translations.map(translator => {
                const isChecked = translators.includes(translator.value);

                return (
                  <CheckedItem
                    key={translator.value}
                    translator={translator}
                    onChange={() => handleTranslator(translator.value)}
                    checked={isChecked}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
