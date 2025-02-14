interface WordProps {
  children?: React.ReactNode;
}

export function Word({ children }: WordProps) {
  return <span className="cursor-pointer hover:text-primary">{children}</span>;
}
