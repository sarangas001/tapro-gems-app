import fs from "node:fs/promises";
import path from "node:path";
import { isAdmin } from "@/lib/admin/auth";
import { UPLOAD_DIR } from "@/lib/store";

const ALLOWED: Record<string, "image" | "video"> = {
  ".png": "image",
  ".jpg": "image",
  ".jpeg": "image",
  ".webp": "image",
  ".avif": "image",
  ".mp4": "video",
  ".webm": "video",
  ".mov": "video",
};

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const files = form.getAll("file").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length === 0) {
    return Response.json({ error: "No file provided" }, { status: 400 });
  }

  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  const uploaded: { src: string; type: "image" | "video"; name: string }[] = [];

  for (const file of files) {
    const ext = path.extname(file.name).toLowerCase();
    const type = ALLOWED[ext];
    if (!type) {
      return Response.json({ error: `Unsupported file type: ${file.name}` }, { status: 415 });
    }
    const name = `${crypto.randomUUID()}${ext}`;
    await fs.writeFile(path.join(UPLOAD_DIR, name), Buffer.from(await file.arrayBuffer()));
    uploaded.push({ src: `/media/${name}`, type, name: file.name });
  }

  return Response.json({ files: uploaded });
}
