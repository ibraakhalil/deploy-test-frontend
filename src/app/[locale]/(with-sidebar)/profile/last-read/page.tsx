"use client";

import { PageWrapper } from "@/components/common/page-wrapper";
import { Collection } from "@/components/profile-page/compound-collection";
import { LastReads } from "@/components/profile-page/last-read-list";
import { DataNotFoundIcon } from "@/components/svg";
import { useSearch } from "@/hooks/use-search";

const itemLists = [
  { title: "456", subtitle: "Sahih al-Bukhari", color: null },
  { title: "122", subtitle: "Sahih Muslim", color: null },
  { title: "387", subtitle: "Sunan Abu Dawud", color: null },
  { title: "234", subtitle: "Sunan an-Nasa'i", color: null },
  { title: "189", subtitle: "Sunan Ibn Majah", color: null },
  { title: "498", subtitle: "Jami` at-Tirmidhi", color: null },
  { title: "321", subtitle: "Musnad Ahmad", color: null },
  { title: "276", subtitle: "Sunan al-Darimi", color: null },
  { title: "154", subtitle: "Muwatta Imam Malik", color: null },
  { title: "432", subtitle: "Sunan al-Kufay", color: null },
  { title: "298", subtitle: "Sahih al-Targhib wa'l-Tarhib", color: null },
  { title: "176", subtitle: "Al-Adab al-Mufrad", color: null },
  { title: "354", subtitle: "Al-Mu'jam al-Awsat", color: null },
  { title: "412", subtitle: "Riyad as-Salihin", color: null },
  { title: "256", subtitle: "Al-Mishkat al-Masabih", color: null },
  { title: "134", subtitle: "Al-Arba'in an-Nawawiyah", color: null },
  { title: "378", subtitle: "Al-Mu'jam al-Kabir", color: null },
  { title: "212", subtitle: "Sunan al-Bayhaqi", color: null },
  { title: "468", subtitle: "Al-Mustadrak alaa al-Sahihayn", color: null },
  { title: "302", subtitle: "Al-Sunan al-Kubra", color: null },
  { title: "198", subtitle: "Al-Ihya Ulum al-Din", color: null },
  { title: "448", subtitle: "Al-Mawaqif", color: null },
  { title: "282", subtitle: "Kitab al-Tahdhib", color: null },
];

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { results, setSearchTerm } = useSearch(itemLists, { keys: ["title", "subtitle"] });
  const hasItems = itemLists.length > 0;

  return (
    <PageWrapper>
      <Collection>
        <Collection.Header title="Last Read">
          <Collection.Actions />
          <Collection.Search onChange={e => setSearchTerm(e.target.value)} />
        </Collection.Header>
        {hasItems && <LastReads list={results} />}
        {!hasItems && (
          <Collection.Empty message="No last read found">
            <DataNotFoundIcon />
          </Collection.Empty>
        )}
      </Collection>
    </PageWrapper>
  );
};

export default page;
