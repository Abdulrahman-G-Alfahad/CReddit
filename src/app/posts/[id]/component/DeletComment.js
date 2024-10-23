"use client";

import { deletComment } from "@/component/actions";

function DeletComment({ id }) {
  return (
    <div>
      <button className="" onClick={() => deletComment(id)}>
        Delete
      </button>
    </div>
  );
}

export default DeletComment;
