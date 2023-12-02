import React from 'react';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import styles from './post-content.module.css';
import { IPost } from '@/interfaces/post';
import Image from 'next/image';
import { Element } from 'react-markdown/lib';

interface PostContentProps {
  post: IPost;
}

interface ParagraphProps {
  node?: Element;
  children?: React.ReactNode;
}

const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderer = {
    p(paragraph: ParagraphProps) {
      const { node, children } = paragraph;

      if (
        node?.children[0].type === 'element' &&
        node?.children[0].tagName === 'img'
      ) {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt ? (image.properties.alt as string) : ''}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{children}</p>;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderer}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
