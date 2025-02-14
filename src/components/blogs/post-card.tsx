import React from "react";
import Image from "next/image";
import { cn } from "shadcn/lib/utils";

interface PostCardProps {
  className?: string;
  children: React.ReactNode;
}

interface ImageProps {
  src: string;
  alt: string;
}

interface TitleProps {
  children: React.ReactNode;
}

interface MetaProps {
  children: React.ReactNode;
}

export function PostCard({ className, children }: PostCardProps) {
  return <div className={cn("bg-card-bg", className)}>{children}</div>;
}

PostCard.Thumbnail = function PostImage({ src, alt }: ImageProps) {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-md">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

PostCard.Title = function PostMetaText({ children }: TitleProps) {
  return <h3 className="my-2 line-clamp-2 text-title font-semibold text-pure-color">{children}</h3>;
};

PostCard.Meta = function PostMeta({ children }: MetaProps) {
  return <div className="pb-4 text-subtitle text-subtitle-color">{children}</div>;
};
