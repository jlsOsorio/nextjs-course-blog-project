import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPost } from "@/interfaces/post";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts(): IPost[] {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}

function getPostData(fileName: string): IPost {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.substring(0, fileName.indexOf(".md")); // removes the file extension

  const postData: IPost = {
    ...(data as IPost),
    slug: postSlug,
    content,
  };

  return postData;
}
