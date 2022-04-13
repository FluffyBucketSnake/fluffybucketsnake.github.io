import { readFile } from "fs/promises";
import { PostDirectory } from "lib/constants/PostDirectory";
import { PostMetadata } from "lib/types/PostMetadata";
import { join } from "path";
import matter from "gray-matter";
import { isPostMetadata } from "./isPostMetadata";

export async function getPostMetadataFromFilename(
  filename: string
): Promise<PostMetadata> {
  const filepath = join(PostDirectory, filename);
  const source = await readFile(filepath, "utf8");
  const { data } = matter(source);
  const slug = filename.replace(/\.mdx?/, "");
  data.slug = slug;
  if (!isPostMetadata(data)) {
    throw Error("The front matter of this post is invalid.");
  }
  return data;
}
