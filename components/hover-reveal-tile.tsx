import Image from "next/image";

// The sun mark always sits on top of the video, spinning continuously.
// On hover (desktop only — relies on the ancestor Tile's `group` class),
// the video fades out and the wordmark fades in beneath it. Pure CSS, no
// JS needed for the hover itself.
//
// Mobile has no hover, so it gets its own smaller, always-visible
// treatment: the black wordmark (tuned for the light card bg once the
// video fades) is swapped for a white one that reads over the video,
// which never fades there.
export function HoverRevealTile({
  video,
  alt,
  sun,
  wordmark,
  wordmarkMobile,
}: {
  video: string;
  alt: string;
  sun: string;
  wordmark: string;
  wordmarkMobile: string;
}) {
  return (
    <div className="absolute inset-0">
      <video
        src={video}
        className="absolute inset-0 h-full w-full object-cover sm:scale-[1.15] transition-opacity duration-500 sm:group-hover:opacity-0"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/[0.08] transition-opacity duration-500 sm:group-hover:opacity-0" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
        <div className="relative h-[94px] w-[94px] sm:h-[130px] sm:w-[130px] animate-spin-slow">
          <Image src={sun} alt="" fill className="object-contain" />
        </div>
        <div className="relative h-[38px] w-[156px] sm:hidden">
          <Image src={wordmarkMobile} alt={alt} fill className="object-contain" />
        </div>
        <div className="relative hidden h-[54px] w-[216px] sm:block sm:opacity-0 transition-opacity duration-500 sm:group-hover:opacity-100">
          <Image src={wordmark} alt={alt} fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
