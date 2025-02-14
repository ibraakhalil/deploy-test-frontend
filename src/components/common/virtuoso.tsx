"use client";

import React, { forwardRef, useCallback } from "react";
import { Virtuoso as VS, VirtuosoHandle, VirtuosoProps } from "react-virtuoso";

export const Virtuoso = forwardRef(function Virtuoso<T>(
  {
    items,
    render,
    style,
    ...props
  }: Omit<VirtuosoProps<T, unknown>, "data" | "itemContent"> & {
    items: T[];
    render: (index: number, item: T) => React.ReactNode;
  },
  ref: React.Ref<VirtuosoHandle>
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const itemContent = useCallback((index: number) => render(index, items[index]), [items]);

  return (
    <VS
      style={{ height: "100%", width: "100%", ...style }}
      data={items}
      totalCount={items.length}
      itemContent={itemContent}
      ref={ref}
      {...props}
    />
  );
});
