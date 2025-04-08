import React from "react";
import { FaTimes } from "react-icons/fa";

function TestSection() {
  return (
    <div className="relative bg-white flex items-center justify-center py-12">
      <div className="rounded-lg p-10 shadow-lg w-[80%] mx-auto relative"
        style={{
          background: "linear-gradient(110deg, rgba(251, 103, 100, 0.60) 3.98%, rgba(246, 35, 30, 0.60) 97.99%)",
        }}>
        {/* Text Section */}
        <div className="w-full md:w-[58%]">
          <h1 className="text-3xl font-bold mb-4">Welcome to Test</h1>
          <p className="text-gray-100 text-lg mb-6">
            Tests are structured assessments combining SCQ, MCQ, True/False,
            Parajumbles, and Fill in the Blanks. Unlike quizzes, they can be
            grouped into sets with additional text-based questions for final
            evaluation of a shishya's understanding.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Take a Tour
          </button>
        </div>

        {/* Quiz Preview Card (Floating Box) */}
        <div className="absolute right-10 -top-12 w-80 bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Maheshwara Sutra Quiz
            </span>
            <button className="bg-gray-200 p-1 rounded-md hover:bg-gray-300">
              <FaTimes size={14} className="text-gray-700" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This quiz contains multiple types of questions to assess your
            knowledge of the Maheshwara Sutra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestSection;
