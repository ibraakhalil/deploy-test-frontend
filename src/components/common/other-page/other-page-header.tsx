import { cn } from "shadcn/lib/utils";

interface HeaderInfoProps extends React.ComponentProps<"div"> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function OtherPageHeader(props: HeaderInfoProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center justify-center bg-secondary-bg px-[--padding-x] py-5 text-center laptop:mx-[--padding-x]",
        props.className
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-md bg-primary">{props.icon}</div>
      <h1 className="mt-3 text-body font-bold text-pure-color tablet:mt-6 desktop:text-heading-6">{props.title}</h1>
      <p className="mt-2.5 text-subtitle text-subtitle-color-secondary desktop:text-base">{props.description}</p>
    </div>
  );
}
