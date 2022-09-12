import { PostMetadata } from "lib/types/PostMetadata";
import Link from "next/link";
import React, { FC } from "react";
import PostNavigationLink from "./PostNavigationLink";

export type PostNavigationProps = {
  nextPost?: PostMetadata;
  previousPost?: PostMetadata;
};

const PostNavigation: FC<PostNavigationProps> = ({
  previousPost,
  nextPost,
}) => {
  return (
    <nav className="flex flex-col gap-8 sm:flex-row w-full justify-between">
      <PostNavigationLink
        label="Previous post"
        side="left"
        post={previousPost}
      />
      <PostNavigationLink label="Next post" side="right" post={nextPost} />
    </nav>
  );
};

export default PostNavigation;
