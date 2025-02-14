import { Link } from "@/navigation";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderAyah = [
  {
    id: 18,
    surah_name: "Al-Kahf",
    verse: 53,
    ayah: "And the criminals will see the Fire and will be certain that they are to fall therein. And they will not find from it a way elsewhere.",
  },
  {
    id: 15,
    surah_name: "Hijr",
    verse: 99,
    ayah: "And worship your Lord until there comes to you the certainty (death).",
  },
  {
    id: 19,
    surah_name: "Maryam",
    verse: 76,
    ayah: "And Allah increases those who were guided, in guidance, and the enduring good deeds are better to your Lord for reward and better for recourse.",
  },
  {
    id: 19,
    surah_name: "Maryam",
    verse: 86,
    ayah: "And We will drive the criminals to Hell in thirst.",
  },
  {
    id: 7,
    surah_name: "Al-A'raf",
    verse: 151,
    ayah: "Moses said, 'My Lord, forgive me and my brother and admit us into Your mercy, for You are the most merciful of the merciful.'",
  },
  {
    id: 13,
    surah_name: "Ar-Ra'd",
    verse: 10,
    ayah: "It is the same to Him concerning you whether one conceals [his] speech or one publicizes it and whether one is hidden by night or conspicuous [among others] by day.",
  },
  {
    id: 10,
    surah_name: "Yunus",
    verse: 23,
    ayah: "But when He saves them, at once they commit injustice upon the earth without right. O mankind, your injustice is only against yourselves, [being merely] the enjoyment of worldly life. Then to Us is your return, and We will inform you of what you used to do.",
  },
  {
    id: 14,
    surah_name: "Ibrahim",
    verse: 27,
    ayah: "Allah keeps firm those who believe, with the firm word, in worldly life and in the Hereafter. And Allah sends astray the wrongdoers. And Allah does what He wills.",
  },
  {
    id: 13,
    surah_name: "Ar-Ra'd",
    verse: 35,
    ayah: "The example of Paradise, which the righteous have been promised, is [that] beneath it rivers flow. Its fruit is lasting, and its shade. That is the consequence for the righteous, and the consequence for the disbelievers is the Fire.",
  },
  {
    id: 14,
    surah_name: "Ibrahim",
    verse: 49,
    ayah: "And you will see the criminals that Day bound together in shackles.",
  },
  {
    id: 7,
    surah_name: "Al-A'raf",
    verse: 153,
    ayah: "But those who committed evil deeds and then repented after them and believed - indeed, your Lord, thereafter, is Forgiving and Merciful.",
  },
  {
    id: 14,
    surah_name: "Ibrahim",
    verse: 52,
    ayah: "This [Qur'an] is notification for the people that they may be warned thereby and that they may know that He is but one God and that those of understanding will be reminded.",
  },
];

export function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      loop
      modules={[Autoplay]}
      autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      speed={700}
    >
      {sliderAyah.map(ayah => (
        <SwiperSlide key={`${ayah.id}/${ayah.verse}`}>
          <Link
            href={`/${ayah.id}/${ayah.verse}`}
            className="sm-max:hidden 3xl-min:w-[600px] sm-max:w-[90%] lg-min:text-base md-min:space-y-5 lg-min:space-y-8 md-min:mt-[60px] 2xl-min:mt-[120px] mx-auto mt-12 block w-[500px] space-y-2.5 text-wrap text-center text-sm text-subtitle-color"
          >
            <p className="md-min:leading-[22px] 2xl-min:leading-7 cursor-pointer leading-5">{ayah.ayah}</p>
            <p>
              [ {ayah.surah_name} : {ayah.verse} ]
            </p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
