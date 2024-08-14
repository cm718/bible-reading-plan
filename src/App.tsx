import React from 'react';
import PassageDisplay from './screens/PassageDisplay.tsx';
import BibleApp from './screens/BibleApp.tsx';


const App = () => {
  const today = `${new Date().toString().split(" ").slice(1, 3).join(" ")}`

  return (
    <div className='main'>
      <h2>{today}</h2>
      <BibleApp />
      <PassageDisplay />
      <PassageDisplay book='JHN' />
      {/* Add navigation controls to change the day */}
    </div>
  );
};

export default App;
