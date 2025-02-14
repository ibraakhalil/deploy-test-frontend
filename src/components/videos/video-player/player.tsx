export function VideoPlayer() {
  return (
    <div className="mt-6 aspect-video overflow-hidden rounded-sm">
      <iframe
        width={560}
        height={315}
        src="https://www.youtube.com/embed/JTiYuoaRJ30?si=w7gy3elOrJyS0z-B"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
