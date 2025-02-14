import { createContext, ReactNode, useContext } from "react";

interface ActionBarContextType {
  verseKey: string;
}

interface ActionBarProps {
  value: ActionBarContextType;
  children: ReactNode;
}

const ActionBarContext = createContext<ActionBarContextType | undefined>(undefined);

export function ActionBarProvider({ value, children }: ActionBarProps) {
  return <ActionBarContext.Provider value={value}>{children}</ActionBarContext.Provider>;
}

export const useActionBar = () => {
  const context = useContext(ActionBarContext);
  if (!context) {
    throw new Error("useActionBar must be used within an ActionBarProvider");
  }
  return context;
};
