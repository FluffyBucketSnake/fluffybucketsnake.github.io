import { readFile } from "fs/promises";
import { PostDirectory } from "lib/constants/PostDirectory";
import { PostMetadata } from "lib/types/PostMetadata";
import { join } from "path";
import matter from "gray-matter";
import { isPostMetadata } from "./isPostMetadata";
import { BASE_URL } from "lib/constants/BaseURL";

export async function getPostMetadataFromFilename(
  filename: string
): Promise<PostMetadata> {
  const filepath = join(PostDirectory, filename);
  const source = await readFile(filepath, "utf8");
  const { data } = matter(source);
  const slug = filename.replace(/\.mdx?/, "");
  data.slug = slug;
  data.url = new URL(`/blog/posts/${slug}`, BASE_URL).href;
  data.previous = data.previous?.trim();
  if (data.previous?.length === 0) data.previous === undefined;
  data.next = data.next?.trim();
  if (data.next?.length === 0) data.next === undefined;
  if (!isPostMetadata(data)) {
    throw Error("The front matter of this post is invalid.");
  }
  return data;
}
