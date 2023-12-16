import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

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

interface CodeProps {
  className?: string;
  children?: React.ReactNode;
}

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

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

    code(code: CodeProps) {
      const { className, children } = code;
      const language = className?.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children as string | string[]}
        </SyntaxHighlighter>
      );
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
