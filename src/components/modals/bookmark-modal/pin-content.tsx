import { RadioButton } from "@/components/common/radio-btn";
import { SearchInput } from "@/components/common/search-input";
import { PinIconAngularFill } from "@/components/svg";
import { useState } from "react";

const PinItems = [
  { id: "1", pinName: "Pin 1", pinColor: "#FF5733" },
  { id: "2", pinName: "Pin 2", pinColor: "#33FF57" },
  { id: "3", pinName: "Pin 3", pinColor: "#3357FF" },
  { id: "4", pinName: "Pin 4", pinColor: "#FF33A6" },
  { id: "5", pinName: "Pin 5", pinColor: "#FF8C33" },
  { id: "6", pinName: "Pin 6", pinColor: "#33FFC4" },
  { id: "7", pinName: "Pin 7", pinColor: "#FF3333" },
  { id: "8", pinName: "Pin 8", pinColor: "#8C33FF" },
  { id: "9", pinName: "Pin 9", pinColor: "#33FF8C" },
  { id: "10", pinName: "Pin 10", pinColor: "#FF338C" },
  { id: "11", pinName: "Pin 11", pinColor: "#338CFF" },
  { id: "12", pinName: "Pin 12", pinColor: "#FF5733" },
  { id: "13", pinName: "Pin 13", pinColor: "#57FF33" },
  { id: "14", pinName: "Pin 14", pinColor: "#5733FF" },
  { id: "15", pinName: "Pin 15", pinColor: "#FFC433" },
  { id: "16", pinName: "Pin 16", pinColor: "#33C4FF" },
  { id: "17", pinName: "Pin 17", pinColor: "#C433FF" },
  { id: "18", pinName: "Pin 18", pinColor: "#33FF57" },
  { id: "19", pinName: "Pin 19", pinColor: "#FF5733" },
  { id: "20", pinName: "Pin 20", pinColor: "#33FF8C" },
];

export function PinContent() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedPin, setSelectedPin] = useState("");
  const filteredPins = PinItems.filter(pin => pin.pinName.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="space-y-3">
      <div className="px-[--padding-x]">
        <SearchInput onChange={e => setSearchValue(e.target.value)} className="rounded-sm" placeholder="Search Pins" />
      </div>

      <div className="relative h-[--height] overflow-y-auto px-[--padding-x]">
        {filteredPins.map(pin => (
          <label key={pin.id} htmlFor={pin.id} className="flex cursor-pointer select-none items-center gap-4 py-2.5">
            <RadioButton
              id={pin.id}
              checked={selectedPin === pin.pinName}
              onChange={() => setSelectedPin(pin.pinName)}
            />
            <div className="flex items-center gap-2.5">
              <PinIconAngularFill className="h-7 w-7" color={pin.pinColor} />
              <span className="text-base text-pure-color">{pin.pinName}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
