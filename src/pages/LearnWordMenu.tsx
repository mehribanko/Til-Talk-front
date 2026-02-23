import LearnWordCard from "../components/card/LearnWordCard"
import {useState} from "react";
import {mockData} from "../common/mockData/mockWordList.ts";
import {StatCard} from "../components/card/StatCard.tsx";
import {LANG_CONFIG} from "../common/constant/MenuData.ts";



export const LearnWordMenu = () => {

    const [currentIdx, setCurrentIdx] = useState(0);
    const isComplete = currentIdx === mockData.length;
    const [learnLangType]= useState<'kor' | 'kk'>('kk');
    const [flippedCard, setFlippedCard] = useState(false);
    const currentWord = mockData[currentIdx];

    const handleOnLearnClick = () => {
        setCurrentIdx((prev => prev +1));
        setFlippedCard(false);
    }

    const handleOnFlipClick = () => {
        setFlippedCard(prev => !prev);
    }

    const config = LANG_CONFIG[learnLangType];
    const langData = currentWord[config.key];
    const flipLangData = currentWord[config.flipKey];

    const displayData= flippedCard ? flipLangData : langData;
    const displayLabel = flippedCard ? config.flipLabel : config.label;


    if(isComplete){
        return (
            <div> You learned all the words! </div>
        )
    }



    return (
            <div className="h-full flex flex-col">
                <StatCard />

                <div className="flex-1 flex items-center justify-center">

                   <LearnWordCard
                        lang={displayLabel}
                        text={displayData.word}
                        pronunciation={displayData.romanization}
                        onLearnClick={handleOnLearnClick}
                        onFlip = {handleOnFlipClick} />

                </div>
        </div>
    )
}