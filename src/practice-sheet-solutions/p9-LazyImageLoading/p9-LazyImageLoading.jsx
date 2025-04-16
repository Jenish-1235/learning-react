import React, { Suspense } from "react";

const LazyImage = React.lazy(() => import("./LazyImage"));

export default function Gallery({ images }) {
  return (
    <>
      {images.map((item) => {
        return (
          <Suspense fallback={<div>Loading Image</div>}>
            <LazyImage src={item.src} alt={item.alt} />
          </Suspense>
        );
      })}
    </>
  );
}
