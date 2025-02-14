import { cn } from "shadcn/lib/utils";

interface ParagraphProps extends React.ComponentProps<"div"> {}
export interface ClassAndChildrenProps {
  children: React.ReactNode;
  className?: string;
}
export function Paragraph(props: ParagraphProps) {
  return (
    <div {...props} className={cn("", props.className)}>
      {props.children}
    </div>
  );
}

Paragraph.Title = function Title({ title, className }: { title: string; className?: string }) {
  return (
    <h4 className={cn("mb-1 text-subtitle font-bold text-pure-color tablet:text-base desktop:text-body", className)}>
      {title}
    </h4>
  );
};

Paragraph.P = function Description({ children, className }: ClassAndChildrenProps) {
  return (
    <p className={cn("text-subtitle text-subtitle-color-secondary tablet:text-base desktop:text-body", className)}>
      {children}
    </p>
  );
};

Paragraph.DescriptionWrapper = function DescriptionWrapper({ children, className }: ClassAndChildrenProps) {
  return <div className={cn("space-y-2.5", className)}>{children}</div>;
};

Paragraph.ListWrapper = function ListWrapper({ children, className }: ClassAndChildrenProps) {
  return <ul className={cn("list-disc space-y-1 pl-5 marker:text-pure-color", className)}>{children}</ul>;
};

Paragraph.ListItem = function ListItem({ children, className }: ClassAndChildrenProps) {
  return (
    <li className={cn("text-subtitle text-subtitle-color-secondary tablet:text-base desktop:text-body", className)}>
      {children}
    </li>
  );
};
