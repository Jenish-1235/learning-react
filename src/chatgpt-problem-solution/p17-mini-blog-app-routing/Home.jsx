import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const gotopost = () => {
    navigate("/posts");
  };
  return (
    <>
      <button onClick={gotopost}>Go to post</button>
    </>
  );
}
