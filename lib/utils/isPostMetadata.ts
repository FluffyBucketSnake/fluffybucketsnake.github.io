import { PostMetadata } from "lib/types/PostMetadata";

export function isPostMetadata(metadata: any): metadata is PostMetadata {
  return (
    metadata &&
    typeof metadata.title === "string" &&
    typeof metadata.description === "string" &&
    metadata.date instanceof Date
  );
}
