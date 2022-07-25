import DefaultLayout from "layouts/DefaultLayout";
import { PostData } from "lib/types/PostData";
import { PostMetadata } from "lib/types/PostMetadata";
import { getAllPosts } from "lib/utils/getAllPosts";
import { getPostBySlug } from "lib/utils/getPostBySlug";
import { getPostMetadataBySlug } from "lib/utils/getPostMetadataBySlug";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

type Params = {
  slug: string;
};

type Props = {
  post: PostData;
  previousPost?: PostMetadata;
  nextPost?: PostMetadata;
};

const BlogPostPage: NextPage<Props> = ({ post, previousPost, nextPost }) => {
  return (
    <DefaultLayout title={post.meta.title}>
      <article className="prose prose-lg prose-invert prose-h3:text-4xl prose-h4:text-3xl prose-h5:text-2xl prose-h6:text-xl prose-h6:text-bold prose-p:text-gray-100 prose-strong:text-secondary-400 prose-code:text-secondary-400 prose-pre:text-lg prose-img:mx-auto">
        <header className="not-prose mb-8">
          <h1 className="font-display text-7xl text-gray-100">
            {post.meta.title}
          </h1>
          <h2 className="font-light text-5xl text-gray-100/75">
            {post.meta.description}
          </h2>
        </header>
        <main>
          <MDXRemote compiledSource={post.content} />
        </main>
        <footer>
          <nav>
            {previousPost && (
              <Link href={previousPost.url} passHref>
                <a>
                  <span>Previous post</span>
                  <strong>{previousPost.title}</strong>
                </a>
              </Link>
            )}
            {nextPost && (
              <Link href={nextPost.url} passHref>
                <a>
                  <span>Next post</span>
                  <strong>{nextPost.title}</strong>
                </a>
              </Link>
            )}
          </nav>
        </footer>
      </article>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;
  const post = await getPostBySlug(slug);
  console.log(post);
  const nextPost =
    post?.meta.next != null
      ? await getPostMetadataBySlug(post.meta.next).then(throwOnNullish)
      : undefined;
  const previousPost =
    post?.meta.previous != null
      ? await getPostMetadataBySlug(post.meta.previous).then(throwOnNullish)
      : undefined;
  if (!post) {
    return { notFound: true };
  }
  return { props: { post, nextPost, previousPost } };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export default BlogPostPage;

function throwOnNullish<T>(value: T, message?: string): T {
  if (value == null) throw new Error(message || "value is nullish");
  return value;
}
