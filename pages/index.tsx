import Footer from "components/Footer";
import Hero from "components/organisms/Hero";
import NavBar from "components/NavBar";
import RecentPosts from "components/RecentPosts";
import { PostMetadata } from "lib/types/PostMetadata";
import { getAllPosts } from "lib/utils/getAllPosts";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import SITE_CONFIG from "config/site.json";
import WebsiteImageURL from "lib/constants/WebsiteImageURL";
import { BASE_URL } from "lib/constants/BaseURL";

type Props = {
  posts: PostMetadata[];
};

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{SITE_CONFIG.title}</title>
        <meta property="og:title" content={SITE_CONFIG.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={WebsiteImageURL} />
        <meta property="og:url" content={BASE_URL} />
      </Head>
      <NavBar variant="overlay" />
      <Hero />
      <main className="p-16">
        <RecentPosts posts={posts} maxCount={3} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const posts: PostMetadata[] = await getAllPosts();
  return { props: { posts } };
};

export default HomePage;
