import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as fs from 'fs';

interface blogDataType {
  title: string;
  author: string;
  content: string;
  slug: string;
  "short-line": string;
}
const slug = ({blog}:{blog:blogDataType}) => {

  function createMarkup(c: string) {
    return {__html: c};
  }

  return (
    <div>
      <h1>{blog && blog.title}</h1>
      <h4>By- {blog && blog.author}</h4>
      <hr />
      <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
    </div>
  );
};

export async function getStaticPaths() {

  let allBlogs= await fs.promises.readdir(`blogdata/`);
  let allBlogsPath= allBlogs.map((item)=>{
    return { params: { slug: item.split('.')[0] } }
  })
  
  return {
    paths: allBlogsPath,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context: { params: { slug: string; }; }) {
  const {slug}= context.params;
  console.log(slug)

  const data:string= await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
  const blog= JSON.parse(data);
  // const data: Response = await fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`)
  // const blog = await data.json();


  return {
    props: { blog },
  };
}

export default slug;
