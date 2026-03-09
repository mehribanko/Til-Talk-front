
import {create} from 'zustand';
import type {LearnedWordId} from "../../types/WordTypes.tsx";

type UseDailyLearnCountStoreProps = {
    newlyLearnWords: LearnedWordId[];
    addNewlyLearnWord: (word: LearnedWordId) => void;
    resetNewlyLearnWords: () => void;
}

export const useDailyLearnCountStore = create<UseDailyLearnCountStoreProps>()((set) => ({

    newlyLearnWords: [],

    addNewlyLearnWord: (newWord) => set(state => ({
        newlyLearnWords: [...state.newlyLearnWords, newWord]
    })),

    resetNewlyLearnWords: () => set({newlyLearnWords: []})

}))