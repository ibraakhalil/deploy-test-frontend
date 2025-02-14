import { LongArrowIcon } from "@/components/svg";

function SearchSuggetionItem() {
  return (
    <div className="flex h-10 items-center justify-between rounded-sm px-2.5 py-1.5 hover:bg-secondary-bg">
      <div className="flex items-center gap-3">
        <LongArrowIcon className="text-icon-color" />
        <p className="text-pure-color">Suggetion : 5</p>
      </div>
    </div>
  );
}

export function SearchSuggetion() {
  return (
    <div className="space-y-2.5 text-subtitle-color">
      <p className="text-subtitle">Search</p>
      <div className="flex flex-col gap-2.5">
        <SearchSuggetionItem />
        <SearchSuggetionItem />
        <SearchSuggetionItem />
      </div>
    </div>
  );
}
