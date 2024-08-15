// PassageDisplay.js
import React, { useEffect, useState } from 'react';

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
    const [chapterContent, setChapterContent] = useState([])
    const [bookName, setBookName] = useState("")
    const [isExpanded, setIsExpanded] = useState(true)
    const [footnotes, setFootnotes] = useState([]);

    useEffect(() => {
        fetch(`https://bible.helloao.org/api/${translation}/${book.toUpperCase()}/${chapterNum}.json`)
            .then(request => request.json())
            .then(data => {
                setChapterContent(data.chapter.content)
                setBookName(data.book.name)
                setFootnotes(data.chapter.footnotes)
                console.log('The DATA:', data);
                console.log("Chapter Content: ", chapterContent)
                console.log("Footnotes: ", data.chapter.footnotes)
            });
    }, [translation, book, chapterNum, chapterContent]);

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
