import { Collection } from "@/components/profile-page/compound-collection";
import { TimerIcon, TrashBeenIcon } from "@/components/svg";
import { ComponentProps } from "react";
import { CollectionCard } from "@/components/cards/collection-card";

interface LastReadListProps extends ComponentProps<"div"> {
  list: { title: string; subtitle: string; color: string | null }[];
}

export function LastReads({ list }: LastReadListProps) {
  return (
    <Collection.CardWrapper>
      {list.map(lastRead => (
        <CollectionCard key={lastRead.title}>
          <CollectionCard.Head>
            <TimerIcon />
            <TrashBeenIcon className="absolute right-4 top-1/2 z-10 !size-5 max-tablet:-translate-y-1/2 tablet:top-4" />
          </CollectionCard.Head>
          <CollectionCard.Body title={lastRead.title} subtitle={lastRead.subtitle} />
        </CollectionCard>
      ))}
    </Collection.CardWrapper>
  );
}
