// api/useFetchPassage.tsx
import { useState, useEffect } from 'react';
import { IBibleApi } from './IBibleApi';

export const useFetchPassage = (
  apiService: IBibleApi, 
  book: string, 
  chapter: number, 
  translation = 'kjv'
) => {
  const [passage, setPassage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPassage = async () => {
      try {
        const fetchedPassage = await apiService.fetchChapter(book, chapter, translation);
        setPassage(fetchedPassage);
      } catch (err) {
        setError('Error fetching the passage');
      }
    };

    fetchPassage();
  }, [apiService, book, chapter, translation]);

  return { passage, error };
};