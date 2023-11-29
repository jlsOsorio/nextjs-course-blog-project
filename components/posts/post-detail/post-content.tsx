import React from 'react';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import styles from './post-content.module.css';
import { IPost } from '@/interfaces/post';

interface PostContentProps {
  post: IPost;
}

const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
