"use client";

import { Combobox, ComboboxOption } from "shadcn/components/ui/combobox";

// for example usage, remove this example code -
const options: ComboboxOption[] = Array.from({ length: 100 }, (_, i) => [
  { value: `next.js+${i + 1}`, label: "Next.js" },
  { value: `sveltekit+${i + 1}`, label: "SvelteKit SvelteKit SvelteKit SvelteKit SvelteKit" },
  { value: `nuxt.js+${i + 1}`, label: "Nuxt.js" },
  { value: `remix+${i + 1}`, label: "Remix" },
  { value: `astro+${i + 1}`, label: "Astro" },
]).flat();

export function ComboboxDemo() {
  return (
    <Combobox
      options={options}
      placeholder="Select framework..."
      emptyMessage="No framework found."
      // eslint-disable-next-line no-console
      onSelect={value => console.log(`Selected: ${value}`)}
    />
  );
}
