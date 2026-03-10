import LearnWordCard from "../components/card/LearnWordCard"
import {useCallback, useEffect, useRef, useState} from "react";
import {mockData} from "../common/mockData/mockWordList.ts";
import {StatCard} from "../components/card/StatCard.tsx";
import {LANG_CONFIG, LEVEL_KEY_MAP, LEVEL_TO_WORDS_KEY} from "../common/constant/MenuData.ts";
import type {LearnedWordId, LearnedWordLevel, WordLevel, WordsByLevel} from "../types/WordTypes.tsx";
import {LevelFilterButtons} from "../components/button/LevelFilterButtons.tsx";
import {useDailyLearnCountStore} from "../hooks/state/useDailyLearnCountStore.ts";
import {DailyWordDone} from "../components/card/DailyWordDone.tsx";




export const LearnWordMenu = () => {

    const [defaultWordLevel, setDefaultWordLevel] = useState<WordLevel>('Beginner');
    const [defaultWordsByLevel, setDefaultWordsByLevel] = useState<WordsByLevel>({
        begWords: mockData.filter(word => word.level == defaultWordLevel),
        intWords: [],
        advWords: []
    })
    const activeLearnWords = defaultWordsByLevel[LEVEL_TO_WORDS_KEY[defaultWordLevel]];


    const mainCardRef = useRef<HTMLDivElement>(null);
    const [isReceiving, setIsReceiving] = useState(false);

    const handleDealStart = () => {
        setTimeout(() => {
            setIsReceiving(true);
            setTimeout(() => setIsReceiving(false), 250);
        }, 300);
    };

    const [currentIdx, setCurrentIdx] = useState(0);
    const isComplete = currentIdx === activeLearnWords.length;
    const [learnLangType]= useState<'kor' | 'kk'>('kk');
    const [flippedCard, setFlippedCard] = useState(false);
    const currentWord = activeLearnWords[currentIdx];
    const [dailyLimit, setDailyLimit] = useState<number | null>(null);
    const newlyLearnWords = useDailyLearnCountStore(state => state.newlyLearnWords);
    const addNewlyLearnWords = useDailyLearnCountStore(state => state.addNewlyLearnWord);
    const [levelLearnWords, setLevelLearnWords] = useState<LearnedWordLevel>({
        begLevel: 0,
        midLevel: 0,
        advLevel: 0
    })

    const handleOnLearnClick = () => {


        addNewlyLearnWords({id: currentWord.id});
        handleSaveLearnedWords({id: currentWord.id});
        const levelKey = LEVEL_KEY_MAP[currentWord.level];

        setLevelLearnWords(prev => ({
            ...prev,
                [levelKey]: prev[levelKey] +1
        }))

        setCurrentIdx((prev => prev +1));
        setFlippedCard(false);

        console.log("daily learn words ----> ", newlyLearnWords);

        if(newlyLearnWords.length === dailyLimit) {
            displayDailyWordDoneContent();
        }


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

    const handleFetchDailyLimit = useCallback(() =>   async () => {
        try{
            await new Promise( (resolve) => setTimeout(resolve, 100));
            setDailyLimit(5);
        }catch (error) {
            console.error("Error fetching daily limit", error);
        }
    }, [])

    const displayDailyWordDoneContent = () => {
        return (
            <DailyWordDone />
        )
    }

    useEffect(() => {
        handleFetchDailyLimit();
    }, [handleFetchDailyLimit]);


    if(isComplete){
        return (
            <div> You learned all the words! </div>
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