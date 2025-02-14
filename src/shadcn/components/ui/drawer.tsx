"use client";

import { cn } from "@/shadcn/lib/utils";
import * as React from "react";
import useMeasure from "react-use-measure";
import { Drawer as DrawerPrimitive } from "vaul";

const Drawer = ({ shouldScaleBackground = false, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-[black]/50", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const [contentRef, rect] = useMeasure({ debounce: 20 });

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        onOpenAutoFocus={e => e.preventDefault()}
        onCloseAutoFocus={e => e.preventDefault()}
        style={{ height: rect.height ? `${rect.height}px` : "auto" }}
        className={cn("pointer-events-none fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col", className)}
        {...props}
      >
        <div className="pointer-events-auto overflow-hidden rounded-t-lg bg-card-bg" ref={contentRef}>
          <div className="no-scrollbar max-h-[calc(var(--fs)*0.9)] overflow-y-auto">{children}</div>
        </div>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

export { Drawer, DrawerClose, DrawerContent, DrawerOverlay, DrawerPortal, DrawerTrigger };
