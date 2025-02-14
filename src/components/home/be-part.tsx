import { Link } from "@/navigation";

export function BePartOfSadaqah() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-16 max-tablet:py-10 desktop:pt-28">
      <h2 className="w-[300px] text-center text-heading-4 font-bold tablet:w-[400px] tablet:text-heading-2 desktop:text-heading-1">
        Be a Part of Sadaqah Jariyah
      </h2>
      <Link href="https://irdfoundation.com/sadaqa-jaria" target="_blank">
        <button className="rounded-sm bg-primary px-7 py-2.5 text-base font-medium text-primary-fg tablet:py-3 tablet:text-body">
          I Want To Support
        </button>
      </Link>
    </div>
  );
}
