"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { createContext, Fragment, ReactNode, useCallback, useContext, useEffect, useRef, useState } from "react";
import { cn } from "shadcn/lib/utils";

interface ScrollContextType {
  containerRef: React.RefObject<HTMLDivElement>;
  isDragging: React.MutableRefObject<boolean>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scroll: (direction: "left" | "right") => void;
  checkScroll: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context) return context;
  throw new Error("Scroll components must be used within a Scroll component");
}

export function Scroll(props: { children: React.ReactNode }): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const checkScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const buffer = 1;
      setCanScrollLeft(scrollLeft > buffer);
      setCanScrollRight(Math.abs(scrollWidth - clientWidth - scrollLeft) > buffer);
    }
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const scrollAmount = direction === "left" ? -200 : 200;
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
        setTimeout(checkScroll, 300);
      }
    },
    [checkScroll]
  );

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  return (
    <ScrollContext.Provider
      value={{
        containerRef,
        isDragging,
        canScrollLeft,
        canScrollRight,
        scroll,
        checkScroll,
      }}
    >
      <div className="relative cursor-pointer">{props.children}</div>
    </ScrollContext.Provider>
  );
}

function ScrollContent(props: { children: React.ReactNode }): JSX.Element {
  const { containerRef, isDragging, checkScroll } = useScrollContext();

  function handleMouseDown(): void {
    isDragging.current = true;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  }

  function handleMouseUp(): void {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "pointer";
    }
  }

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>): void {
    if (!isDragging.current || !containerRef.current) return;
    containerRef.current.scrollLeft -= event.movementX;
    checkScroll();
  }

  return (
    <div
      ref={containerRef}
      className="horizontal-scroll select-none overflow-x-auto"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onScroll={checkScroll}
    >
      <div>{props.children}</div>
    </div>
  );
}

ScrollContent.displayName = "Scroll.Content";
Scroll.Content = ScrollContent;

function ScrollButton(props: { direction: "left" | "right"; className?: string }) {
  const { canScrollLeft, canScrollRight, scroll } = useScrollContext();
  const isLeft = props.direction === "left";
  const canScroll = isLeft ? canScrollLeft : canScrollRight;

  if (!canScroll) return null;

  return (
    <button
      onClick={() => scroll(props.direction)}
      className={cn(
        "absolute top-1/2 flex h-full w-[60px] -translate-y-1/2 transform items-center from-primary-bg via-primary-bg to-transparent p-2 text-icon-color",
        { "left-0 justify-start bg-gradient-to-r": isLeft, "right-0 justify-end bg-gradient-to-l": !isLeft },
        props.className
      )}
    >
      {isLeft ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
}

ScrollButton.displayName = "Scroll.Button";
Scroll.Button = ScrollButton;

Scroll.Controllers = function ScrollControllers({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Fragment>
      {children}
      <Scroll.Button direction="left" className={className} />
      <Scroll.Button direction="right" className={className} />
    </Fragment>
  );
};

export function HorizontalScrollView(props: { children: React.ReactNode; controllers?: boolean }) {
  return (
    <Scroll>
      <Scroll.Content>{props.children}</Scroll.Content>
      {props.controllers && (
        <Fragment>
          <Scroll.Button direction="left" />
          <Scroll.Button direction="right" />
        </Fragment>
      )}
    </Scroll>
  );
}

HorizontalScrollView.displayName = "HorizontalScrollView";
