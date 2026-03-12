import type {LearnedWordId} from "../../types/WordTypes.tsx";
import {create} from "zustand/react";
import {persist} from "zustand/middleware";


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