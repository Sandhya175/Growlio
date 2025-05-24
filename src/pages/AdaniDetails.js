import React from "react";
import Sidebar from "../components/Sidebar";

function AdaniDetails() {
  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 ml-60 px-12 pt-10">
        <h1 className="text-3xl font-bold mb-6">Adani Group Details</h1>
        <p>This is the page for Adani Group's stock actions or information.</p>
      </div>
    </div>
  );
}

export default AdaniDetails;
