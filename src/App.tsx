import React from 'react';
import NkjvChapterView from './screens/NkjvChapterView.tsx';
import getDayOfYear from './utils/getDayOfYear.ts'
import readingPlan from './data/bibleReadingPlan.json'

const App = () => {
  const today = `${new Date().toString().split(" ").slice(1, 3).join(" ")}`

  const dayOfTheYear = getDayOfYear(new Date);
  const todayPlan = readingPlan[dayOfTheYear];
  const [wisBook, wisChapter] = todayPlan.readings.psalmsOrProverbs.split(" ")
  const [ntBook, ntChapter] = todayPlan.readings.newTestament.split(" ")
  const [otBook, otChapters] = todayPlan.readings.oldTestament.split(" ")
  const firstOT = otChapters.split("-")[0];
  const secondOT = otChapters.split("-")[1];

  return (
    <div className='main'>
      <h2>{today}</h2>
      <NkjvChapterView book={wisBook} chapterNum={wisChapter} />
      <NkjvChapterView book={otBook} chapterNum={firstOT} />
      <NkjvChapterView book={otBook} chapterNum={secondOT} />
      <NkjvChapterView book={ntBook} chapterNum={ntChapter} />
    </div>
  );
};

export default App;
