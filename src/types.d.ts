type Passage = {
    book: {
      name: string
    }
    chapter: {
      content: Verse[],
      number: number
    }
  }
  
type Verse = {
    content: string[]
    number: number
    type: "verse"
  }