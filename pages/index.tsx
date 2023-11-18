import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { IPost } from '@/interfaces/post';
import React from 'react';

const DUMMY_POSTS: IPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-11-18',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-11-18',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-11-18',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2023-11-18',
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;

// 1) Hero (tipically called for main product) section => Present ourserlves
// 2) Featured Posts
