import { useEffect, useState } from 'react'

const useGetChapter = ({ translation, book, chapterNum }) => {
    const [chapterContent, setChapterContent] = useState([]);
    const [bookName, setBookName] = useState("");
    const [footnotes, setFootnotes] = useState([]);

    useEffect(() => {
        fetch(`https://bible.helloao.org/api/${translation}/${book.toUpperCase()}/${chapterNum}.json`)
            .then(request => request.json())
            .then(data => {
                setChapterContent(data.chapter.content)
                setBookName(data.book.name)
                setFootnotes(data.chapter.footnotes)
            });
    }, [translation, book, chapterNum]);

    return { chapterContent, bookName, footnotes }
}

export default useGetChapter