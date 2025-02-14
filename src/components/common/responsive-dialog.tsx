"use client";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as React from "react";
import { useMedia } from "react-use";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "shadcn/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "shadcn/components/ui/drawer";
import { cn } from "shadcn/lib/utils";
import { Drawer as DrawerPremitive } from "vaul";

type ResponsiveDialogProps = React.ComponentProps<typeof Dialog> & { nested?: boolean };

type ResponsiveDialogContextType = {
  isDesktop: boolean;
  close: () => void;
};

const ResponsiveDialogContext = React.createContext<ResponsiveDialogContextType | undefined>(undefined);

export function useResponsiveDialog() {
  const context = React.useContext(ResponsiveDialogContext);
  if (context) return context;
  throw new Error("useResponsiveDialog must be used within ResponsiveDialog");
}

export function ResponsiveDialog({ children, nested = false, ...props }: ResponsiveDialogProps) {
  const isDesktop = useMedia("(min-width: 768px)", true);
  const [open, setOpen] = React.useState(false);
  const Component = isDesktop ? Dialog : nested ? DrawerPremitive.NestedRoot : Drawer;

  const close = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ResponsiveDialogContext.Provider value={{ isDesktop, close }}>
      <Component disablePreventScroll {...props} open={open} onOpenChange={setOpen}>
        {children}
      </Component>
    </ResponsiveDialogContext.Provider>
  );
}

type ResponsiveDialogTriggerProps = React.ComponentPropsWithoutRef<typeof DialogTrigger>;

function ResponsiveDialogTrigger({ children, ...props }: ResponsiveDialogTriggerProps) {
  const { isDesktop } = useResponsiveDialog();
  const Trigger = isDesktop ? DialogTrigger : DrawerTrigger;
  return <Trigger {...props}>{children}</Trigger>;
}

ResponsiveDialogTrigger.displayName = "ResponsiveDialog.Trigger";
ResponsiveDialog.Trigger = ResponsiveDialogTrigger;

type ResponsiveDialogContentProps = React.ComponentPropsWithoutRef<typeof DialogContent> &
  React.ComponentPropsWithoutRef<typeof DrawerContent> & {
    children: React.ReactNode;
  };

function ResponsiveDialogContent({ children, className, ...props }: ResponsiveDialogContentProps) {
  const { isDesktop } = useResponsiveDialog();
  const Content = isDesktop ? DialogContent : DrawerContent;

  return (
    <Content
      className={cn(
        { "sm:max-w-[425px] no-scrollbar max-h-[calc(var(--fs)*0.95)] w-full transform-cpu overflow-auto": isDesktop },
        className
      )}
      {...props}
      autoFocus={false}
    >
      <VisuallyHidden.Root>
        <DialogTitle>No title</DialogTitle>
      </VisuallyHidden.Root>
      {children}
      <VisuallyHidden.Root>
        <DialogDescription>No description</DialogDescription>
      </VisuallyHidden.Root>
    </Content>
  );
}

ResponsiveDialogContent.displayName = "ResponsiveDialog.Content";
ResponsiveDialog.Content = ResponsiveDialogContent;

type ResponsiveDialogCloseProps = React.ComponentPropsWithoutRef<typeof DialogClose>;

function ResponsiveDialogClose({ children, ...props }: ResponsiveDialogCloseProps) {
  const { isDesktop } = useResponsiveDialog();
  const Close = isDesktop ? DialogClose : DrawerClose;

  return <Close {...props}>{children}</Close>;
}

ResponsiveDialogClose.displayName = "ResponsiveDialog.Close";
ResponsiveDialog.Close = ResponsiveDialogClose;

// Example usage: remove this code block
export function ExampleDialog() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialog.Trigger asChild>
        <button>Edit Profile</button>
      </ResponsiveDialog.Trigger>
      <ResponsiveDialog.Content>
        <div className="m-2 bg-primary-bg">
          <h1>Edit Profile</h1>
          <input className="bg-secondary-bg p-2" />
        </div>
        <ResponsiveDialog.Close className="w-full bg-[red]">Close</ResponsiveDialog.Close>
      </ResponsiveDialog.Content>
    </ResponsiveDialog>
  );
}
