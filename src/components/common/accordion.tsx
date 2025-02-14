import { DropDownArrowIcon, TextBoxIcon } from "@/components/svg";
import { AccordionContent, AccordionItem, AccordionTrigger } from "shadcn/components/ui/accordion";
import { cn } from "shadcn/lib/utils";

interface SettingsAccordionProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ElementType;
  className?: string;
}

export function SettingAccordion({ children, title, icon, className }: SettingsAccordionProps) {
  const Icon = icon || TextBoxIcon;

  return (
    <AccordionItem value={title} className="h-full overflow-hidden">
      <AccordionTrigger className="group w-full pe-[--gap-end] ps-[--gap-start] [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-primary">
        <div className="flex w-full items-center gap-4">
          <Icon className="size-5 text-primary group-data-[state=open]:text-primary" />
          <h3 className="text-title group-data-[state=open]:font-semibold">{title}</h3>
        </div>
        <DropDownArrowIcon className="size-4 shrink-0 transition-transform duration-200" />
      </AccordionTrigger>
      <AccordionContent className={cn("h-full overflow-hidden pt-3", className)}>{children}</AccordionContent>
    </AccordionItem>
  );
}
