import { PostMetadata } from "lib/types/PostMetadata";
import Link from "next/link";
import React, { FC } from "react";

export type PostCardProps = {
  post: PostMetadata;
};

const PostCard: FC<PostCardProps> = ({
  post: { slug, title, description },
}) => {
  return (
    <Link href={`/blog/posts/${slug}`} passHref>
      <a className="block">
        <article className="flex flex-col p-4 bg-gray-800 border-1 border-gray-700 rounded-lg shadow">
          <h4 className="text-3xl mb-2">{title}</h4>
          <p className="text-lg text-gray-300">{description}</p>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
