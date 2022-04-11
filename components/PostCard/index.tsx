import { PostMetadata } from "lib/types/PostMetadata";
import React, { FC } from "react";

export type PostCardProps = {
  post: PostMetadata;
};

const PostCard: FC<PostCardProps> = ({ post: { title, description } }) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};

export default PostCard;
