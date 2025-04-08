import React from "react";
import { FaTimes } from "react-icons/fa";

function Assessment({onTakeTour}) {
  return (
    <div className="relative bg-white flex items-center justify-center py-12">
     
      <div className="rounded-lg p-10 shadow-lg w-[80%] mx-auto relative"
        style={{
          background: "linear-gradient(109deg, #AFD489 0.88%, #82B350 98.99%)",
        }}>
        
        <div className="w-full md:w-[58%]">
          <h1 className="text-3xl font-bold mb-4">Welcome to Assignments</h1>
          <p className="text-white text-lg mb-6">
            Assignments are effective tools for evaluating students'
            understanding and application of knowledge. They provide an
            opportunity for shisyas to demonstrate their learning through
            various formats such as essays, reports, projects, and
            problem-solving tasks.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          onClick={onTakeTour}>
            Take a Tour
          </button>
        </div>

        <div className="absolute right-10 -top-12 w-80 bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Sanskrit Analysis Assignment
            </span>
            <button className="bg-gray-200 p-1 rounded-md hover:bg-gray-300">
              <FaTimes size={14} className="text-gray-700" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Preview your assignment here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
