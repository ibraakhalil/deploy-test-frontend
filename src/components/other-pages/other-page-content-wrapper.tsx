import { cn } from "shadcn/lib/utils";

interface OtherPageContentWrapperProps extends React.ComponentProps<"section"> {}

export function OtherPageContentWrapper(props: OtherPageContentWrapperProps) {
  return <section className={cn("space-y-6 px-[--padding-x] py-6", props.className)}>{props.children}</section>;
}
