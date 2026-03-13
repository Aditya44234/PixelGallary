import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-emerald-500 animate-spin"></div>
    </div>
  );
};

export default Spinner;
