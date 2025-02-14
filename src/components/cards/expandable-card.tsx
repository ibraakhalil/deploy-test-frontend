import { cn } from "@/shadcn/lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";

interface ExpandableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
}

export function ExpandableCard({ children, value, ...props }: ExpandableCardProps) {
  return (
    <AccordionItem
      value={value}
      {...props}
      className={cn("group rounded-md hover:bg-primary-7 data-[state=open]:bg-primary-7", props.className)}
    >
      {children}
    </AccordionItem>
  );
}

ExpandableCard.Trigger = function ExpandableCardTrigger({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AccordionTrigger
      className={cn(
        "group/expand mx-3 flex items-center gap-3 border-b-primary-7 data-[state=open]:border-b",
        props.className
      )}
    >
      {children}
    </AccordionTrigger>
  );
};

ExpandableCard.Content = function ExpandableCardContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AccordionContent className={cn("max-h-[240px] overflow-auto p-3", props.className)}>{children}</AccordionContent>
  );
};
