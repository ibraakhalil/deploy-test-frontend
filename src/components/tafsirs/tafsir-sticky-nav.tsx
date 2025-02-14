"use client";

import { Scroll } from "@/components/common/horizontal-scroll";
import { IconContainer } from "@/components/common/icon-container";
import { ResponsiveDialog } from "@/components/common/responsive-dialog";
import { DropDownArrowIcon, PlusIcon, ThreeDotIcon } from "@/components/svg";
import { TafsirAcions } from "@/components/tafsirs/tafsir-actions";
import { TafsirItem } from "@/components/tafsirs/tafsir-nav-item";
import { tafsirObjectList } from "@/constants/dummy-data";
import { useSettings } from "@/stores/use-settings";
import { useMedia } from "react-use";

function AddMoreTafsirButton() {
  const { setActiveState } = useSettings();

  const handleAddTafsir = () => {
    const settingTrigger = document.getElementById("setting-trigger");
    settingTrigger?.click();
    setActiveState("tafsirs");
  };

  return (
    <button
      onClick={() => handleAddTafsir()}
      className="mx-3 flex size-6 min-w-6 items-center justify-center rounded-full border border-border-color bg-primary-bg active:scale-90"
    >
      <PlusIcon className="size-4 text-icon-color" />
    </button>
  );
}

export function TafsirStickyNav() {
  const { tafsirs, setTafsirs, activeTafsir, setActiveTafsir } = useSettings();
  const isMobile = useMedia("(max-width:768px)", false);
  const activeTafsirName = tafsirs.find(t => t === activeTafsir);

  return (
    <div className="sticky top-[--top-nav-size] bg-secondary-bg px-[--padding-x] duration-500 max-tablet:py-2">
      {!isMobile ? (
        <Scroll>
          <Scroll.Controllers className="from-secondary-bg via-secondary-bg max-tablet:hidden">
            <Scroll.Content>
              <div className="flex min-h-12 items-center max-tablet:hidden">
                {tafsirs.map(value => {
                  const tafsir = tafsirObjectList[value];

                  return (
                    <TafsirItem key={tafsir.value}>
                      <TafsirItem.Button
                        onClick={() => setActiveTafsir(tafsir.value)}
                        isActive={tafsir.value === activeTafsir}
                      >
                        {tafsir.lang}: {tafsir.name}
                      </TafsirItem.Button>
                      <TafsirItem.Close
                        onClick={() => {
                          const filtered = tafsirs.filter(t => t !== value);
                          setTafsirs(filtered);
                        }}
                      />
                    </TafsirItem>
                  );
                })}
                <AddMoreTafsirButton />
              </div>
            </Scroll.Content>
          </Scroll.Controllers>
        </Scroll>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <ResponsiveDialog>
              <ResponsiveDialog.Trigger asChild>
                <button className="flex min-w-[220px] items-center justify-between gap-5 rounded-full border border-border-color bg-primary-bg px-3 py-1.5">
                  <p className="text-subtitle font-semibold text-subtitle-color">{activeTafsirName}</p>
                  <DropDownArrowIcon className="text-icon-color" />
                </button>
              </ResponsiveDialog.Trigger>
              <ResponsiveDialog.Content>
                <div className="py-3">
                  {tafsirs.map(value => {
                    const tafsir = tafsirObjectList[value];

                    return (
                      <TafsirItem key={tafsir.value}>
                        <TafsirItem.Button
                          onClick={() => setActiveTafsir(tafsir.value)}
                          isActive={tafsir.value === activeTafsir}
                        >
                          {tafsir.lang}: {tafsir.name}
                        </TafsirItem.Button>
                        <TafsirItem.Close
                          onClick={() => {
                            const filtered = tafsirs.filter(t => t !== value);
                            setTafsirs(filtered);
                          }}
                        />
                      </TafsirItem>
                    );
                  })}
                </div>
              </ResponsiveDialog.Content>
            </ResponsiveDialog>
            <AddMoreTafsirButton />
          </div>

          <ResponsiveDialog>
            <ResponsiveDialog.Trigger asChild>
              <IconContainer hover>
                <ThreeDotIcon />
              </IconContainer>
            </ResponsiveDialog.Trigger>
            <ResponsiveDialog.Content>
              <TafsirAcions />
            </ResponsiveDialog.Content>
          </ResponsiveDialog>
        </div>
      )}
    </div>
  );
}
