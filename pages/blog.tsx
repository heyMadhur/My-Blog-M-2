import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs';

interface itemDataType {
  title: string;
  author: string;
  content: string;
  slug: string;
  "short-line": string;
}
interface MyProps {
  allBlogs: itemDataType[];
}

const Blog: React.FC<MyProps> = ({ allBlogs }) => {
  // const [blogs, setBlogs] = useState([]);

  return (
    <>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        {allBlogs.map((item: itemDataType, idx) => {
          // console.log(item);

          return (
            <div className={styles.blogItems} key={idx}>
              <Link href={`./blogpost/${item.slug}`}>
                <h3>{item.title}</h3>
                <h4>By- {item.author}</h4>
                <p>{item["short-line"]}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getStaticProps(context: object) {

  const allBlogs:string[]=[];

  const data= await fs.promises.readdir(`blogdata`, 'utf-8');
  data.forEach((file)=>{
    const fileData= fs.readFileSync(`blogdata/${file}`, 'utf-8');
    allBlogs.push(JSON.parse(fileData));
  });
  

  // const data: Response = await fetch("http://localhost:3000/api/blogs");
  // const allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
