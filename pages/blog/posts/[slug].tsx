import DefaultLayout from "layouts/DefaultLayout";
import { PostData } from "lib/types/PostData";
import { getAllPosts } from "lib/utils/getAllPosts";
import { getPostBySlug } from "lib/utils/getPostBySlug";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

type Params = {
  slug: string;
};

type Props = {
  post: PostData;
};

const BlogPostPage: NextPage<Props> = ({ post }) => {
  return (
    <DefaultLayout>
      <article>
        <h1 className="font-display text-7xl text-gray-100">
          {post.meta.title}
        </h1>
        <h2 className="font-light text-5xl mb-8 text-gray-100/75">
          {post.meta.description}
        </h2>
        <MDXRemote compiledSource={post.content} />
      </article>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default BlogPostPage;
