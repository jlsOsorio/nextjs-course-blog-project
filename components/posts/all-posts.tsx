import React from 'react';

import styles from './all-posts.module.css';
import PostsGrid from './posts-grid';
import { IPost } from '@/interfaces/post';

interface AllPostsProps {
  posts: IPost[];
}

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
