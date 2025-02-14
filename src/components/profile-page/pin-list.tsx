import { CollectionCard } from "@/components/cards/collection-card";
import { Collection } from "@/components/profile-page/compound-collection";
import { PinIconAngularFill } from "@/components/svg";
import { ComponentProps } from "react";

interface PinListProps extends ComponentProps<"div"> {
  pins: {
    title: string;
    subtitle: string;
    color: string;
  }[];
}

export function PinList({ pins }: PinListProps) {
  return (
    <Collection.CardWrapper>
      {pins.map(pin => (
        <CollectionCard key={pin.title}>
          <CollectionCard.Head>
            <PinIconAngularFill />
            <CollectionCard.Actions>{/* <PinActionDropdown /> */}</CollectionCard.Actions>
          </CollectionCard.Head>
          <CollectionCard.Body title={pin.title} subtitle={pin.subtitle} />
        </CollectionCard>
      ))}
    </Collection.CardWrapper>
  );
}
