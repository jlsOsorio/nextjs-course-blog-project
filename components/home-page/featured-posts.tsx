import React from 'react';

import styles from './featured-posts.module.css';
import PostsGrid from '../posts/posts-grid';
import { IPost } from '@/interfaces/post';

interface FeaturedPostsProps {
  posts: IPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
