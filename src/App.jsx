import { useState } from "react";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <h1 className="bg-emerald-500  font-bold  text-5xl text-white  p-3 text-center border border-t-3 rounded  ">
        Welcome to PixelGallery{" "}
      </h1>

      <div className="min-h-screen bg-gray-100">
        <Gallery />
      </div>
    </>
  );
}

export default App;
