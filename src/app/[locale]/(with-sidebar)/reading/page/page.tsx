import { PageWrapper } from "@/components/common/page-wrapper";
import { getPageData } from "@/utils/test/get-page-data";
import { UnicodeSinglePage } from "@/components/reading-mode/unicode-mushaf/unicode-single-page";

async function page() {
  const pageData = await getPageData(598);
  if (!pageData) return null;

  return (
    <PageWrapper>
      <UnicodeSinglePage pageData={pageData} />
    </PageWrapper>
  );
}

export default page;
