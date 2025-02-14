import Image from "next/image";

export function UserProfileCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-md bg-secondary-bg py-5">
      <div className="size-[110px] overflow-hidden rounded-full bg-primary-20">
        <Image
          className="size-full object-cover"
          src="/assets/global/quran-image.jpg"
          width={100}
          height={100}
          alt="profile-image"
          priority
        />
      </div>
      <div className="space-y-2.5 text-center">
        <h2 className="text-heading-6 font-semibold text-pure-color">IRD Foundation</h2>
        <p className="text-subtitle text-subtitle-color-70">ird.foundation@gmail.com</p>
      </div>
    </div>
  );
}
