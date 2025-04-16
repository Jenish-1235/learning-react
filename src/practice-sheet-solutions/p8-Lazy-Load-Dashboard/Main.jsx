import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Dashboard = lazy(() => import("./Dashboard.jsx"));

export default function Main() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}
