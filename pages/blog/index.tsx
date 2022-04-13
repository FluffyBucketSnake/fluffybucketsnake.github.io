import RecentPosts from "components/RecentPosts";
import DefaultLayout from "layouts/DefaultLayout";
import { PostMetadata } from "lib/types/PostMetadata";
import { getAllPosts } from "lib/utils/getAllPosts";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  posts: PostMetadata[];
};

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <DefaultLayout>
      <RecentPosts posts={posts} />
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const posts: PostMetadata[] = await getAllPosts();
  return { props: { posts } };
};

export default BlogPage;
