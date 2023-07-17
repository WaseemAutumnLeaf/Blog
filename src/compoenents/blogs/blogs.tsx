"use client"
import React, { useEffect } from 'react'
import type { BlogPost } from '@/src/types/blog-post.model'
import BlogCard from '../blog-card/blog-card';
import styles from './blogs.module.css';
import {blogs as blogsAtom} from "../../atoms/atoms"
import { useRecoilState } from 'recoil';

interface BlogsProps {
    blogs: BlogPost[];
}

const Blogs: React.FC<> = () => {

  const [blogs, setBlogs] = useRecoilState(blogsAtom);

  useEffect(() => {
    console.log(blogs);
  }
  , [blogs])
  
  // const mock: BlogPost  = {
    // "title": "My First Blog Post",
    // "content": "This is the content of my first blog post.",
    // "author": "John Doe",
    // "date": "July 6, 2023"
  // }

  // const blogs: BlogPost[] = [mock, mock, mock, mock, mock]

    return (
        <div className={styles.blogs}>
          {blogs.map((blog: BlogPost, index: number) => (
              <div key={index} className={styles.card}>
                <BlogCard key={index} post={blog}/>
              </div>
            ))}
        </div>
      );
}

export default Blogs