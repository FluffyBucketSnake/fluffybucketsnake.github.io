import { readFile } from "fs/promises";
import { BASE_URL } from "lib/constants/BaseURL";
import { PostData } from "lib/types/PostData";
import { serialize } from "next-mdx-remote/serialize";
import { getPostFilepathBySlug } from "./getPostFilepathBySlug";
import { isPostMetadata } from "./isPostMetadata";

export async function getPostBySlug(
  slug: string
): Promise<PostData | undefined> {
  const postFilepath = await getPostFilepathBySlug(slug);
  if (!postFilepath) {
    return undefined;
  }
  const postSource = await readFile(postFilepath, "utf8");
  const { frontmatter, compiledSource } = await serialize(postSource, {
    parseFrontmatter: true,
  });
  frontmatter &&
    (frontmatter.slug = slug) &&
    (frontmatter.url = `${BASE_URL}/posts/${slug}`);
  if (!isPostMetadata(frontmatter)) {
    throw Error("The front matter of this post is invalid.");
  }
  return { meta: frontmatter, content: compiledSource };
}
