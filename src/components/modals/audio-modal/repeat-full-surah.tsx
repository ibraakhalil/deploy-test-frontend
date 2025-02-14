import React, { useState } from "react";
import { CounterRow } from "./repeat-verse-single";

export function FullSurahRepeat() {
  const [playRange, setPlayRange] = useState(0);
  const [delayBetweenVerse, setDelayBetweenVerse] = useState(0);
  const [repeatEach, setRepeatEach] = useState(0);

  return (
    <div className="space-y-4 px-[--padding-x]">
      <div className="space-y-2">
        <CounterRow label="Play Range" value={playRange} setValue={setPlayRange} min={0} max={9} showInfinity />
        <CounterRow
          label="Repeat Each Verse"
          value={repeatEach}
          setValue={setRepeatEach}
          min={0}
          max={9}
          showInfinity
        />
        <CounterRow label="Delay Between Verse" value={delayBetweenVerse} setValue={setDelayBetweenVerse} />
      </div>
    </div>
  );
}
