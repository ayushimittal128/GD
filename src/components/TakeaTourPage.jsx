import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function TakeaTourPage() {
  const { pageType } = useParams();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
    document.documentElement.style.backgroundColor = "#FFFFFF";
  }, []);

  const tourSteps = {
    "learning-path": [
      "Step 1: Create teaching content using modules and study material and publish them.",
      "Step 2: Create assessment tools using assignments, quizzes, and tests.",
      "Step 3: Customize everything according to your requirements.",
      "Step 4: Ensure all steps are completed based on your needs.",
      "Step 5: Request Danam and Dakshina at the end of the learning path.",
      "Step 6: Publish and post in your Gurukul.",
    ],
    module: [
      "Step 1: Implement verses from your scripture and create verse blocks.",
      "Step 2: Combine multiple verses, add audio, and customize the meaning.",
      "Step 3: Add SCQ, MCQ, True/False, and Paragraph-type questions.",
      "Step 4: Configure your module settings as needed.",
      "Step 5: Publish your module and integrate it into learning paths.",
    ],
    "study-material": [
      "Step 1: Upload PDFs, videos, and reference materials.",
      "Step 2: Organize study materials into sections for easy navigation.",
      "Step 3: Provide supplementary notes and examples.",
      "Step 4: Review and publish your study materials.",
    ],
  };

  const steps = tourSteps[pageType];
  const totalSteps = steps?.length || 0;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-sm h-[500px] bg-white border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col justify-between text-center">
        
        <h1 className="text-2xl font-bold text-[#000000] capitalize">
          Take a Tour - {pageType?.replace("-", " ")}
        </h1>

       
        <div className="flex-grow flex items-center justify-center px-2">
          {steps ? (
            <p className="text-base text-[#616161] font-medium">
              {steps[currentStep]}
            </p>
          ) : (
            <p className="text-[#616161]">Tour steps not found.</p>
          )}
        </div>

    
        <div>
          <div className="flex justify-center gap-4 mb-5">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-md font-semibold border transition ${
                currentStep === 0
                  ? "bg-[#F5F5F5] text-[#AAAAAA] border-[#D1D1D1] cursor-not-allowed"
                  : "bg-white text-black border-[#D1D1D1] hover:bg-[#f0f0f0]"
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps - 1}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                currentStep === totalSteps - 1
                  ? "bg-[#F5F5F5] text-[#AAAAAA] border-[#D1D1D1] cursor-not-allowed"
                  : "bg-[#805B28] text-white hover:bg-[#6E471F]"
              }`}
            >
              Next
            </button>
          </div>

          {steps && (
            <p className="text-sm text-[#616161] mb-5">
              {currentStep + 1} / {totalSteps}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TakeaTourPage;
