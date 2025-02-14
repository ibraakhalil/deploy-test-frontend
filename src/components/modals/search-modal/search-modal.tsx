"use client";

import { IconContainer } from "@/components/common/icon-container";
import { useResponsiveDialog } from "@/components/common/responsive-dialog";
import { SearchInput } from "@/components/common/search-input";
import { AdvanceSearchFilter } from "@/components/modals/search-modal/advance-search-filter";
import { QuickSearch } from "@/components/modals/search-modal/quick-search";
import { AdvanceSettingIcon } from "@/components/svg";
import { useRouter } from "@/navigation";
import { useSearchModal } from "@/stores/use-search-modal";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useKeyPressEvent } from "react-use";

const sidebarAnimation: Variants = {
  enter: (isAdvanceFilter: boolean) => ({
    x: isAdvanceFilter ? "100%" : "-100%",
  }),
  center: { x: 0 },
  exit: (isAdvanceFilter: boolean) => ({
    x: isAdvanceFilter ? "-100%" : "100%",
  }),
};

export function SearchModal() {
  const router = useRouter();
  const params = useSearchParams();
  const { close } = useResponsiveDialog();
  const [isAdvanceFilter, setIsAdvanceFilter] = useState(false);
  const { setSearchValue, searchValue, selectedTranslations, searchIn, selectedTafsir, searchType } = useSearchModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim());
  };

  const handleSearch = () => {
    const query = encodeURIComponent(searchValue);

    if (searchIn === "translations") {
      router.push(`/search?q=${query}&translations=${selectedTranslations.join(",")}&type=${searchType}`);
    }

    if (searchIn === "tafsir") {
      router.push(`/search?q=${query}&tafsir=${selectedTafsir}&type=${searchType}`);
    }

    if (searchIn === "arabic") {
      router.push(`/search?q=${query}&type=${searchType}&arabic=""`);
    }

    close();
  };

  useKeyPressEvent("Enter", handleSearch);

  return (
    <div className="space-y-3 bg-card-bg py-6 [--padding-x:1.5rem]">
      <div className="mx-[--padding-x] flex items-center justify-between border-b border-border-color pb-2">
        <SearchInput
          onChange={handleChange}
          placeholder="Find wisdom in the Quran"
          defaultValue={params.get("q") || ""}
          className="w-full border-none bg-transparent px-0 text-title"
        />
        <IconContainer onClick={() => setIsAdvanceFilter(!isAdvanceFilter)} hover>
          <AdvanceSettingIcon className="text-icon-color" />
        </IconContainer>
      </div>

      <AnimatePresence initial={false} mode="popLayout" custom={isAdvanceFilter}>
        <motion.div
          key={isAdvanceFilter.toString()}
          custom={isAdvanceFilter}
          variants={sidebarAnimation}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.6 }}
          className="flex w-full flex-col overflow-hidden"
        >
          {isAdvanceFilter ? <AdvanceSearchFilter /> : <QuickSearch />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
