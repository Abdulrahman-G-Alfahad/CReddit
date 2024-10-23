"use client";

// Delete a Post by ID
import { deletPost } from "@/component/actions";

function DeletButton({ post }) {
  return (
    <button
      className="w-[70%] border pl-2 border-green rounded-md "
      onClick={() => deletPost(post.id)}
    >
      Delete
    </button>
  );
}

export default DeletButton;
