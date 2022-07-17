import ChevronIcon from "@fluentui/svg-icons/icons/chevron_right_24_regular.svg";
import clsx from "clsx";
import PostCard from "components/PostCard";
import { PostMetadata } from "lib/types/PostMetadata";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useMemo } from "react";

export type RecentPostsProps = {
  maxCount?: number;
  posts: PostMetadata[];
};

const RecentPosts: FC<RecentPostsProps> = ({ maxCount, posts }) => {
  const mostRecentPosts = useMemo(
    () => [...posts].sort((a, b) => b.date.getTime() - a.date.getTime()),
    [posts]
  );

  return (
    <section className="flex flex-col">
      <h3 className="text-5xl mb-8">Recent posts</h3>
      <ol className={clsx("list space-y-4", maxCount && "mb-8")}>
        {(maxCount ? mostRecentPosts.slice(0, maxCount) : mostRecentPosts).map(
          (post) => (
            <PostCard key={post.slug} post={post} />
          )
        )}
      </ol>
      {maxCount && (
        <Link href="/blog" passHref>
          <a className="flex flex-row font-display text-base items-center uppercase p-2 self-end text-text-primary fill-text-primary hover:text-text-primary/60 hover:fill-text-primary/60 active:text-text-primary/30 active:fill-text-primary/30 transition duration-200">
            See more
            <ChevronIcon className="ml-1" />
          </a>
        </Link>
      )}
    </section>
  );
};

export default RecentPosts;
