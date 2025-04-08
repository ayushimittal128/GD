import React from "react";
import { FaTimes } from "react-icons/fa";


function ModuleSection({onTakeTour}) {
  

  return (
    <div className="relative bg-white flex items-center justify-center py-12">
      <div
        className="rounded-lg p-10 shadow-lg w-[80%] mx-auto relative"
        style={{
          background: "linear-gradient(110deg, rgba(105, 151, 159, 0.16) 0%, rgba(54, 117, 129, 0.18) 46.85%, rgba(31, 89, 100, 0.20) 100%)",
        }}
      >
        
        <div className="w-full md:w-[58%]">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Module</h1>
          <p className="text-gray-700 text-lg mb-6">
            Built by the concept of Japamala, Modules act as the thread binding
            a collection of shlokas seamlessly. Customize them to your needs by
            importing shlokas from our library and adding your own audio
            resources, attachments, and questions to any of them.
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={onTakeTour}
          >
            Take a Tour
          </button>
        </div>

      
        <div className="absolute right-10 -top-12 w-80 bg-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Maheshwara Sutra Module
            </span>
            <button className="bg-gray-200 p-1 rounded-md hover:bg-gray-300">
              <FaTimes size={14} className="text-gray-700" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            This Module contains multiple modules
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModuleSection;
