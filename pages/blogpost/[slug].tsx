import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface blogDataType {
  title: string;
  author: string;
  content: string;
  slug: string;
  "short-line": string;
}
const slug = ({blog}:{blog:blogDataType}) => {

  return (
    <div>
      <h1>{blog && blog.title}</h1>
      <h4>By- {blog && blog.author}</h4>
      <hr />
      <div>{blog && blog.content}</div>
    </div>
  );
};

export async function getServerSideProps(context: { query: { slug: string; }; }) {
  const {slug}= context.query;
  const data: Response = await fetch(`http://localhost:3000/api/getblog?slug=${slug}.json`)
  const blog = await data.json();


  return {
    props: { blog },
  };
}

export default slug;
