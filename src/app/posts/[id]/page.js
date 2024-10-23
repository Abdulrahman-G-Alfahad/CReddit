import React from "react";
import { fetchPostsbyID } from "@/component/actions";
import DeletButton from "./component/DeletButton";
import Model from "./component/Model";
import DeletComment from "./component/DeletComment";

//Get a Single Post by ID
async function page({ params }) {
  const { id } = await params;
  let post = await fetchPostsbyID(id);
  const { title, description, comments } = post;
  return (
    <div className="felx justify-center items-center m-10 ">
      <div className="w-auto h-auto border border-black rounded-md flex flex-col justify-between items-center text-center p-4">
        {/* call the Delete button a Post by ID */}
        <DeletButton post={post} />
        <h1> Title:{title}</h1>
        <h1> Description:{description}</h1>
        <h1>
          {/* Add a Comment to a Post by Post ID*/}
          comments:
          <h1>-----------</h1>
          {comments.map((comment) => (
            <div>
              <h1>{comment.username}</h1>
              <h1>-----------------</h1>
              <h2>{comment.comment}</h2>
              <DeletComment id={comment.id} />
              <h1>----------------</h1>
            </div>
          ))}
        </h1>
        <Model id={id} />
      </div>
    </div>
  );
}

export default page;
