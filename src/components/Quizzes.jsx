import React from "react";
import { FaTimes } from "react-icons/fa";

function QuizSection() {
  return (
    <div className="relative bg-white flex items-center justify-center py-12">
      <div  className="rounded-lg p-10 shadow-lg w-[80%] mx-auto relative"
        style={{
          background: "linear-gradient(110deg, #FFD987 3.98%, #FEBF47 97.99%)",
        }}>
        {/* Text Section */}
        <div className="w-full md:w-[58%]">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Quiz</h1>
        <p className="text-gray-700 text-lg mb-6">
          Quizzes are engaging tools designed to test knowledge through SCQ, MCQ,
          True/False, Parajumbles, and Fill in the Blanks. With more interactive
          question types coming soon, they provide a dynamic way for shisyas to
          assess their progress.
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
            This quiz contains multiple types of questions to assess your knowledge of the Maheshwara Sutra.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizSection;
