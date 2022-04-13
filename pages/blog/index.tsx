import Footer from "components/Footer";
import Hero from "components/Hero";
import NavBar from "components/NavBar";
import NavMenu from "components/NavMenu";
import RecentPosts from "components/RecentPosts";
import { PostMetadata } from "lib/types/PostMetadata";
import { getAllPosts } from "lib/utils/getAllPosts";
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
      <NavMenu open={navMenuOpen} onClose={() => setNavMenuOpen(false)} />
      <main className="p-16">
        <RecentPosts posts={posts} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const posts: PostMetadata[] = await getAllPosts();
  return { props: { posts } };
};

export default Home;
