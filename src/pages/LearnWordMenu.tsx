import {useCallback, useEffect, useRef, useState} from "react";
import {useQuery} from '@tanstack/react-query'
import LearnWordCard from "../components/card/LearnWordCard"
import {mockData} from "../common/mockData/mockWordList.ts";
import {StatCard} from "../components/card/StatCard.tsx";
import {LANG_CONFIG, LEVEL_KEY_MAP, LEVEL_TO_WORDS_KEY} from "../common/constant/MenuData.ts";
import type {LearnedWordId, WordLevel, WordsByLevel} from "../types/WordTypes.tsx";
import {LevelFilterButtons} from "../components/button/LevelFilterButtons.tsx";
import {useDailyLearnCountStore} from "../hooks/stateStore/useDailyLearnCountStore.ts";
import {DailyWordDone} from "../components/card/DailyWordDone.tsx";
import {useLevelLearnWordsStore} from "../hooks/stateStore/useLevelLearnWordsStore.tsx";
import {useLearnWordsQuery} from "../hooks/queries/useWordsQuery.tsx";




export const LearnWordMenu = () => {

    const {data: words, isPending, error} = useLearnWordsQuery();
    console.log("words---->", words);

    // card animation
    const mainCardRef = useRef<HTMLDivElement>(null);
    const [isReceiving, setIsReceiving] = useState(false);
    const [flippedCard, setFlippedCard] = useState(false);

    // default language is set to 'Karakalpak'
    const [learnLangType]= useState<'kor' | 'kk'>('kk');
    // daily limit of words that user can learn is set dynamically
    const [dailyLimit, setDailyLimit] = useState<number | null>(null);
    // default word category is always set to 'Beginner'
    const [defaultWordLevel, setDefaultWordLevel] = useState<WordLevel>('Beginner');
    // 'Beginner' level words are shown by default
    const [defaultWordsByLevel, setDefaultWordsByLevel] = useState<WordsByLevel>({
        begWords: mockData.filter(word => word.level == defaultWordLevel),
        intWords: [],
        advWords: []
    })

    const newlyLearnWords = useDailyLearnCountStore(state => state.newlyLearnWords);
    const addNewlyLearnWords = useDailyLearnCountStore(state => state.addNewlyLearnWord);
    const levelLearnWords  = useLevelLearnWordsStore(state => state.levelLearnWords);
    const addLevelLearnWords = useLevelLearnWordsStore(state => state.addLeveLearnWords);

    // currently shown words for a user to learn
    const activeLearnWords = defaultWordsByLevel[LEVEL_TO_WORDS_KEY[defaultWordLevel]];

    // current word index according to word level
    const currentIdx = levelLearnWords[LEVEL_KEY_MAP[defaultWordLevel]];
    // active word based on current index
    const currentWord = activeLearnWords[currentIdx];
    // status of daily limit of words
    const isDailyLimitReached = newlyLearnWords.length >= (dailyLimit ?? Infinity);




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
        setDefaultWordsByLevel({
            begWords: mockData.filter(word => word.level == wordLevel),
            intWords: mockData.filter(word => word.level == wordLevel),
            advWords: mockData.filter(word => word.level == wordLevel),
        })

    }

    const config = LANG_CONFIG[learnLangType];
    const langData = currentWord[config.key];
    const flipLangData = currentWord[config.flipKey];

    const handleSaveLearnedWords = (learnWordId : LearnedWordId) => {
        console.log("saved!", learnWordId);
    }

    const handleFetchDailyLimit = useCallback(async () =>  {
        try{
            await new Promise( (resolve) => setTimeout(resolve, 100));
            setDailyLimit(5);
        }catch (error) {
            console.error("Error fetching daily limit", error);
        }
    }, [])




    useEffect(() => {
        handleFetchDailyLimit();
    }, [handleFetchDailyLimit]);
    

    if (isDailyLimitReached) {
        return (
            <div className="h-full flex flex-col">
                <StatCard doneLearning={newlyLearnWords.length} dailyLimit={dailyLimit} levelLearnWords={levelLearnWords} />
                <div className="flex-1 flex items-center justify-center">
                    <DailyWordDone />
                </div>
            </div>
        )
    }


    return (
            <div className="h-full flex flex-col">
                <StatCard doneLearning={newlyLearnWords.length} dailyLimit = {dailyLimit} levelLearnWords = {levelLearnWords} />

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