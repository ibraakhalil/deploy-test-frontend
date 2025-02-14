"use client";

import { ModalButton } from "@/components/common/buttons";
import { useState } from "react";
import { useResponsiveDialog } from "@/components/common/responsive-dialog";
import { useRouter } from "@/navigation";
import { SurahSelector } from "@/components/modals/jump-to-modal/surah-selector";
import { AyahSelector } from "@/components/modals/jump-to-modal/ayah-selector";

export function JumpToModal() {
  const router = useRouter();
  const responsiveDialog = useResponsiveDialog();
  const [error, setError] = useState({ surah: false, ayah: false });
  const [selectedSurah, setSelectedSurah] = useState("");
  const [selectedAyah, setSelectedAyah] = useState("");

  function handleJump(type: "tafsir" | "ayah") {
    if (!selectedSurah) {
      return setError({ ...error, surah: true });
    }
    if (!selectedAyah) {
      return setError({ ...error, ayah: true });
    }

    responsiveDialog.close();

    if (type === "ayah") {
      return router.push(`/${selectedSurah}/${selectedAyah}`);
    }

    return router.push(`/${selectedSurah}/tafsirs`);
  }

  return (
    <div className="select-none [--border-gap:1.5rem]">
      <div className="space-y-5 bg-card-bg p-5 tablet:p-6 tablet:pb-8">
        <h4 className="text-center text-body font-bold">Jump to Ayah/Tafsir</h4>
        <SurahSelector
          error={error.surah}
          onChange={surah => {
            setError({ ...error, surah: false });
            setSelectedSurah(surah);
          }}
        />
        <AyahSelector
          error={error.ayah}
          selectedSurah={selectedSurah}
          onChange={ayah => {
            setError({ ...error, ayah: false });
            setSelectedAyah(ayah);
          }}
        />
      </div>

      <div className="flex max-tablet:gap-3 max-tablet:px-5 max-tablet:pb-3">
        <ModalButton className="bg-secondary-bg max-tablet:rounded-md" onClick={() => handleJump("tafsir")}>
          Jump to Tafsir
        </ModalButton>

        <ModalButton className="max-tablet:rounded-md" onClick={() => handleJump("ayah")}>
          Jump to Ayah
        </ModalButton>
      </div>
    </div>
  );
}
