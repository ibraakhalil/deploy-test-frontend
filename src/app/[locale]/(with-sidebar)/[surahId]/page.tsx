import { AyahCardList } from "@/components/cards/ayah-card/ayah-card-list";
import { SurahTitleCard } from "@/components/cards/surah-title-card";
import { PageWrapper } from "@/components/common/page-wrapper";
import { env } from "@/config/env";
import { surahList } from "@/constants/surah-list";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  const arr = new Array(114).fill(null).map((_, index) => index + 1);
  return arr.map(n => ({
    surahId: n.toString(),
  }));
}

async function AyahPage({ params: { locale, surahId } }: { params: { locale: string; surahId: string } }) {
  unstable_setRequestLocale(locale);
  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/wbw/by_surah/${surahId}`);
  const verses = await res.json();

  const surah = surahList[parseInt(surahId, 10) - 1];

  return (
    <PageWrapper>
      <SurahTitleCard>
        <SurahTitleCard.Revelation place={surah.place} />
        <SurahTitleCard.Title title={surah.name} subtitle={`Ayah ${surah.count}, ${surah.place}`} />
        <SurahTitleCard.Bismillah />
      </SurahTitleCard>
      <AyahCardList verses={verses} surahId={surahId} />
    </PageWrapper>
  );
}

export default AyahPage;
