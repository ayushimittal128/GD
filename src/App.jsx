
import { useState } from "react";
import Assesment from "./components/Assesment";
import LearnSection from "./components/LearningPath";
import ModuleSection from "./components/Module";
import QuizSection from "./components/Quizzes";
import StudySection from "./components/StudyMaterial";
import TestSection from "./components/Test";
import TakeaTourPage from "./components/TakeaTourPage";

function App() {
  const [activeTour, setActiveTour] = useState(null); 

  const handleTakeTour = (pageType) => {
    setActiveTour(pageType);
  };

  const handleCloseTour = () => {
    setActiveTour(null);
  };

  return (
    <>
      <LearnSection onTakeTour={() => handleTakeTour("learning-path")} />
      <ModuleSection onTakeTour={() => handleTakeTour("module")} />
      <StudySection onTakeTour={() => handleTakeTour("study-material")} />
      <Assesment onTakeTour={() => handleTakeTour("assesment")}/>
      <QuizSection onTakeTour={() => handleTakeTour("quiz")}/>
      <TestSection onTakeTour={() => handleTakeTour("test")}/>

      {activeTour && (
        <TakeaTourPage pageType={activeTour} onClose={handleCloseTour} />
      )}
    </>
  );
}

export default App;
