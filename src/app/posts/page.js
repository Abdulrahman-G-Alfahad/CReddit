import React from "react";
import PostList from "./component/PostList";
import { fetchPosts } from "@/component/actions";
import Model from "./component/Model";

//Get All Posts call it from the list
async function page() {
  const posts = await fetchPosts();
  return (
    <div>
      <PostList posts={posts} />
      <Model />
    </div>
  );
}
export default page;
