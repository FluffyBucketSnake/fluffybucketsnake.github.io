import { PostDirectory } from "lib/constants/PostDirectory";
import { join } from "path";
import { searchFilepathWithExtensions } from "./searchFilepathWithExtensions";

export async function getPostFilepathBySlug(
  slug: string
): Promise<string | undefined> {
  const filepathWithoutExtension = join(PostDirectory, slug);
  return await searchFilepathWithExtensions(filepathWithoutExtension, [
    ".md",
    ".mdx",
  ]);
}
