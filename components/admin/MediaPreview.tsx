import { VIDEO_PATTERN } from "./ui";

interface MediaPreviewProps {
  src: string;
  type?: "image" | "video";
  className?: string;
  alt?: string;
}

/** Plain elements on purpose: admin previews should show the raw file, not an optimised copy. */
export default function MediaPreview({ src, type, className = "", alt = "" }: MediaPreviewProps) {
  const isVideo = type ? type === "video" : VIDEO_PATTERN.test(src);
  return isVideo ? (
    <video src={src} muted playsInline preload="metadata" controls className={className} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}
