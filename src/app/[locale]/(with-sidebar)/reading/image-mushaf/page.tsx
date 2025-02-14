"use client";

import { BottomPageNavigation } from "@/components/reading-mode/bottom-page-nav";
import { BookFlip, BookFlipRef } from "@/components/reading-mode/image-mushaf/book-flip";
import Image from "next/image";
import { useMemo, useRef } from "react";

const pages = Array.from({ length: 604 }, (_, i) => i + 1);

export default function Page() {
  const bookRef = useRef<BookFlipRef>(null);

  const allPages = useMemo(() => {
    return pages.map(page => (
      <div
        key={page}
        className="group h-full rounded-md bg-secondary-bg p-3 pt-2 shadow-[inset_3px_0px_40px_rgba(0,0,0,0.1)] [&.--left]:rounded-l-none tablet:[&.--right]:rounded-r-none"
      >
        <div className="grid w-full grid-cols-3 px-4 text-subtitle text-subtitle-color">
          <span>Al-Baqarah</span>
          <span className="justify-self-center">{page}</span>
          <span className="justify-self-end">Juz:1</span>
        </div>
        <Image
          src={`https://download.quranmazid.com/mushaf/hafezi/quran_${page}.png`}
          width={400}
          height={640}
          alt={`mushaf-page-${page}`}
          className="h-full w-full pb-5"
        />
      </div>
    ));
  }, []);

  const onPageChange = (value: string) => {
    if (value === "next") bookRef.current?.nextFlip();
    if (value === "prev") bookRef.current?.prevFlip();
  };

  return (
    <div className="h-[calc(100dvh-(var(--\\_top-nav-size)+var(--\\_side-nav-size)))] overflow-hidden pt-2 [--page-nav-height:60px] laptop:h-[calc(100dvh-(var(--\\_top-nav-size)))]">
      <BookFlip ref={bookRef} initialPage={603}>
        {allPages}
      </BookFlip>
      <div className="flex h-[--page-nav-height] items-center justify-center">
        <BottomPageNavigation length={pages.length} current={603} onChange={onPageChange} />
      </div>
    </div>
  );
}
