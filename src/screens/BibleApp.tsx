import React, { CSSProperties, useEffect, useState } from 'react'

type Book = {
    id: string
    translationId: string
    name: string,
    commonName: string;
    title: string;
    order: 1;
    numberOfChapters: 50;
    firstChapterApiLink: string;
    lastChapterApiLink: string;
}

const BibleApp = () => {
    const [books, setBooks] = useState([])
    const [showList, setShowList] = useState(false)

    return (
        <>
            <h3 onClick={() => setShowList(!showList)}>The Holy Bible</h3>
            <div style={styles.gridContainer}>
                {showList && books.map((book: Book) => (
                    <span key={book.id}>
                        <button style={styles.bookButton} onClick={() => console.log("Book: ", book.commonName)}>
                            {book.id}
                        </button>
                    </span>
                ))}
            </div>
        </>
    )
}

const styles: { [key: string]: CSSProperties } = {
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap', // Type assertion
        justifyContent: 'space-around', // Type assertion
    },
    bookButton: {
        width: '30%',
        marginBottom: '10px',
        padding: '10px',
        textAlign: 'center',
    },
};

export default BibleApp