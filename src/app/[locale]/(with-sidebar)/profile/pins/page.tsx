"use client";

import { PageWrapper } from "@/components/common/page-wrapper";
import { ActionItems, Collection } from "@/components/profile-page/compound-collection";
import { PinList } from "@/components/profile-page/pin-list";
import { PinNotFoundIcon } from "@/components/svg";
import { useSearch } from "@/hooks/use-search";

const itemLists = [
  { title: "Wind's Whispers", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Missing Sock", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Dreamland", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Silence's Song", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Time Journey", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Impossible Art", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Golden Key", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Everyday Magic", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Surface's Depth", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Stars' Language", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Belief's Power", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Color Symphony", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Unseen World", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Life's Rhythm", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Lost City", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Happiness Quest", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Infinite Glimpse", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Storytelling", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Talking Cactus", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Dancing Stars", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Whispers of Time", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Hidden Depths", subtitle: "total hadith: 23", color: "#737EE1" },
  { title: "Eternal Dance", subtitle: "total hadith: 23", color: "#737EE1" },
];

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { results, setSearchTerm } = useSearch(itemLists, { keys: ["title"] });
  const hasItems = itemLists.length > 0;

  return (
    <PageWrapper>
      <Collection>
        <Collection.Header title="All Pins">
          <Collection.Actions>
            <ActionItems />
          </Collection.Actions>
          <Collection.Search onChange={e => setSearchTerm(e.target.value)} />
        </Collection.Header>
        {hasItems && <PinList pins={results} />}
        {!hasItems && (
          <Collection.Empty message="You don’t have any Pins">
            <PinNotFoundIcon />
          </Collection.Empty>
        )}
      </Collection>
    </PageWrapper>
  );
};

export default page;
