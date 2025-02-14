"use client";

import { PageWrapper } from "@/components/common/page-wrapper";
import { BookmarkedAyahList } from "@/components/profile-page/bookmark-ayah-list";
import { Collection } from "@/components/profile-page/compound-collection";
import { DataNotFoundIcon, FolderIcon } from "@/components/svg";
import { env } from "@/config/env";
import { bookmarkStorage } from "@/hooks/get-bookmarks";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

type WordType = {
  ayah_id: number;
  surah_id: number;
  indopak: string;
  uthmani: string;
  en: string;
  bn: string;
  code_v2: string;
};

interface VerseType {
  ayah_id: number;
  surah_id: number;
  words: WordType[];
}

export default function Page() {
  const { bookmarkId } = useParams();
  const bookmark = bookmarkStorage.findOne({ id: bookmarkId.toString() });
  const { data } = useQuery<VerseType[]>({
    queryKey: "bookmarkCustomAyah",
    queryFn: () =>
      fetch(`${env.NEXT_PUBLIC_SERVER_URL}/wbw/custom?ayah=${bookmark?.items.join(",")}`).then(res => res.json()),
  });

  if (!data) return null;
  const hasItems = data?.length > 0;

  return (
    <PageWrapper>
      <div className="flex h-[80px] items-center gap-5 bg-secondary-bg px-[--padding-x]">
        <FolderIcon color="#fe3345" className="size-9 flex-shrink-0" />
        <div>
          <h3 className="line-clamp-1 text-body font-semibold tablet:text-heading-6">{bookmark?.name}</h3>
          <p className="text-subtitle text-subtitle-color">Total Ayah: {bookmark?.items.length}</p>
        </div>
      </div>
      {hasItems && <BookmarkedAyahList data={data} />}
      {!hasItems && (
        <Collection.Empty message="No bookmarks found">
          <DataNotFoundIcon />
        </Collection.Empty>
      )}
    </PageWrapper>
  );
}
