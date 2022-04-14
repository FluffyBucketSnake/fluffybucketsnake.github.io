import { readdir, readFile } from "fs/promises";
import { PostDirectory } from "lib/constants/PostDirectory";
import { PostMetadata } from "lib/types/PostMetadata";
import { getPostMetadataFromFilename } from "./getPostMetadataFromFile";

export async function getAllPosts(): Promise<PostMetadata[]> {
  const subdirectories = await readdir(PostDirectory);
  const posts = await Promise.all(
    subdirectories.map(getPostMetadataFromFilename)
  );
  return posts;
}
