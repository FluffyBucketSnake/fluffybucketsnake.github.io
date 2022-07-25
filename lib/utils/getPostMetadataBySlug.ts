import { basename } from "path";
import { getPostFilepathBySlug } from "./getPostFilepathBySlug";
import { getPostMetadataFromFilename } from "./getPostMetadataFromFile";

export async function getPostMetadataBySlug(slug: string) {
  const filepath = await getPostFilepathBySlug(slug);
  if (filepath == null) return filepath;
  const filename = basename(filepath);
  return getPostMetadataFromFilename(filename);
}
