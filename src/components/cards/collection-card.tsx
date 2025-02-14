import { IconContainer } from "@/components/common/icon-container";
import { ThreeDotIcon } from "@/components/svg";
import { motion } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "shadcn/components/ui/dropdown-menu";
import { cn } from "shadcn/lib/utils";

interface CollectionCardProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}
interface CollectionCardHeadProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}
interface CollectionCardActionsProps extends React.ComponentProps<"div"> {}
interface CollectionCardBodyProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
}

export function CollectionCard({ children, className }: CollectionCardProps) {
  return (
    <motion.div>
      <div
        className={cn(
          "flex min-w-[240px] gap-5 rounded-md border border-border-color p-3 duration-200 hover:bg-secondary-bg",
          "relative isolate tablet:flex-col",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}

CollectionCard.Head = function CollectionCardHead({ children, className }: CollectionCardHeadProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between tablet:items-start",
        "[&>svg]:size-9 [&>svg]:text-icon-color",
        className
      )}
    >
      {children}
    </div>
  );
};

CollectionCard.Actions = function CollectionCardActions({ children, ...props }: CollectionCardActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "absolute right-3 top-1/2 isolate z-10 max-tablet:-translate-y-1/2 tablet:top-2.5",
          props.className
        )}
        asChild
      >
        <IconContainer hover className="max-tablet:rotate-90">
          <ThreeDotIcon className="!text-icon-color-50" />
        </IconContainer>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">{children}</DropdownMenuContent>
    </DropdownMenu>
  );
};

CollectionCard.Body = function CollectionCardBody({ className, title, subtitle }: CollectionCardBodyProps) {
  return (
    <div className={cn("flex w-[70%] flex-col tablet:w-[90%]", className)}>
      <h3 className="line-clamp-1 break-all text-title font-normal text-pure-color">{title}</h3>
      <p className="text-subtitle capitalize text-subtitle-color">{subtitle}</p>
    </div>
  );
};
