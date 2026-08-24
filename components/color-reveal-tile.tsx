import Image from "next/image";
import { YalocodeLogo } from "@/components/yalocode-logo";

// The mockup sits shrunk and object-contain so it's never cropped. On hover
// (desktop only — relies on the ancestor Tile's `group` class), a solid
// color fades in over it with the logo centered on top. Pure CSS, no JS.
export function ColorRevealTile({
  image,
  alt,
  color,
}: {
  image: string;
  alt: string;
  color: string;
}) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 scale-[0.8625]">
        <Image src={image} alt={alt} fill className="object-contain" />
      </div>
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 sm:group-hover:opacity-100"
        style={{ backgroundColor: color }}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 sm:group-hover:opacity-100">
        <div className="relative h-[72px] w-[72px] sm:h-[96px] sm:w-[96px]">
          <div className="absolute inset-0 scale-[2.2] rounded-full blur-2xl" style={{ backgroundColor: "#3B6FE0", opacity: 0.45 }} />
          <YalocodeLogo className="relative h-full w-full" />
        </div>
      </div>
    </div>
  );
}
