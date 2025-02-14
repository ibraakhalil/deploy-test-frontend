import { PageWrapper } from "@/components/common/page-wrapper";
import { UnicodeJuzPage } from "@/components/reading-mode/unicode-mushaf/unicode-juz-page";
import { getJuzData } from "@/utils/test/get-juz-data";

async function page() {
  const juzData = await getJuzData(30);
  if (!juzData) return null;

  return (
    <PageWrapper>
      <UnicodeJuzPage juzData={juzData} />
    </PageWrapper>
  );
}

export default page;
