import Image from "next/image";
import ImageReveal from "@/components/motion/ImageReveal";

interface ProductGalleryProps {
  name: string;
  image: string;
  gallery: string[];
  videoSrc?: string;
}

export default function ProductGallery({ name, image, gallery, videoSrc }: ProductGalleryProps) {
  return (
    <div className="flex flex-col gap-6">
      <ImageReveal className="relative aspect-4/5 w-full overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
        {videoSrc ? (
          <video
            src={videoSrc}
            poster={image}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        )}
      </ImageReveal>

      {gallery.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((src) => (
            <ImageReveal
              key={src}
              className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm shadow-navy-900/10"
            >
              <Image
                src={src}
                alt={`${name} — additional view`}
                fill
                sizes="(min-width: 1024px) 15vw, 45vw"
                className="object-cover"
              />
            </ImageReveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
