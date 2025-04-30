import React, { useState } from 'react';
import Header from './components/Header';
import TabNav from './components/TabNav';
import ActiveTab from './components/ActiveTab';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home'); // State to track the active tab
  return (
    <div className="app-container">
      <Header />
      <ActiveTab activeTab={activeTab} />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;