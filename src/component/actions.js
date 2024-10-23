"use server";

// action handles the API and all the fetches
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const baseUrl = "http://localhost:5000";
const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function fetchPosts() {
  const response = await fetch(`${baseUrl}/posts`);
  const posts = await response.json();
  return posts;
}

// Get a Single Post by ID....handle error respond
export async function fetchPostsbyID(id) {
  const response = await fetch(`${baseUrl}/posts/${id}`);
  let post;
  try {
    post = await response.json();
  } catch (error) {
    console.error("Not found");
    redirect("/posts");
  }

  return post;
}
// Add a New Post , take the data convert to an object and send it to backend

export async function addPost(formdata) {
  const post = Object.fromEntries(formdata);

  const response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(post),
  });

  const newPosts = await response.json();
  revalidatePath("/posts");
}

//Delete a Post by ID
export async function deletPost(id) {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/posts");
  revalidatePath("/posts/[id]", "page");
  redirect("/posts");
}

// Add a Comment to a Post by Post ID
export async function addComment(formdata, id) {
  const comment = Object.fromEntries(formdata);
  let response;
  console.log(comment);
  try {
    response = await fetch(`${baseUrl}/posts/${id}/comments`, {
      method: "POST",
      headers,
      body: JSON.stringify(comment),
    });
  } catch (error) {
    console.error("failed to add comment");
    redirect("/posts");
  }
  console.log(response);
  revalidatePath("/posts");
  revalidatePath("/posts/[id]", "page");
  redirect(`/posts/${id}`);
}

//Delete a Comment by Comment ID
export async function deletComment(id) {
  const response = await fetch(`${baseUrl}/posts/comments/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/posts");
  revalidatePath("/posts/[id]", "page");
}
