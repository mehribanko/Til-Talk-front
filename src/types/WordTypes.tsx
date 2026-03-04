
export type WordLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type WordCategory = 'Greetings' | 'Numbers' | 'Food' | 'Travel';

export type PartOfSpeech = 'Greeting' | 'Noun' | 'Verb' | 'Adjective';

export interface LangData {
    word: string;
    romanization: string;
    audio_url: string;
}

export interface WordEntry {
    id: number;
    level: WordLevel;
    category: WordCategory;
    korean: LangData;
    karakalpak: LangData;
    part_of_speech: PartOfSpeech;
}

export type LearnedWordId = {
    id: number
}

export type LearnedWordLevel = {
    begLevel: number,
    midLevel: number,
    advLevel: number
}
