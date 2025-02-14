import copy from "copy-to-clipboard";

interface IconComponentProps {
  iconName: string;
  Icon: React.ReactNode;
}

interface IconTableProps {
  children: React.ReactNode;
  iconFamily: string;
}

export function IconComponent({ iconName, Icon }: IconComponentProps) {
  return (
    <div
      className="cursor-pointer rounded-lg border duration-300 hover:scale-105"
      onClick={() => {
        copy(`<${iconName} />`);
      }}
    >
      <div className="whitespace-nowrap p-3 text-icon-color">{Icon}</div>
    </div>
  );
}

export function IconFamily({ children, iconFamily }: IconTableProps) {
  return (
    <div className="select-none">
      <h4 className="my-5 rounded-lg bg-primary/20 p-3 text-center text-xl font-bold">{iconFamily}</h4>
      <div className="flex flex-wrap gap-5">{children}</div>
    </div>
  );
}
