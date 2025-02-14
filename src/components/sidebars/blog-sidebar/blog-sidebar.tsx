"use client";

import { Tab } from "@/components/common/tab/tab";
import { BlogCategoryList } from "@/components/sidebars/blog-sidebar/blog-category-list";

export function BlogSidebar() {
  return (
    <Tab defaultTab={0}>
      <Tab.Trigger className="mb-4 me-[--gap-end] ms-[--gap-start]" />
      <Tab.Content>
        <Tab.ContentItem label="Categories">
          <BlogCategoryList />
        </Tab.ContentItem>
      </Tab.Content>
    </Tab>
  );
}
