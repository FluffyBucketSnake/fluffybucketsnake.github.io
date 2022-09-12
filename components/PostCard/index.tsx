import { PostMetadata } from "lib/types/PostMetadata";
import Link from "next/link";
import { format as formatDate } from "date-fns";
import React, { FC } from "react";

export type PostCardProps = {
  post: PostMetadata;
};

const PostCard: FC<PostCardProps> = ({
  post: { slug, title, description, date },
}) => {
  return (
    <Link href={`/blog/posts/${slug}`} passHref>
      <a className="group block">
        <article className="flex flex-col gap-2 p-4 bg-bg-paper border-1 border-divider rounded-lg shadow">
          <h4 className="text-3xl text-text-primary group-hover:text-text-primary/60 group-active:text-text-primary/30 transition duration-200">
            {title}
          </h4>
          <p className="text-lg text-gray-300">{description}</p>
          <time
            className="text-sm text-text-primary"
            dateTime={date.toISOString()}
          >
            {formatDate(date, "PPP")}
          </time>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
