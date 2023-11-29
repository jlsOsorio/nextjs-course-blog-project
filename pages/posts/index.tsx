import React from 'react';

import AllPosts from '@/components/posts/all-posts';
import { IPost } from '@/interfaces/post';
import { getAllPosts } from '@/lib/post-util';

interface AllPostsPageProps {
  posts: IPost[];
}

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
  return <AllPosts posts={posts} />;
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
