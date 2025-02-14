import { toast } from "react-hot-toast";
import { cn } from "shadcn/lib/utils";
import { CopySuccessIcon, DeleteIcon, InfoIcon3 } from "@/components/svg";

export interface NotifyProps {
  title: string;
  subtitle?: string;
}

interface NotifyConfigType {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  defaultTitle?: string;
}

type NotifyType = "copy" | "success" | "info" | "delete" | "error";

// Configuration mapping for different notification types
const notifyConfig: Record<NotifyType, NotifyConfigType> = {
  copy: {
    icon: CopySuccessIcon,
    bgColor: "#039855",
  },
  success: {
    icon: CopySuccessIcon,
    bgColor: "#039855",
  },
  info: {
    icon: InfoIcon3,
    bgColor: "#039855",
  },
  delete: {
    icon: DeleteIcon,
    bgColor: "#D92D20",
  },
  error: {
    icon: InfoIcon3,
    bgColor: "#D92D20",
    defaultTitle: "Error",
  },
};

// Generic notification function
function showNotify(type: NotifyType, props: NotifyProps) {
  const { icon: Icon, bgColor, defaultTitle } = notifyConfig[type];
  const title = props.title || defaultTitle || "";
  toast.remove();

  return toast.custom(t => (
    <div
      className={cn(
        "z-50 mr-[var(--removed-body-scroll-bar-size,0px)] flex w-[280px] items-center gap-4 overflow-hidden rounded-sm p-3 py-4 text-primary-fg",
        t.visible ? "animate-toast-enter" : "animate-toast-leave"
      )}
      style={{ backgroundColor: bgColor }}
    >
      <Icon className="size-9 flex-shrink-0" />
      <div className="flex w-full flex-col gap-1">
        <p className="line-clamp-1 w-full text-sm font-bold">{title}</p>
        {props.subtitle && <p className="line-clamp-2 break-words text-xs">{props.subtitle}</p>}
      </div>
    </div>
  ));
}

export function Toast(props: NotifyProps) {
  return showNotify("success", props);
}

Toast.copy = function copyNotify(props: NotifyProps) {
  return showNotify("copy", props);
};

Toast.success = function successNotify(props: NotifyProps) {
  return showNotify("success", props);
};

Toast.info = function infoNotify(props: NotifyProps) {
  return showNotify("info", props);
};

Toast.delete = function deleteNotify(props: NotifyProps) {
  return showNotify("delete", props);
};

Toast.error = function errorNotify(props: NotifyProps) {
  return showNotify("error", props);
};
