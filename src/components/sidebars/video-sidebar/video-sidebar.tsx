"use client";

import { Tab } from "@/components/common/tab/tab";
import { VideoCategoryList } from "@/components/sidebars/video-sidebar/video-category-list";

export function VideoSidebar() {
  return (
    <Tab defaultTab={0}>
      <Tab.Trigger className="mb-4 me-[--gap-end] ms-[--gap-start]" />
      <Tab.Content>
        <Tab.ContentItem label="Categories">
          <VideoCategoryList />
        </Tab.ContentItem>
      </Tab.Content>
    </Tab>
  );
}
