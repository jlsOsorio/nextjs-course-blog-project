import React from 'react';

import PostItem from './post-item';
import styles from './posts-grid.module.css';
import { IPost } from '@/interfaces/post';

interface PostsGridProps {
  posts: IPost[];
}

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
