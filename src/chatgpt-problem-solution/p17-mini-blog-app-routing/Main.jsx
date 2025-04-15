import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />}/>
          <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
