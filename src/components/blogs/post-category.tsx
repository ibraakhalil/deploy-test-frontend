/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "@/navigation";
import { ReactNode } from "react";
import { cn } from "shadcn/lib/utils";

interface PostListProps {
  data: any[];
  render: (item: any) => ReactNode;
}

interface TitleProps {
  title: string;
  link?: string;
  className?: string;
}

export function PostCategory({ children }: { children: ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

PostCategory.Title = function PostCategoryTitle({ title, link, className }: TitleProps) {
  return (
    <div className={cn("flex items-center gap-3 tablet:gap-4", className)}>
      <h2 className="text-body font-bold tablet:text-heading-4">{title}</h2>
      {link && <span className="h-4 w-[2px] bg-border-color tablet:h-5" />}
      {link && (
        <Link href={link} className="text-subtitle text-subtitle-color tablet:text-body">
          See More
        </Link>
      )}
    </div>
  );
};

PostCategory.PostList = function PostCategoryPostList({ data, render }: PostListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">{data.map(item => render(item))}</div>
  );
};
