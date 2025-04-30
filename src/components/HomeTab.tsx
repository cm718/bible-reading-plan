import React, { useState } from 'react';
import { getReadingsForToday } from 'src/services/NewBibleService';

interface HomeTabProps {}

const HomeTab: React.FC<HomeTabProps> = () => {
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
    <>
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
    </>
  );
};

export default HomeTab;