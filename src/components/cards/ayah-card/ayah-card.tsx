import { ActionBar } from "@/components/cards/ayah-card/ayah-card-actionbar";
import { ActionsDrawer } from "@/components/cards/ayah-card/ayah-card-actions-drawer";
import { AyahCardVariables } from "@/components/cards/ayah-card/ayah-card-variables";
import React, { ReactNode } from "react";
import { cn } from "shadcn/lib/utils";

interface AyahCardProps {
  children: React.ReactNode;
  className?: string;
}

interface AyahCardHeadProps {
  children?: React.ReactNode;
  info: number | string;
}

export function AyahCard({ children, className }: AyahCardProps) {
  return (
    <AyahCardVariables>
      <div className={cn("space-y-3 overflow-hidden border-b border-border-color py-6", className)}>{children}</div>
    </AyahCardVariables>
  );
}

AyahCard.Head = function AyahCardHead({ children, info }: AyahCardHeadProps) {
  return (
    <div className="bg-primary-600 text-white flex items-center justify-between">
      <h3 className="text-base font-semibold text-primary tablet:text-body">{info}</h3>
      <div className="flex items-center gap-3">
        {children}
        <div className="tablet:hidden">
          <ActionsDrawer />
        </div>
      </div>
    </div>
  );
};

AyahCard.Body = function AyahCardBody({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-7 tablet:grid-cols-[auto_1fr]">{children}</div>;
};

AyahCard.Content = function AyahCardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(className)}>{children}</div>;
};

export function AyahCardExample() {
  return (
    <AyahCard>
      <AyahCard.Head info="2:5" />
      <AyahCard.Body>
        <ActionBar verseKey="1:1" />
        <AyahCard.Content>
          content
          {/* <ArabicContent /> */}
          {/* <AyahTranslations /> */}
        </AyahCard.Content>
      </AyahCard.Body>
    </AyahCard>
  );
}
