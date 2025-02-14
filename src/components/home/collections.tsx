"use client";

import { CollectionCard } from "@/components/cards/collection-card";
import { HorizontalScrollView } from "@/components/common/horizontal-scroll";
import { Tab } from "@/components/common/tab";
import { ClockFillIcon, FolderIcon, PinIconAngularFill } from "@/components/svg";
import { Link } from "@/navigation";
import { cn } from "@/shadcn/lib/utils";
import { useCollectionModal } from "@/stores/use-collection-modal";

function LastReadCards() {
  return (
    <HorizontalScrollView controllers>
      <div className="flex items-center gap-4">
        {new Array(15).fill(0).map(_ => (
          <CollectionCard key={_}>
            <CollectionCard.Head>
              <ClockFillIcon className="size-6" />
            </CollectionCard.Head>
            <CollectionCard.Body title="Last Read" subtitle="Ayah 2" />
          </CollectionCard>
        ))}
      </div>
    </HorizontalScrollView>
  );
}

function BookmarkCards() {
  const { bookmarks } = useCollectionModal();

  return (
    <HorizontalScrollView controllers>
      <div className="flex items-center gap-4">
        {bookmarks.map(bookmark => (
          <Link key={bookmark.id} href={`/profile/bookmarks/${bookmark.id}`}>
            <CollectionCard>
              <CollectionCard.Head>
                <FolderIcon color={bookmark.color} />
              </CollectionCard.Head>
              <CollectionCard.Body title={bookmark.name} subtitle={`Total Ayah: ${bookmark.items.length}`} />
            </CollectionCard>
          </Link>
        ))}
      </div>
    </HorizontalScrollView>
  );
}

function PinsCards() {
  return (
    <HorizontalScrollView controllers>
      <div className="flex items-center gap-4">
        {new Array(15).fill(0).map(_ => (
          <CollectionCard key={_}>
            <CollectionCard.Head>
              <PinIconAngularFill color="#ff4fff" />
            </CollectionCard.Head>
            <CollectionCard.Body title="Pin" subtitle="Surah 1" />
          </CollectionCard>
        ))}
      </div>
    </HorizontalScrollView>
  );
}

export function Collections({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[--container-width] flex-col items-center gap-4 overflow-hidden px-4 tablet:gap-[28px] tablet:px-10 desktop:px-0",
        className
      )}
    >
      <Tab defaultTab={0} animationType="vertical">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-heading-4 font-bold laptop:text-heading-3">Collection</h1>
          <Tab.Trigger className="w-[330px]" />
        </div>
        <Tab.Content>
          <Tab.ContentItem label="Last Read">
            <LastReadCards />
          </Tab.ContentItem>
          <Tab.ContentItem label="Bookmark">
            <BookmarkCards />
          </Tab.ContentItem>
          <Tab.ContentItem label="Pin">
            <PinsCards />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </div>
  );
}
