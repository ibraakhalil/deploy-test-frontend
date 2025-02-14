import { BangladeshFlagIcon, IndiaFlagIcon, USAFlagIcon } from "@/components/svg";
import { CountryCodeComboboxOption } from "../select-country-code-combobox";

export const countryCodes: CountryCodeComboboxOption[] = [
  {
    id: "1",
    value: "+880",
    label: {
      icon: <BangladeshFlagIcon className="size-5" />,
      text: "+880",
    },
  },
  {
    id: "2",
    value: "+380",
    label: {
      icon: <IndiaFlagIcon className="size-5" />,
      text: "+380",
    },
  },
  {
    id: "3",
    value: "+990",
    label: {
      icon: <USAFlagIcon className="size-5" />,
      text: "+990",
    },
  },
  {
    id: "4",
    value: "+850",
    label: {
      icon: <BangladeshFlagIcon className="size-5" />,
      text: "+850",
    },
  },
  {
    id: "5",
    value: "+870",
    label: {
      icon: <BangladeshFlagIcon className="size-5" />,
      text: "+870",
    },
  },
];
