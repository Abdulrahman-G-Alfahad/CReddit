import React from "react";
import PostCard from "./PostCard";

//Get All Posts and import it to the page
function PostList({ posts }) {
  const postList = posts.map((post) => <PostCard post={post} key={post.id} />);
  return (
    <div className="flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
      {postList}
    </div>
  );
}

export default PostList;
