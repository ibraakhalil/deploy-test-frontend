import { IconContainer } from "@/components/common/icon-container";
import { forwardRef, Fragment } from "react";
import { cn } from "shadcn/lib/utils";

export interface ActionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  label?: string;
  hover?: boolean;
}

export const ActionTrigger = forwardRef<HTMLButtonElement, ActionTriggerProps>(({ children, label, ...props }, ref) => {
  return (
    <Fragment>
      {label && (
        <button
          {...props}
          ref={ref}
          className={cn(
            "flex h-11 w-full items-center gap-5 rounded-sm px-5 py-2 pl-3 duration-300 [&>svg]:size-[20px] [&>svg]:text-icon-color tablet:[&>svg]:size-[18px]",
            { "hover:bg-secondary-bg": props.hover },
            props.className
          )}
          aria-label={label}
        >
          {children}
          <p className="text-title text-subtitle-color-secondary tablet:text-base">{label}</p>
        </button>
      )}
      {!label && (
        <IconContainer ref={ref} hover={props.hover} {...props}>
          {children}
        </IconContainer>
      )}
    </Fragment>
  );
});
ActionTrigger.displayName = "ActionTrigger";
