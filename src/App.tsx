import React, { useState } from 'react';
import { getReadingsForToday } from './services/NewBibleService';
import './App.css';

const App: React.FC = () => {
  const { family, secret } = getReadingsForToday();

  const [expandedFamily, setExpandedFamily] = useState<number[]>([]);
  const [expandedSecret, setExpandedSecret] = useState<number[]>([]);

  const toggleFamilyPassage = (index: number) => {
    setExpandedFamily((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleSecretPassage = (index: number) => {
    setExpandedSecret((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <i className="fas fa-book-open"></i> {/* Open Book icon */}
          <h1>Artos</h1>
        </div>
      </header>

      <section className="readings-section">
        <h2>Private Readings</h2>
        <div className="readings-list">
          {secret.map((reading, index) => (
            <div key={index} className="reading-item">
              <h3
                className="reading-title"
                onClick={() => toggleSecretPassage(index)}
              >
                {`${reading.book} ${reading.chapter}`}
              </h3>
              {expandedSecret.includes(index) && (
                <div className="verses">
                  {reading.verses.map((verse, verseIndex) => (
                    <p key={verseIndex} className="verse">
                      {`${verse.num} ${verse.text}`}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="readings-section">
        <h2>Family Readings</h2>
        <div className="readings-list">
          {family.map((reading, index) => (
            <div key={index} className="reading-item">
              <h3
                className="reading-title"
                onClick={() => toggleFamilyPassage(index + 200)}
              >
                {`${reading.book} ${reading.chapter}`}
              </h3>
              {expandedFamily.includes(index + 200) && (
                <div className="verses">
                  {reading.verses.map((verse, verseIndex) => (
                    <p key={verseIndex} className="verse">
                      {`${verse.num} ${verse.text}`}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;