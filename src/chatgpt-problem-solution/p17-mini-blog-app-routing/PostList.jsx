import { Link } from "react-router-dom";

export const posts = [
  {
    id: 1,
    title: "React Router Basics",
    content:
      "This post covers the fundamentals of React Router, including how to set up routing, navigate between pages, and use dynamic routes.",
  },
  {
    id: 2,
    title: "Understanding useEffect Hook",
    content:
      "In this post, we dive deep into the `useEffect` hook, explaining how it works and when to use it in React components.",
  },
  {
    id: 3,
    title: "State Management in React",
    content:
      "State management is crucial in React. This post explores the different approaches to managing state, from useState to Context API.",
  },
];

export default function PostList() {
  return (
    <>
      <ul>
        {posts.map((item) => {
          return (
            <li key={item.id}>
            <Link to={`/posts/${item.id}`}>
              <h1>{item.title}</h1>
            </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
