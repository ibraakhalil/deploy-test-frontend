import { cn } from "@/shadcn/lib/utils";
import { getFirstLetters } from "@/utils/get-first-letters";

interface ListCountCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
interface ListShortNameProps {
  children?: React.ReactNode;
  className?: string;
  title?: string | undefined;
}

interface ListTextBodyProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function ListCard({ children, ...props }: ListCountCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "group/card flex h-[66px] w-full min-w-[200px] cursor-pointer select-none items-center gap-4 overflow-hidden rounded-md border border-border-color px-4 hover:bg-primary-7",
        props.className
      )}
    >
      {children}
    </div>
  );
}

ListCard.Body = function ListTextBody({ title, subtitle, ...props }: ListTextBodyProps) {
  return (
    <div className={cn("flex-shrink-0 text-start", props.className)}>
      <h3 className="text-base font-medium text-pure-color desktop:text-title">{title}</h3>
      {subtitle && <p className="text-subtitle font-normal text-subtitle-color-secondary">{subtitle}</p>}
    </div>
  );
};

ListCard.ShortName = function ListShortName({ title = "", children, ...props }: ListShortNameProps) {
  return (
    <div
      className={cn(
        "flex size-[32px] min-h-8 min-w-8 rotate-45 items-center justify-center rounded-[6px] bg-secondary-bg group-hover/card:bg-primary",
        props.className
      )}
    >
      <span className="-rotate-45 text-subtitle font-medium text-subtitle-color group-hover/card:text-primary-fg">
        {getFirstLetters(title) || children}
      </span>
    </div>
  );
};

// group-data-[state=open]/expand:  use for only expandable card
ListCard.Count = function ListCount({ count, ...props }: { count: number; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[26px] w-[44px] items-center justify-center rounded-full bg-secondary-bg group-hover/card:bg-primary group-data-[state=open]/expand:bg-primary",
        props.className
      )}
    >
      <span className="text-subtitle font-medium text-subtitle-color group-hover/card:text-primary-fg group-data-[state=open]/expand:text-primary-fg">
        {count < 10 ? `0${count}` : `${count}`}
      </span>
    </div>
  );
};

ListCard.Calligraphy = function ListSurahNameCalligraphy({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex w-full justify-end font-[calligraphy] text-heading-5 text-subtitle-color">{children}</span>
  );
};
