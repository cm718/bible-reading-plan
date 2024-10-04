import React, { useState } from 'react';
import { getReadingsForToday } from './services/NewBibleService';

const App: React.FC = () => {
  const { family, secret } = getReadingsForToday();

  const [expandedFamily, setExpandedFamily] = useState<number[]>([]); // Expanded family passages
  const [expandedSecret, setExpandedSecret] = useState<number[]>([]); // Expanded secret passages

    const toggleFamilyPassage = (index: number) => {
        setExpandedFamily(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index); // Collapse
            } else {
                return [...prev, index]; // Expand
            }
        });
    };

    const toggleSecretPassage = (index: number) => {
        setExpandedSecret(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index); // Collapse
            } else {
                return [...prev, index]; // Expand
            }
        });
    };

  return (
    <div>
      <h1>Daily Bible Readings</h1>

      <h2>Private Readings</h2>
      <div>
        {secret.map((reading, index) => (
          <div key={index}>
            <h3 onClick={() => toggleSecretPassage(index)}>{`${reading.book} ${reading.chapter}`}</h3>
            {expandedSecret.includes(index) && <div>
            {reading.verses.map((verse, verseIndex) => (
                <p key={verseIndex}>{`${verse.num} ${verse.text}`}</p>
              ))}
            </div>}
          </div>
        ))}
      </div>
      
      <h2>Family Readings</h2>
      <div>
        {family.map((reading, index) => (
          <div key={index}>
            <h3 onClick={() => toggleFamilyPassage(index+200)}>
              {`${reading.book} ${reading.chapter}`}
            </h3>
            {expandedFamily.includes(index+200) && <div>
              {reading.verses.map((verse, verseIndex) => (
                <p key={verseIndex}>{`${verse.num} ${verse.text}`}</p>
              ))}
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;