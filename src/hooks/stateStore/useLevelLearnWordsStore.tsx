import {create} from "zustand/react";
import {persist} from "zustand/middleware";
import type {LearnedWordLevel} from "../../types/WordTypes.tsx";

type UseLevelLearnWordsStoreProps = {
    levelLearnWords: LearnedWordLevel
    addLeveLearnWords: (levelKey: keyof LearnedWordLevel ) => void
    resetLevelWords: () => void;
}

export const useLevelLearnWordsStore = create<UseLevelLearnWordsStoreProps>()(persist(
    (set) => ({

        levelLearnWords: { begLevel: 0, midLevel: 0, advLevel: 0 },
        addLeveLearnWords: (levelKey) => set((state) => ({
            levelLearnWords: {
               ...state.levelLearnWords,
               [levelKey]: state.levelLearnWords[levelKey as keyof LearnedWordLevel] + 1
           }
       })),

        resetLevelWords: () => set ( {
            levelLearnWords: {begLevel: 0, midLevel: 0, advLevel: 0}
        })
       }), {name: 'level-words-count'}
    )
)