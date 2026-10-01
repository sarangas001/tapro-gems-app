"use client";

import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { addMediaAction } from "@/lib/admin/actions";
import { uploadFiles } from "./MediaUploader";
import { primaryButton } from "./ui";

interface MediaAdderProps {
  list: "collections" | "gallery";
  /** Which media kinds this uploader accepts. */
  kind: "image" | "video" | "both";
  label: string;
}

const IMAGES = "image/png,image/jpeg,image/webp,image/avif";
const VIDEOS = "video/mp4,video/webm,video/quicktime";
const ACCEPT = { image: IMAGES, video: VIDEOS, both: `${IMAGES},${VIDEOS}` };

/** Uploads one or more files and adds each as a new item in the given list. */
export default function MediaAdder({ list, kind, label }: MediaAdderProps) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const onPick = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    setError("");
    try {
      const uploaded = await uploadFiles(files);
      for (const file of uploaded) {
        await addMediaAction(list, file.src, file.type, file.name.replace(/\.[^.]+$/, ""));
      }
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed.");
    } finally {
      setBusy(false);
      if (input.current) input.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        ref={input}
        type="file"
        multiple
        hidden
        accept={ACCEPT[kind]}
        onChange={(e) => onPick(e.target.files)}
      />
      <button
        type="button"
        className={primaryButton}
        disabled={busy}
        onClick={() => input.current?.click()}
      >
        <Upload className="h-4 w-4" aria-hidden="true" />
        {busy ? "Uploading..." : label}
      </button>
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </div>
  );
}
