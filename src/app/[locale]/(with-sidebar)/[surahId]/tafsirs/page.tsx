import { ArabicContent } from "@/components/cards/ayah-card/arabic-conten";
import { AyahCard } from "@/components/cards/ayah-card/ayah-card";
import { ActionBar } from "@/components/cards/ayah-card/ayah-card-actionbar";
import { PageWrapper } from "@/components/common/page-wrapper";
import { TafsirContent } from "@/components/tafsirs/tafsir-content";
import { TafsirNavigationBar } from "@/components/tafsirs/tafsir-navigation";
import { TafsirStickyNav } from "@/components/tafsirs/tafsir-sticky-nav";
import { TafsirTranslation } from "@/components/tafsirs/tafsir-translation";
import { getTafsirWords } from "@/lib/get-tafsirs";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

interface PageProps {
  params: { locale: string; surahId: string };
}

export default async function page({ params: { locale, surahId } }: PageProps) {
  unstable_setRequestLocale(locale);
  const verseKey = decodeURIComponent(surahId || "1:1");
  const verse = await getTafsirWords(verseKey);

  if (!verse) notFound();

  return (
    <PageWrapper className="space-y-5">
      <TafsirNavigationBar verseKey={verseKey} />
      <AyahCard className="border-none px-[--padding-x]">
        <AyahCard.Head info="2:5" />
        <AyahCard.Body>
          <ActionBar exclude={["tafsir"]} verseKey={verseKey} />
          <AyahCard.Content>
            {verse && <ArabicContent verse={verse} />}
            <TafsirTranslation verseKey={verseKey} />
          </AyahCard.Content>
        </AyahCard.Body>
      </AyahCard>
      <TafsirStickyNav />
      <TafsirContent verseKey={verseKey} />
    </PageWrapper>
  );
}
