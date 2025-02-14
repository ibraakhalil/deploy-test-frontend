"use client";

import { useState } from "react";
import AudioPlayer from "./audio-player";

const audioFiles = [
  { name: "Surah Al-Fatiha", src: "https://download.quranicaudio.com/quran/abdullaah_basfar/001.mp3" },
  { name: "Surah Baqara", src: "https://download.quranicaudio.com/quran/abdullaah_basfar/002.mp3" },
  { name: "Surah Al-Imran", src: "https://download.quranicaudio.com/quran/abdullaah_basfar/003.mp3" },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = () => {
    setCurrentIndex(1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Index 2</button>
      <h1>Simple Audio Player</h1>
      <AudioPlayer
        audioFiles={audioFiles}
        currentIndex={currentIndex}
        onTrackChange={index => setCurrentIndex(index)}
      />
    </div>
  );
}
