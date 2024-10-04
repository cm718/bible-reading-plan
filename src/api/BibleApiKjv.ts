import { IBibleApi } from './IBibleApi';

export class BibleApiKJV implements IBibleApi {
  async fetchChapter(book: string, chapter: number): Promise<string> {
    const response = await fetch(`https://bolls.life/get-text/KJV/${book}/${chapter}`);
    if(response.redirected){
      console.log("Redirected to: ", response);
    }
    const data = await response.json();
    console.log("DATA: ", data);
    
    return data.text || "No content available";
  }
}