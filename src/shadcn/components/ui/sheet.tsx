"use client";

import { cn } from "@/shadcn/lib/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-[black]/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-card-bg shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        start:
          "inset-y-0 ltr:left-0 rtl:right-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=closed]:rtl:slide-out-to-right data-[state=open]:slide-in-from-left data-[state=open]:rtl:slide-in-from-right rounded-e-none min-[480px]:rounded-e-lg",
        end: "inset-y-0 rtl:left-0 ltr:right-0 h-full w-3/4 data-[state=closed]:ltr:slide-out-to-right data-[state=open]:ltr:slide-in-from-right data-[state=closed]:rtl:slide-out-to-left data-[state=open]:rtl:slide-in-from-left rounded-s-none min-[480px]:rounded-s-lg",
      },
    },
    defaultVariants: {
      side: "end",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "end", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        onOpenAutoFocus={e => e.preventDefault()}
        className={cn(
          sheetVariants({ side }),
          "w-full overflow-x-hidden [--gap-end:1rem] [--gap-start:1rem] min-[480px]:w-[340px]",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute top-[18px] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-border-color focus:ring-offset-2 disabled:pointer-events-none ltr:right-4 rtl:left-4">
          <X className="size-5" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetClose, SheetContent, SheetOverlay, SheetPortal, SheetTrigger };
