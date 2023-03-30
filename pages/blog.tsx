import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

interface itemDataType {
  title: string;
  author: string;
  content: string;
  slug: string;
  "short-line": string;
}
interface MyProps {
  allBlogs: itemDataType[];
  totalBlogs: number;
}

const Blog: React.FC<MyProps> = ({ allBlogs, totalBlogs }) => {
  const [blogs, setBlogs] = useState(allBlogs);
  const [count, setCount] = useState(allBlogs.length);

  const fetchMoreData = async () => {
    // if (this.state.items.length >= 500) {
    //   this.setState({ hasMore: false });
    //   return;
    // }
    const d: Response = await fetch(
      `http://localhost:3000/api/blogs/?count=${count + 2}`
    );
    setCount(count + 2);
    const data = await d.json();
    setBlogs(data);
  };

  return (
    <>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>

        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={totalBlogs !== blogs.length}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((item: itemDataType, idx) => {
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
        </InfiniteScroll>
      </div>
    </>
  );
};

export async function getStaticProps(context: object) {
  const allBlogs: string[] = [];

  const data = await fs.promises.readdir(`blogdata`, "utf-8");
  let totalBlogs = data.length;
  var count = 0;
  data.forEach((file) => {
    count++;
    if (count >= 8) {
      return false;
    }
    const fileData = fs.readFileSync(`blogdata/${file}`, "utf-8");
    allBlogs.push(JSON.parse(fileData));
  });

  // For Server Side Rendering
  // const data: Response = await fetch("http://localhost:3000/api/blogs");
  // const allBlogs = await data.json();
  // Also change getStaticProps to getServerSideProps

  return {
    props: { allBlogs, totalBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
