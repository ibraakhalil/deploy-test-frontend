/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { SelectSearchType } from "@/components/sidebars/search-filter-bar/select-search-type";
import { SearchFilterIcon } from "@/components/svg";
import { SelectSearchIn } from "@/components/sidebars/search-filter-bar/select-search-in";

export const allBooks = [
  { value: "arial", label: "Arial" },
  { value: "times-new-roman", label: "Times New Roman" },
  { value: "helvetica", label: "Helvetica" },
  { value: "georgia", label: "Georgia" },
  { value: "verdana", label: "Verdana" },
  { value: "calibri", label: "Calibri" },
  { value: "garamond", label: "Garamond" },
  { value: "courier-new", label: "Courier New" },
  { value: "tahoma", label: "Tahoma" },
  { value: "trebuchet-ms", label: "Trebuchet MS" },
];

export function SearchFilterSidebar() {
  return (
    <div className="space-y-3 pe-[--gap-end] ps-[--gap-start]">
      <div className="flex items-center gap-3">
        <SearchFilterIcon className="text-primary" />
        <h2 className="text-body font-bold text-primary">Filter Search</h2>
      </div>
      <div className="space-y-6">
        <SelectSearchIn />
        <SelectSearchType />
      </div>
    </div>
  );
}
