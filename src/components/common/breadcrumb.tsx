"use client";

import { HomeBreadcrumbsIcon } from "@/components//svg";
import { usePathname } from "@/navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/shadcn/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import { pathToLinkArray } from "@/utils/path-to-links";
import React, { Fragment, HTMLAttributes, useMemo } from "react";
import { cn } from "shadcn/lib/utils";

interface BreadcrumbLinkProps extends HTMLAttributes<HTMLDivElement> {}

const SHOW_ITEMS_COUNT = 2;

function BreadcrumbLinksComponent(props: BreadcrumbLinkProps) {
  const pathname = usePathname();
  const links = pathToLinkArray(pathname);

  const { visibleItems, hiddenItems } = useMemo(() => {
    if (links.length <= SHOW_ITEMS_COUNT) {
      return { visibleItems: links, hiddenItems: [] };
    }
    return {
      visibleItems: links.slice(-SHOW_ITEMS_COUNT),
      hiddenItems: links.slice(0, -SHOW_ITEMS_COUNT),
    };
  }, [links]);

  return (
    <Breadcrumb>
      <BreadcrumbList className={cn("text-subtitle-color-secondary", props.className)}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-2.5 text-subtitle desktop:text-base">
            <HomeBreadcrumbsIcon className="size-[18px] text-primary" />
            <span className="font-semibold">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {hiddenItems.length > 0 && (
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-subtitle desktop:text-base">
                <BreadcrumbEllipsis className="size-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {hiddenItems.map(({ label, href }) => (
                  <DropdownMenuItem key={label}>
                    <BreadcrumbLink href={href} className="flex w-full px-3 py-1 text-subtitle desktop:text-base">
                      {label}
                    </BreadcrumbLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
        )}

        {visibleItems.map(({ label, href }, index) => (
          <Fragment key={href}>
            {index > 0 || hiddenItems.length > 0 ? <BreadcrumbSeparator /> : null}
            <BreadcrumbItem>
              <BreadcrumbLink href={href} className="text-subtitle desktop:text-base">
                {label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export const BreadcrumbLinks = React.memo(BreadcrumbLinksComponent);
