import React from 'react';
import Head from 'next/head';

import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { IPost } from '@/interfaces/post';
import { getFeaturedPosts } from '@/lib/post-util';

interface HomePageProps {
  posts: IPost[];
}

const HomePage = ({ posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Doug&#39;s Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

// 1) Hero (tipically called for main product) section => Present ourserlves
// 2) Featured Posts
