import { surahList } from "@/constants/surah-list";
import { Fragment } from "react";
import { AyahCardList } from "../cards/ayah-card/ayah-card-list";
import { SurahTitleCard } from "../cards/surah-title-card";

interface SurahType {
  surahId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ayah: any[];
}

interface SurahListProps {
  surahs: SurahType[];
}

export function SurahList({ surahs }: SurahListProps) {
  return surahs.map(surah => {
    const isFirstAyah = surah.ayah[0].ayah_id === 1;
    const chapter = surahList.find(s => s.id.toString() === surah.surahId)!;

    return (
      <Fragment key={surah.surahId}>
        {isFirstAyah && (
          <SurahTitleCard>
            <SurahTitleCard.Revelation place={chapter?.place} />
            <SurahTitleCard.Title title={chapter.name} subtitle={`Ayah ${chapter.count}, ${chapter.place}`} />
            <SurahTitleCard.Bismillah />
          </SurahTitleCard>
        )}
        <AyahCardList verses={surah.ayah} surahId={surah.surahId} />
      </Fragment>
    );
  });
}
