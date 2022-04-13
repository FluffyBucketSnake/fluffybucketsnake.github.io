import Footer from "components/Footer";
import Hero from "components/Hero";
import NavBar from "components/NavBar";
import NavMenu from "components/NavMenu";
import RecentPosts from "components/RecentPosts";
import { PostMetadata } from "lib/types/PostMetadata";
import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";

type Props = {
  posts: PostMetadata[];
};

const Home: NextPage<Props> = ({ posts }) => {
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  return (
    <>
      <NavBar onOpenNavMenu={() => setNavMenuOpen(true)} />
      <Hero />
      <main className="p-16">
        <RecentPosts posts={posts} />
      </main>
      <Footer />
      <NavMenu open={navMenuOpen} onClose={() => setNavMenuOpen(false)} />
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
