import React from 'react';

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
