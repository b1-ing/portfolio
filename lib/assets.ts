import fs from "node:fs";
import path from "node:path";

/** True when a file under /public exists, so placeholders disappear once an asset is dropped in. */
export function hasPublicAsset(src: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

const IMAGE_EXTS = ["webp", "png", "jpg", "jpeg", "gif", "avif"];
const VIDEO_EXTS = ["mp4", "webm"];

export type PublicMedia = { src: string; kind: "image" | "video" };

/** Finds `<base>.<ext>` under /public, so a project's media can be an image, GIF or video. */
export function findPublicMedia(base: string): PublicMedia | null {
  for (const ext of [...VIDEO_EXTS, ...IMAGE_EXTS]) {
    const src = `${base}.${ext}`;
    if (hasPublicAsset(src)) return { src, kind: VIDEO_EXTS.includes(ext) ? "video" : "image" };
  }
  return null;
}
