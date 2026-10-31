import fs from "node:fs";
import path from "node:path";

/** True when a file under /public exists, so placeholders disappear once an asset is dropped in. */
export function hasPublicAsset(src: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}
