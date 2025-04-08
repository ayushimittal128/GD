import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function StudySection() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white flex items-center justify-center py-12">
      <div className="rounded-lg p-10 shadow-lg w-[80%] mx-auto relative" style={{background:"linear-gradient(110deg, rgba(16, 98, 171, 0.20) 0%, rgba(16, 98, 171, 0.20) 100%)"}}>
        {/* Text Section */}
        <div className="w-full md:w-[58%]">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Study Material</h1>
          <p className="text-gray-700 text-lg mb-6">
            Study Material is a comprehensive repository, enriching learning
            with supplementary resources that complement a module. It integrates
            audios, docs, URLs, YouTube links, and text boxes, helping shisyas
            deepen their understanding with valuable references.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800" onClick={()=> navigate("/take-a-tour/learning-path")}>
            Take a Tour
          </button>
        </div>

        {/* Quiz Preview Card (Floating Box) */}
        <div className="absolute right-10 -top-12 w-80 bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Maheshwara Sutra Study Material
            </span>
            <button className="bg-gray-200 p-1 rounded-md hover:bg-gray-300">
              <FaTimes size={14} className="text-gray-700" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This contains Study Material
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudySection;
