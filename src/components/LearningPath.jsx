import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LearnSection() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white flex items-center justify-center py-12">
      <div
        className="rounded-lg p-10 shadow-lg text-white w-[80%] mx-auto relative"
        style={{
          background:
            "linear-gradient(110deg, rgba(166, 142, 227, 0.10) 0%, rgba(150, 121, 224, 0.10) 26.81%, rgba(144, 114, 221, 0.10) 50.35%, rgba(130, 97, 217, 0.10) 72.92%, rgba(120, 86, 209, 0.10) 97.99%)",
        }}
      >
       
        <div className="w-full md:w-[58%]">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Learning Path</h1>
          <p className="text-gray-700 text-lg mb-6">
            Learning Paths are guided journeys that students embark on with you,
            structured for progressive learning. Just as a guru leads a shishya
            step by step, Learning Paths connect verse modules, study materials,
            assessments, and ultimately dakshina.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => navigate("/take-a-tour/learning-path")}
          >
            Take a Tour
          </button>
        </div>

       
        <div className="absolute right-10 -top-12 w-80 bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Maheshwara Sutra Learning-Path
            </span>
            <button className="bg-gray-200 p-1 rounded-md hover:bg-gray-300">
              <FaTimes size={14} className="text-gray-700" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This Learning Path contains multiple modules
          </p>
        </div>
      </div>
    </div>
  );
}

export default LearnSection;
