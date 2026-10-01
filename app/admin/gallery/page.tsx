import MediaAdder from "@/components/admin/MediaAdder";
import MediaCard from "@/components/admin/MediaCard";
import { getMedia } from "@/lib/store";

export default async function AdminGalleryPage() {
  const items = await getMedia("gallery");

  const groups = [
    { kind: "image" as const, title: "Images", add: "Upload images" },
    { kind: "video" as const, title: "Videos", add: "Upload videos" },
  ];

  return (
    <>
      <h1 className="mb-8 font-display text-3xl text-ink">Gallery</h1>
      <div className="flex flex-col gap-12">
        {groups.map(({ kind, title, add }) => {
          const subset = items.filter((item) => item.type === kind);
          return (
            <section key={kind}>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-display text-2xl text-ink">
                  {title} <span className="text-base text-ink-muted">({subset.length})</span>
                </h2>
                <MediaAdder list="gallery" kind={kind} label={add} />
              </div>
              {subset.length === 0 ? (
                <p className="rounded-2xl bg-white p-8 text-center text-ink-muted">
                  No {title.toLowerCase()} yet.
                </p>
              ) : (
                <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {subset.map((item) => (
                    <MediaCard key={item.id} list="gallery" item={item} kind={kind} />
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
