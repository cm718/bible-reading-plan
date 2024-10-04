
export interface IBibleApi {
    fetchChapter(book: string, chapter: number, translation?: string): Promise<string>;
  }