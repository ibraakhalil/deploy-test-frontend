/* eslint-disable no-console */
import { useEffect, useRef, useState } from "react";

interface AudioFile {
  name: string;
  src: string;
}

interface AudioPlayerProps {
  audioFiles: AudioFile[];
  currentIndex?: number;
  onTrackChange?: (index: number) => void;
}

function AudioPlayer({ audioFiles, currentIndex: externalIndex, onTrackChange }: AudioPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const playAudio = () => {
    if (!audioRef.current) return;
    setIsLoading(true);
    audioRef.current.load();
    setTimeout(() => {
      audioRef.current?.play().catch(e => console.error("Error playing audio:", e));
      setIsLoading(false);
      setIsPlaying(true);
    }, 100);
  };

  const handleSeek = (e: React.MouseEvent) => {
    if (!audioRef.current || !progressBarRef.current) return;
    const progressBar = progressBarRef.current;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const seekTime = (clickPosition / progressBar.offsetWidth) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % audioFiles.length;
    if (onTrackChange) {
      onTrackChange(nextIndex);
    } else {
      setCurrentIndex(nextIndex);
    }
    if (isPlaying) {
      playAudio();
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + audioFiles.length) % audioFiles.length;
    if (onTrackChange) {
      onTrackChange(prevIndex);
    } else {
      setCurrentIndex(prevIndex);
    }
    if (isPlaying) {
      playAudio();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    // eslint-disable-next-line consistent-return
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(externalIndex as number);
    if (isPlaying) {
      playAudio();
    }
  }, [externalIndex, isPlaying]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-80 rounded-lg bg-card-bg p-4 shadow-md">
      <div className="mb-4 rounded-md bg-primary-10 p-4">
        <div className="relative flex h-32 w-full items-center justify-center rounded-md bg-primary-20">
          <h1 className="text-2xl">{audioFiles[currentIndex].name}</h1>
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-gray-700 text-sm">{formatTime(currentTime)}</span>
        <span className="text-gray-700 text-sm">{formatTime(duration)}</span>
      </div>

      <div
        ref={progressBarRef}
        onClick={handleSeek}
        className="relative mb-4 h-2 cursor-pointer rounded-full bg-secondary-bg"
      >
        <div className="absolute h-2 rounded-full bg-primary" style={{ width: `${(currentTime / duration) * 100}%` }}>
          <div className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-primary" />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={handlePrev}
          disabled={isLoading}
          className="text-gray-700 hover:text-purple-500 text-2xl disabled:opacity-50"
        >
          ⏪
        </button>
        <button
          onClick={handlePlay}
          disabled={isLoading}
          className="text-gray-700 hover:text-purple-500 text-3xl disabled:opacity-50"
        >
          {isPlaying ? "⏸️" : isLoading ? "🕐" : "▶️"}
        </button>
        <button
          onClick={handleNext}
          disabled={isLoading}
          className="text-gray-700 hover:text-purple-500 text-2xl disabled:opacity-50"
        >
          ⏩
        </button>
      </div>

      <audio
        ref={audioRef}
        src={audioFiles[currentIndex].src}
        preload="metadata"
        onEnded={handleNext}
        onError={() => setIsLoading(false)}
      >
        <track kind="captions" src="/captions/captions.vtt" srcLang="en" label="English" />
      </audio>
    </div>
  );
}

export default AudioPlayer;
