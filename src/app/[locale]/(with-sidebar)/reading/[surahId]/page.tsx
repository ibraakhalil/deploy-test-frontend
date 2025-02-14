import { PageWrapper } from "@/components/common/page-wrapper";
import { UnicodeSurahPage } from "@/components/reading-mode/unicode-mushaf/unicode-surah-page";
import { getSurahData } from "@/utils/test/get-surah-data";

async function page({ params }: { params: { surahId: string } }) {
  const surahId = parseInt(params.surahId, 10);
  const surahData = await getSurahData(surahId || 1);
  if (!surahData) return null;

  return (
    <PageWrapper>
      <UnicodeSurahPage surahData={surahData} />
    </PageWrapper>
  );
}

export default page;
