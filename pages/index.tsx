import Footer from "components/Footer";
import Hero from "components/Hero";
import NavBar from "components/NavBar";
import RecentPosts from "components/RecentPosts";
import { PostMetadata } from "lib/types/PostMetadata";
import { getAllPosts } from "lib/utils/getAllPosts";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import SITE_CONFIG from "config/site.json";

type Props = {
  posts: PostMetadata[];
};

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{SITE_CONFIG.title}</title>
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
