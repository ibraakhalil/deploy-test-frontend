import { NotFound } from "@/components/common/not-found";
import { SearchInput } from "@/components/common/search-input";
import { TickIcon } from "@/components/svg";
import { ComponentProps, useMemo, useState } from "react";
import { cn } from "shadcn/lib/utils";

const reciters = [
  "Abdul Basit Abdul Samad",
  "Mishary Rashid Alafasy",
  "Saud Al-Shuraim",
  "Maher Al-Muaiqly",
  "Abdullah Basfar",
  "Ahmed Al-Ajmi",
  "Ali Jaber",
  "Hani Rifai",
  "Yasser Al-Dosari",
  "Muhammad Jibreel",
  "Khalil Al-Hussary",
  "Abu Bakr Al-Shatri",
  "Fares Abbad",
  "Abdul Rahman Al-Sudais",
  "Saad Al-Ghamdi",
  "Salah Bukhatir",
  "Ibrahim Walk",
  "Abdullah Al-Matroud",
  "Abdullah Khayat",
  "Khalid Al-Qahtani",
];

interface PlaybackItemProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  isActive?: boolean;
}

function ReciterItem({ children, isActive, ...props }: PlaybackItemProps) {
  return (
    <div
      {...props}
      className={cn(
        "mb-1 flex cursor-pointer items-center justify-between rounded-sm px-3 py-1 text-subtitle-color hover:bg-secondary-bg",
        {
          "group bg-secondary-bg": isActive,
        }
      )}
    >
      <span className="text-base group-[.bg-secondary-bg]:text-pure-color">{children}</span>
      <TickIcon className="opacity-0 group-[.bg-secondary-bg]:opacity-100" />
    </div>
  );
}

export function Reciter() {
  const [actvieReciter, setActvieReciter] = useState("1");
  const [searchValue, setSearchValue] = useState("");
  const results = useMemo(() => {
    return reciters.filter(reciter => reciter.toLowerCase().includes(searchValue.toLowerCase()));
  }, [searchValue]);

  return (
    <div className="h-full flex-grow pb-2">
      <h3 className="py-5 text-center text-body font-bold max-tablet:hidden">Select Reciter</h3>
      <div className="px-[--padding-x] pb-3">
        <SearchInput placeholder="Search Reciter" onChange={e => setSearchValue(e.target.value)} />
      </div>
      <div className="max-h-[280px] overflow-y-auto px-[--padding-x]">
        {results.length > 0 &&
          results.map(reciter => (
            <ReciterItem key={reciter} isActive={actvieReciter === reciter} onClick={() => setActvieReciter(reciter)}>
              {reciter}
            </ReciterItem>
          ))}
        {results.length === 0 && <NotFound className="mt-7" />}
      </div>
    </div>
  );
}
