import { useParams } from "react-router-dom";
import { posts } from "./PostList";

export default function PostDetail() {
  const id = useParams();
  const post = posts.find((post) => post.id === parseInt(id)); // Find the post by id

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}