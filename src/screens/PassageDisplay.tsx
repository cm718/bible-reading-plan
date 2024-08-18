import React, { useState } from 'react';
import useGetChapter from '../utils/useGetChapter.tsx';

type Verse = {
    type: string;
    number: number;
    content: string[]
}

type Footnote = {
    caller: string;
    noteId: number
    reference: { chapter: number, verse: number }
    text: string
}

const PassageDisplay = ({ translation = "eng_kjv", book = "PRO", chapterNum = 1 }) => {
    const [isExpanded, setIsExpanded] = useState(true)
    const { chapterContent, bookName, footnotes } = useGetChapter({ translation, book, chapterNum });

    const verses = () => chapterContent.map((verse: Verse) => (
        <div className='verse' key={verse.number}>{verse.number} {verse.content[0]}</div>
    ));

    const footnoteView = () => footnotes.map((fn: Footnote) => (
        <div key={fn.noteId}>
            {fn.caller} {fn.text}
        </div>
    ))

    return (
        <div>
            <h3 onClick={() => setIsExpanded(!isExpanded)}>
                {bookName} {chapterNum}
            </h3>
            {isExpanded &&
                <>
                    <div>{verses()}</div>
                    <div className={`footnotes`}>
                        {footnoteView()}
                    </div>
                </>
            }
        </div>
    );
};

export default PassageDisplay;
