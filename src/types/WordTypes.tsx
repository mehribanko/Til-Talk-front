
export type WordLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type WordCategory = 'Greetings' | 'Numbers' | 'Food' | 'Travel' | 'Education' | 'People' | 'Home' | 'Daily Life' | 'Law/Admin' | 'Food & Drink' | 'People & Social' | 'Places' | 'Health & Wellness' | 'Life & Development' | 'Society & Values';

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


export type WordsByLevel = {
    begWords: WordEntry[],
    intWords: WordEntry[],
    advWords: WordEntry[]
}


export type ApiWordItemType = {
    wordNo: number,
    level: WordLevel,
    categoryName: WordCategory,
    korWord: string,
    korRomanization: string,
    korAudioUrl: string,
    kkWord: string,
    kkRomanization: string;
    kkAudioUrl: string;
    partOfSpeech: PartOfSpeech,
}


export type DailyUserSettingType = {

    userId: number,
    dailyWordLimit: number,
    nativeLang: string,
    targetLang: string,
    lastLimitUpdate: Date
}