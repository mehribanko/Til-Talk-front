
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import type {LearnedWordId} from "../../types/WordTypes.tsx";

type UseDailyLearnCountStoreProps = {
    newlyLearnWords: LearnedWordId[];
    addNewlyLearnWord: (word: LearnedWordId) => void;
    resetNewlyLearnWords: () => void;
}

export const useDailyLearnCountStore = create<UseDailyLearnCountStoreProps>()(
    persist(
        (set) => ({
            newlyLearnWords: [],

            addNewlyLearnWord: (newWord) => set((state) => ({
                newlyLearnWords: [...state.newlyLearnWords, newWord]
            })),

            resetNewlyLearnWords: () => set({ newlyLearnWords: [] }),
        }),
        { name: 'daily-learn-count' }
    )
)