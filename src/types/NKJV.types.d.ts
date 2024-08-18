export type NkjvBible = {
    version: string;
    books: NkjvBook[]
}

export type NkjvBook = {
    name: string,
    chapters: NkjvChapter[];
}

export type NkjvChapter = {
    verses: NkjvVerse[]
    num: number
}

export type NkjvVerse = {
    text: string;
    num: number
}

export type NkjvChapterContent = {
    bookName: string;
    verses: NkjvVerse[]
}