import React from 'react';
import PassageDisplay from './screens/PassageDisplay.tsx';
import ReadingPlan from './screens/ReadingPlan.tsx';

const App = () => {
  const today = `${new Date().toString().split(" ").slice(1, 3).join(" ")}`

  return (
    <div>
      <ReadingPlan day={today} passage={"Psalm 110"} />
      <PassageDisplay translation={"eng_kjv"} passage={"The LORD says to my Lord sit at my right hand until..."} />
      {/* Add navigation controls to change the day */}
    </div>
  );
};

export default App;
