import React, { useEffect, useState } from 'react';
import { getDayOfMonth } from '../shared/utils'; // Import utility function
import bibleData from '../api/NKJV.bible.json'; // Import the Bible JSON file

const typedBibleData = bibleData as BibleData; // Explicitly type the imported data

interface Book {
  name: string;
  chapters: Chapter[];
}

interface Chapter {
  num: number;
  verses: Verse[];
}

interface BibleData {
  books: Book[];
}

interface Verse {
  num: number;
  text: string;
}

const ProverbsTab: React.FC = () => {
  const [proverbsChapter, setProverbsChapter] = useState<Verse[]>([]);
  const currentDay = getDayOfMonth();

  useEffect(() => {
    // Find the Proverbs book
    const proverbs = typedBibleData.books.find((book) => book.name === 'Proverbs');
    if (proverbs) {
      // Find the chapter corresponding to the current day
      const chapter = proverbs.chapters.find((ch) => ch.num === currentDay);
      if (chapter) {
        setProverbsChapter(chapter.verses);
      }
    }
  }, []);

  return (
    <section className="readings-section">
      <h2>Proverbs {currentDay}</h2>
      {proverbsChapter.length > 0 ? (
        <div className="verses">
          {proverbsChapter.map((verse, index) => (
            <p key={index} className="verse">
              <strong>{verse.num}</strong> {verse.text}
            </p>
          ))}
        </div>
      ) : (
        <p>Loading today's Proverbs...</p>
      )}
    </section>
  );
};

export default ProverbsTab;