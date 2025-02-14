import { ModalButton } from "@/components/common/buttons";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { SearchHighlightedText } from "@/components/modals/search-modal/search-highlighted-text";
import { TafsirList } from "@/components/modals/search-modal/tafsir-list";
import { TranslatorList } from "@/components/modals/search-modal/translator-list";
import { SelectSearchIn } from "@/components/sidebars/search-filter-bar/select-search-in";
import { SelectSearchType } from "@/components/sidebars/search-filter-bar/select-search-type";
import { OptionTrigger } from "@/components/sidebars/settings-bar/option-trigger";
import { useSearchModal } from "@/stores/use-search-modal";
import { useMedia } from "react-use";

function SelectSearch({ setShowOptions }: { setShowOptions: (showOptions: boolean) => void }) {
  const { searchIn } = useSearchModal();

  return (
    <div className="space-y-6 px-[--padding-x] tablet:pe-9">
      <div className="space-y-6">
        <SelectSearchIn />
        <SelectSearchType />
      </div>
      {searchIn !== "arabic" && (
        <div className="min-h-20 space-y-3 tablet:hidden" onClick={() => setShowOptions(true)}>
          <h3 className="text-title font-medium">Select Translations</h3>
          <OptionTrigger onClick={() => setShowOptions(true)}>Select {searchIn}</OptionTrigger>
        </div>
      )}
    </div>
  );
}

export function AdvanceSearchFilter() {
  const { searchIn, showOptions, setShowOptions } = useSearchModal();
  const isMobile = useMedia("(max-width: 768px)", true);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 max-tablet:gap-6 tablet:grid-cols-[40%_60%]">
        {!showOptions && <SelectSearch setShowOptions={setShowOptions} />}
        {(!isMobile || showOptions) && (
          <div className="border-l-0 border-border-color ps-0 tablet:border-s tablet:ps-9">
            {searchIn === "translations" && <TranslatorList />}
            {searchIn === "tafsir" && <TafsirList />}
            {searchIn === "arabic" && <SearchHighlightedText />}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <ResponsiveDialog.Close asChild>
          <ModalButton className="w-[180px] rounded-sm bg-secondary-bg">Cancel</ModalButton>
        </ResponsiveDialog.Close>
        <ModalButton className="w-[180px] rounded-sm">Apply</ModalButton>
      </div>
    </div>
  );
}
