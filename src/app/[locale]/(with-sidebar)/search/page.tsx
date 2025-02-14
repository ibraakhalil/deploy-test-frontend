"use client";

import { PageWrapper } from "@/components/common/page-wrapper";
import { SearchCardList } from "@/components/search-page/search-card-list";
import { SearchPageHeading } from "@/components/search-page/search-page-heading";
import { env } from "@/config/env";
import { useSearchModal } from "@/stores/use-search-modal";
import { SearchResponse } from "@/types/search-type";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useQuery } from "react-query";

type SearchInType = "translations" | "tafsir" | "arabic" | "";

const fetchdata = async (
  searchIn: SearchInType,
  q: string,
  searchType: string,
  values: string | null,
  page: string
): Promise<SearchResponse> => {
  const url = new URL(`${env.NEXT_PUBLIC_SERVER_URL}/search/${searchIn}`);
  url.searchParams.set("text", q.trim());
  url.searchParams.set("type", searchType);
  url.searchParams.set("page", page);
  if (values) url.searchParams.set(searchIn, values);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Search failed: ${response.statusText}`);
  }
  return response.json();
};

// Separate the params logic into a client component
function SearchContent() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  const searchType = params.get("type") || "exact";
  const page = params.get("page") || "1";
  const isTranslations = params.get("translations") && "translations";
  const isTafsir = params.get("tafsir") && "tafsir";
  const isArabic = params.get("arabic") && "arabic";
  const searchIn: SearchInType = isTranslations || isTafsir || isArabic || "";
  const values = params.get(searchIn);

  const { setSearchValue, setSearchType, setSearchIn } = useSearchModal();

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", searchIn, q, values, searchType, page],
    queryFn: () => fetchdata(searchIn, q, searchType, values, page),
    enabled: Boolean(q),
  });

  useEffect(() => {
    setSearchValue(q);
    setSearchType(searchType);
    setSearchIn(searchIn);
  }, []);

  if (!q || error) {
    return <div className="text-center text-[red]">Error loading search results. Please try again.</div>;
  }

  if (isLoading) {
    return <div className="animate-pulse py-10 text-center text-heading-3">Loading results...</div>;
  }

  const totalPages = Math.ceil(data!.count / data!.pageLimit);

  return (
    <>
      <SearchPageHeading term={data!.searchTerms.join(" ")} count={data!.count} />
      <SearchCardList results={data!} />
      <div>
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center space-x-2">
            <button
              onClick={() => {
                const newPage = parseInt(page, 10) - 1;
                window.location.href = `/search?q=${q}&type=${searchType}&${searchIn}=${values}&page=${newPage}`;
              }}
              disabled={parseInt(page, 10) === 1}
              className="rounded-sm bg-primary px-4 py-2 text-primary-fg disabled:opacity-50"
            >
              Prev
            </button>
            <button
              onClick={() => {
                const newPage = parseInt(page, 10) + 1;
                window.location.href = `/search?q=${q}&type=${searchType}&${searchIn}=${values}&page=${newPage}`;
              }}
              disabled={parseInt(page, 10) === totalPages}
              className="rounded-sm bg-primary px-4 py-2 text-primary-fg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <PageWrapper>
      <Suspense fallback={<div className="animate-pulse py-10 text-center text-heading-3">Loading...</div>}>
        <SearchContent />
      </Suspense>
    </PageWrapper>
  );
}
