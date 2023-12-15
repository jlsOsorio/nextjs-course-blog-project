import React from 'react';
import Head from 'next/head';

import AllPosts from '@/components/posts/all-posts';
import { IPost } from '@/interfaces/post';
import { getAllPosts } from '@/lib/post-util';

interface AllPostsPageProps {
  posts: IPost[];
}

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
