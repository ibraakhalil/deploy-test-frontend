import { Tab } from "@/components/common/tab";
import { FullSurahRepeat } from "./repeat-full-surah";
import { VerseRangeRepeat } from "./repeat-verse-range";
import { SingleRepeat } from "./repeat-verse-single";

export function AudioRepeat() {
  return (
    <div className="[--padding-x:1.5rem]">
      <h3 className="py-5 text-center text-body font-bold max-tablet:hidden">Manage Repeat Settings</h3>
      <Tab defaultTab={0}>
        <div className="px-[calc(var(--padding-x)-3px)]">
          <Tab.Trigger />
        </div>
        <Tab.Content className="min-h-[300px] py-4">
          <Tab.ContentItem label="Single Verse">
            <SingleRepeat />
          </Tab.ContentItem>
          <Tab.ContentItem label="Range">
            <VerseRangeRepeat />
          </Tab.ContentItem>
          <Tab.ContentItem label="Full Surah">
            <FullSurahRepeat />
          </Tab.ContentItem>
        </Tab.Content>
      </Tab>
    </div>
  );
}
