import Footer from "components/Footer";
import Hero from "components/Hero";
import RecentPosts from "components/RecentPosts";
import { PostMetadata } from "lib/types/PostMetadata";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  posts: PostMetadata[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Hero />
      <main>
        <RecentPosts posts={posts} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const posts: PostMetadata[] = [
    {
      slug: "0",
      title: "Lorem Ipsum",
      description: "Esse magna nulla reprehenderit nulla proident et.",
      date: new Date(),
    },
    {
      slug: "1",
      title: "Consequat eiusmod",
      description:
        "Magna cillum est laborum reprehenderit pariatur irure cillum consequat deserunt.",
      date: new Date(),
    },
    {
      slug: "2",
      title: "Minim sit sit",
      description:
        "Consequat eiusmod incididunt ea qui cupidatat sunt cillum culpa cillum.",
      date: new Date(),
    },
  ];
  return { props: { posts } };
};

export default Home;
