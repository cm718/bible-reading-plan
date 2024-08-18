import bible from '../api/NKJV.bible.json'
import { NkjvBible, NkjvChapterContent } from '../types/NKJV.types';

type useGetNkjvProps = { book: number, chapter: number }

const useGetNkjv = ({ book = 42, chapter = 0 }: useGetNkjvProps): NkjvChapterContent => {
    const bookName = (bible as NkjvBible).books[book].name;
    const verses = (bible as NkjvBible).books[book].chapters[chapter].verses;
    return { bookName, verses };
}

export default useGetNkjv