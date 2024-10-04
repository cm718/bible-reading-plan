import nkjvData from '../api/NKJV.bible.json';
import readingPlan from '../data/rmm.json';

interface Verse {
    text: string;
    num: number;
}

interface Chapter {
    verses: Verse[];
}

interface Book {
    name: string;
    chapters: Chapter[];
}

interface NKJV {
    version: string;
    books: Book[];
}

// Function to get today's date in the required format (MMDD)
const getTodayDateKey = (): string => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${month}${day}`;
};

// Function to parse chapters and handle ranges
const parseChapters = (reading: string) => {
    // Use regex to capture books that may start with a number and the chapter
    const match = reading.match(/^(\d?\s?[A-Za-z\s]+)\s+(\d+(-\d+)?)/);

    if (!match) return [];

    const book = match[1].trim();  // Extract the book name
    const chaptersPart = match[2];  // Extract the chapter part (e.g., "87-88" or "37")
    const chapters = chaptersPart.split('-').map(ch => ch.trim()); // Handle chapter ranges

    // Return an array of chapters with book and chapter details
    return chapters.map(ch => ({
        book,
        chapter: ch,
    }));
};

// Function to get readings for today
export const getReadingsForToday = () => {
    const todayKey = getTodayDateKey();
    const todayPlan = readingPlan[todayKey];

    if (!todayPlan) {
        return { family: [], secret: [] }; // No readings for today
    }

    const familyReadings = todayPlan.family || [];
    const secretReadings = todayPlan.secret || [];

    const allReadings = [...familyReadings, ...secretReadings];
    
    
    const passages = allReadings.flatMap(reading => {
        const parsedChapters = parseChapters(reading); // Parse reading to get chapters
        console.log("ALL READINGS: ", parsedChapters);

        return parsedChapters.map(({ book, chapter }) => {
            const bookData = (nkjvData as NKJV).books.find((b: any) => b.name.toLowerCase() === book.toLowerCase());

            if (!bookData) return null;
            console.log('book data: ', bookData);
            

            const chapterData = bookData.chapters[+chapter-1]
            console.log('chp data: ', chapterData);

            return {
                book: bookData.name,
                chapter: chapter,
                verses: chapterData.verses,
            };
        })//.filter(Boolean); // Filter out any null values
    });

// Helper function to check if a passage matches a chapter or falls within a chapter range
const isPassageInPlan = (planEntry: string, passage: { book: string; chapter: string }) => {
    // Find the last space in the string to split the book and chapter parts
    const lastSpaceIndex = planEntry.lastIndexOf(' ');

    // Extract the book and the chapter range
    const planBook = planEntry.substring(0, lastSpaceIndex).trim();
    const planChapterRange = planEntry.substring(lastSpaceIndex + 1).trim();

    console.log(`Checking planEntry: ${planEntry} -> planBook: ${planBook}, planChapterRange: ${planChapterRange}, passage: ${passage.book} ${passage.chapter}`);

    if (planBook.toLowerCase() === passage.book.toLowerCase()) {
        if (planChapterRange.includes('-')) {
            // Handle chapter ranges, e.g., "87-88"
            const [start, end] = planChapterRange.split('-').map(Number);
            const passageChapter = Number(passage.chapter);

            return passageChapter >= start && passageChapter <= end;
        } else {
            // Handle single chapters, e.g., "1"
            return passage.chapter === planChapterRange;
        }
    }

    return false;
};
  
  // Filtering logic for family and secret passages
  return {
    family: passages.filter(p =>
      todayPlan.family.some(planEntry => isPassageInPlan(planEntry, p))
    ),
    secret: passages.filter(p =>
      todayPlan.secret.some(planEntry => isPassageInPlan(planEntry, p))
    ),
  };
};