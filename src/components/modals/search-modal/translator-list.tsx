import { CheckBox } from "@/components/common/check-box";
import { IconContainer } from "@/components/common/icon-container";
import { SearchInput } from "@/components/common/search-input";
import { LongArrowIcon, ResetIcon } from "@/components/svg";
import { translationList } from "@/constants/dummy-data";
import { useSearch } from "@/hooks/use-search";
import { useSearchModal } from "@/stores/use-search-modal";
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
      <CheckBox id={translator.value} {...props} />
      {translator.name}
    </label>
  );
}

export function TranslatorList() {
  const { setShowOptions, selectedTranslations, setSelectedTranslations } = useSearchModal();
  const { results, searchTerm, setSearchTerm } = useSearch(structuredTranslations, {
    keys: ["lang", "translations.name"],
  });

  const handleTranslator = (value: string) => {
    if (selectedTranslations.includes(value)) {
      setSelectedTranslations(selectedTranslations.filter(item => item !== value));
    } else {
      setSelectedTranslations([...selectedTranslations, value]);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 max-tablet:px-[--padding-x] tablet:pe-[--padding-x]">
        <IconContainer onClick={() => setShowOptions(false)} className="flex-shrink-0 tablet:hidden">
          <LongArrowIcon className="rotate-180" />
        </IconContainer>
        <SearchInput
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search Translator"
          className="flex-grow rounded-sm"
        />
        <IconContainer onClick={() => setSelectedTranslations(["en_sahih"])} className="flex-shrink-0">
          <ResetIcon />
        </IconContainer>
      </div>

      <div className="relative max-h-[300px] overflow-auto max-tablet:px-[--padding-x] tablet:pe-[--padding-x]">
        {results.map(({ lang, translations }) => (
          <div key={lang}>
            <h3 className="rounded-sm bg-secondary-bg px-2 py-1 font-medium capitalize">{lang}</h3>
            <div className="space-y-2 py-3">
              {translations.map(translator => (
                <CheckedItem
                  key={translator.value}
                  translator={translator}
                  onChange={() => handleTranslator(translator.value)}
                  checked={selectedTranslations.includes(translator.value)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
