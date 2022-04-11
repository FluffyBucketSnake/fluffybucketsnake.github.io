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
      <a className="group block">
        <article className="flex flex-col p-4 bg-gray-800 border-1 group-hover:bg-gray-700 group-active:bg-gray-900 border-gray-700 group-hover:border-gray-600 group-active:border-gray-800 rounded-lg shadow">
          <h4 className="text-3xl mb-2">{title}</h4>
          <p className="text-lg text-gray-300">{description}</p>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
