/* eslint-disable check-file/folder-naming-convention */

"use client";

import { useRouter } from "@/navigation";
import { Dialog, DialogContent } from "shadcn/components/ui/dialog";

export default function Page() {
  const router = useRouter();
  const handleOpen = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen open onOpenChange={handleOpen}>
      <DialogContent>
        <div className="h-[400px] w-[300px]">This is Nice weather</div>
      </DialogContent>
    </Dialog>
  );
}
