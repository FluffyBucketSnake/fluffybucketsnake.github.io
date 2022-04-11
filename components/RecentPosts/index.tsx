import ChevronIcon from "@fluentui/svg-icons/icons/chevron_right_24_regular.svg";
import PostCard from "components/PostCard";
import { PostMetadata } from "lib/types/PostMetadata";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export type RecentPostsProps = {
  posts: PostMetadata[];
};

const RecentPosts: FC<RecentPostsProps> = ({ posts }) => {
  return (
    <section className="flex flex-col">
      <h3 className="text-5xl mb-8">Recent posts</h3>
      <ol className="list space-y-4 mb-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ol>
      <Link href="/blog" passHref>
        <a className="flex flex-row text-base items-center uppercase p-2 self-end">
          See more
          <ChevronIcon className="fill-white ml-1" />
        </a>
      </Link>
    </section>
  );
};

export default RecentPosts;
