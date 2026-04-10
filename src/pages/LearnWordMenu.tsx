import {useMemo, useRef, useState} from "react";
import LearnWordCard from "../components/card/LearnWordCard"
import {StatCard} from "../components/card/StatCard.tsx";
import {LANG_CONFIG, LEVEL_KEY_MAP, LEVEL_TO_WORDS_KEY} from "../common/constant/MenuData.ts";
import type {LearnedWordId, WordLevel, WordsByLevel} from "../types/WordTypes.tsx";
import {LevelFilterButtons} from "../components/button/LevelFilterButtons.tsx";
import {useDailyLearnCountStore} from "../hooks/stateStore/useDailyLearnCountStore.ts";
import {DailyWordDone} from "../components/card/DailyWordDone.tsx";
import {useLevelLearnWordsStore} from "../hooks/stateStore/useLevelLearnWordsStore.tsx";
import {useLearnWordsQuery, useGetDailyWordLimitQuery} from "../hooks/queries/useWordsQuery.tsx";




export const LearnWordMenu = () => {

    // api query
    const {data: words} = useLearnWordsQuery();
    const {data: dailySettings } = useGetDailyWordLimitQuery();

    // card animation
    const mainCardRef = useRef<HTMLDivElement>(null);
    const [isReceiving, setIsReceiving] = useState(false);
    const [flippedCard, setFlippedCard] = useState(false);

    // default language is set to 'Karakalpak'
    const [learnLangType]= useState<'kor' | 'kk'>('kk');
    // default word category is always set to 'Beginner'
    const [defaultWordLevel, setDefaultWordLevel] = useState<WordLevel>('Beginner');
    const wordsByLevel = useMemo<WordsByLevel>(() => {
        if (!words) return { begWords: [], intWords: [], advWords: [] };
        return {
            begWords: words.filter(word => word.level === 'Beginner'),
            intWords: words.filter(word => word.level === 'Intermediate'),
            advWords: words.filter(word => word.level === 'Advanced')
        };
    }, [words]);

    const newlyLearnWords = useDailyLearnCountStore(state => state.newlyLearnWords);
    const addNewlyLearnWords = useDailyLearnCountStore(state => state.addNewlyLearnWord);
    const levelLearnWords  = useLevelLearnWordsStore(state => state.levelLearnWords);
    const addLevelLearnWords = useLevelLearnWordsStore(state => state.addLeveLearnWords);

    // currently shown words for a user to learn
    const activeLearnWords = wordsByLevel[LEVEL_TO_WORDS_KEY[defaultWordLevel]];

    // current word index according to word level
    const currentIdx = levelLearnWords[LEVEL_KEY_MAP[defaultWordLevel]];
    // active word based on current index
    const currentWord = activeLearnWords[currentIdx];
    // status of daily limit of words
    const isDailyLimitReached = newlyLearnWords.length >= (dailySettings?.dailyWordLimit ?? Infinity);


    const handleDealStart = () => {
        setTimeout(() => {
            setIsReceiving(true);
            setTimeout(() => setIsReceiving(false), 250);
        }, 300);
    };

    const handleOnLearnClick = () => {
        addNewlyLearnWords({id: currentWord.id});
        handleSaveLearnedWords({id: currentWord.id});
        const levelKey = LEVEL_KEY_MAP[currentWord.level];
        addLevelLearnWords(levelKey);
        setFlippedCard(false);

    }

    const handleOnFlipClick = () => {
        setFlippedCard(prev => !prev);
    }

    const handleOnLevelFilterCLick = (wordLevel: WordLevel) => {
        setDefaultWordLevel(wordLevel);
    }

    const handleSaveLearnedWords = (learnWordId : LearnedWordId) => {
        console.log("saved!", learnWordId);
    }




    if (isDailyLimitReached) {
        return (
            <div className="h-full flex flex-col">
                <StatCard doneLearning={newlyLearnWords.length} dailyLimit={dailySettings?.dailyWordLimit} levelLearnWords={levelLearnWords} />
                <div className="flex-1 flex items-center justify-center">
                    <DailyWordDone />
                </div>
            </div>
        )
    }


    if (!currentWord) return null;

    const config = LANG_CONFIG[learnLangType];
    const langData = currentWord[config.key];
    const flipLangData = currentWord[config.flipKey];

    return (
            <div className="h-full flex flex-col">
                <StatCard doneLearning={newlyLearnWords.length} dailyLimit = {dailySettings?.dailyWordLimit} levelLearnWords = {levelLearnWords} />

                <div className="flex-1 flex items-center">
                    <div className="pl-6">
                        <LevelFilterButtons
                            onLevelFilterCLick={handleOnLevelFilterCLick}
                            targetRef={mainCardRef}
                            onDealStart={handleDealStart}
                        />
                    </div>

                    <div
                        ref={mainCardRef}
                        className={`flex-1 flex items-center justify-center transition-transform duration-150 ${isReceiving ? 'scale-[1.03]' : 'scale-100'}`}
                    >
                        <LearnWordCard
                                isFlipped={flippedCard}
                                lang={config.label}
                                text={langData.word}
                                pronunciation={langData.romanization}
                                backLang={config.flipLabel}
                                backText={flipLangData.word}
                                backPronunciation={flipLangData.romanization}
                                onLearnClick={handleOnLearnClick}
                                onFlip={handleOnFlipClick} />
                    </div>
                </div>
        </div>
    )
}