import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

import PostContent from '@/components/posts/post-detail/post-content';
import { IPost } from '@/interfaces/post';
import { getPostData, getPostsFiles } from '@/lib/post-util';

interface PostDetailPageProps {
  post: IPost;
}

const PostDetailPage = ({ post }: PostDetailPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  const postData = getPostData(params?.slug as string);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postsFilenames = getPostsFiles();

  const slugs = postsFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
