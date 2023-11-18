import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './posts-item.module.css';
import { IPost } from '@/interfaces/post';

interface PostItemProps {
  post: IPost;
}

const PostItem = ({ post }: PostItemProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const linkPath = `/posts/${post.slug}`;

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={post.title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <h3>{post.title}</h3>
          <time>{formattedDate}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
