import PostCard from "components/PostCard";
import { PostMetadata } from "lib/types/PostMetadata";
import React, { FC } from "react";

export type RecentPostsProps = {
  posts: PostMetadata[];
};

const RecentPosts: FC<RecentPostsProps> = ({ posts }) => {
  return (
    <section>
      <h3>Recent posts</h3>
      <ol>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ol>
    </section>
  );
};

export default RecentPosts;
