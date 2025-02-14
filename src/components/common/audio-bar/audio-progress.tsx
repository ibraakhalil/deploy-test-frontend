import { Slider } from "shadcn/components/ui/slider";

export function AudioProgress() {
  return (
    <Slider
      defaultValue={[33]}
      max={100}
      step={1}
      className="absolute start-0 top-0 w-full -translate-y-1/2 transform [&>.slider-track]:bg-icon-color-10"
    />
  );
}
