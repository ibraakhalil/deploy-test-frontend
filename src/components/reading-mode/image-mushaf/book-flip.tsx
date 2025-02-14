/* eslint-disable @typescript-eslint/no-explicit-any */
import HtmlBookFlip from "react-pageflip";
import React, { useImperativeHandle, useRef, forwardRef } from "react";
import { useMedia } from "react-use";

interface BookFlipProps {
  children: React.ReactNode[];
  onChange?: (data: number) => void;
  initialPage?: number;
  currentPage?: number;
}

export interface BookFlipRef {
  flip: (page: number) => void;
  prevFlip: () => void;
  nextFlip: () => void;
}

export const BookFlip = forwardRef<BookFlipRef, BookFlipProps>(({ children, onChange, ...props }, ref) => {
  const isMobile = useMedia("(max-width: 640px)", true);
  const bookRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    flip: (page: number) => {
      bookRef.current?.pageFlip()?.flip(page);
    },
    prevFlip: () => {
      bookRef.current?.pageFlip()?.flipPrev();
    },
    nextFlip: () => {
      bookRef.current?.pageFlip()?.flipNext();
    },
  }));

  const handleFlip = (pageData: number) => {
    if (onChange) onChange(pageData);
  };

  return (
    <>
      {/* @ts-expect-error: BookFlip does not have TypeScript definitions */}
      <HtmlBookFlip
        ref={bookRef}
        width={300}
        height={480}
        maxShadowOpacity={0.5}
        size="stretch"
        startPage={props.initialPage || 1}
        minWidth={isMobile ? 360 : 400}
        flippingTime={500}
        className="h-[calc(100%-(var(--page-nav-height)))]"
        showPageCorners={false}
        onFlip={e => handleFlip(e.data as number)}
        {...props}
      >
        {children}
      </HtmlBookFlip>
    </>
  );
});

BookFlip.displayName = "BookFlip";
