import React, { useState } from 'react';
import useGetNkjvChapter from '../utils/useGetNkjv.tsx';
import { BibleBooks } from '../types/BibleBooks.enum.ts';
import { NkjvVerse } from '../types/NKJV.types';

const NkjvChapterView = ({ book = "Romans", chapterNum = 1 }) => {
    const [isExpanded, setIsExpanded] = useState(true)
    const bookRef: number = BibleBooks[book.toUpperCase()];
    const { bookName, verses } = useGetNkjvChapter({ book: bookRef, chapter: chapterNum - 1 })

    const versesView = () => verses.map((verse: NkjvVerse) => (
        <div className='verse' key={verse.num}>{verse.num} {verse.text}</div>
    ));

    return (
        <div>
            <h3 onClick={() => setIsExpanded(!isExpanded)}>
                {bookName} {chapterNum}
            </h3>
            {isExpanded && <div>{versesView()}</div>}
        </div>
    );
};

export default NkjvChapterView;
