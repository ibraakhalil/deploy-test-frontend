import { SearchPageLink } from "@/components/links/search-page.link";
import { CloseCircleIcon, LongArrowIcon } from "@/components/svg";
import { useSearchModal } from "@/stores/use-search-modal";
import { ReactNode, useState } from "react";

interface RecentNavigationItemProps {
  onRemove: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactNode;
}

function RecentNavigationItem({ onRemove, children }: RecentNavigationItemProps) {
  return (
    <div className="flex items-center justify-between rounded-sm px-2.5 hover:bg-secondary-bg">
      <SearchPageLink className="flex h-10 flex-grow items-center gap-3">
        <LongArrowIcon className="text-icon-color" />
        <p className="text-pure-color">{children}</p>
      </SearchPageLink>
      <CloseCircleIcon onClick={onRemove} className="cursor-pointer text-icon-color" />
    </div>
  );
}

export function RecentNavigation() {
  const { recentNavigations } = useSearchModal();
  const [arr, setArr] = useState([1, 2, 3, 4, ...recentNavigations]);

  const handleRemove = (index: number) => {
    setArr(arr.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2.5 text-subtitle-color">
      <p className="text-subtitle">Recent Navigation</p>
      <div className="flex flex-col gap-2.5">
        {arr.map((navigation, index) => (
          <RecentNavigationItem onRemove={() => handleRemove(index)} key={JSON.stringify(navigation)}>
            Al-Fatiha : {JSON.stringify(navigation)}
          </RecentNavigationItem>
        ))}
      </div>
    </div>
  );
}
