import { PostMetadata } from "lib/types/PostMetadata";

export function isPostMetadata(metadata: any): metadata is PostMetadata {
  return (
    metadata &&
    typeof metadata.url === "string" &&
    typeof metadata.slug === "string" &&
    typeof metadata.title === "string" &&
    typeof metadata.description === "string" &&
    (metadata.previous == null || typeof metadata.previous === "string") &&
    (metadata.next == null || typeof metadata.next === "string") &&
    metadata.date instanceof Date
  );
}
