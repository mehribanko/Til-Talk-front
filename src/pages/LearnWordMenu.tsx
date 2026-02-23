import LearnWordCard from "../components/card/LearnWordCard"
import {useState} from "react";
import {mockData} from "../common/mockData/mockWordList.ts";
import {StatCard} from "../components/card/StatCard.tsx";
import {LANG_CONFIG} from "../common/constant/MenuData.ts";



export const LearnWordMenu = () => {

    const [currentIdx, setCurrentIdx] = useState(0);
    const isComplete = currentIdx === mockData.length;
    const [learnLangType]= useState<'kor' | 'kk'>('kk');
    const [flippedCard, setFlippedCard] = useState<true | false>(false);
    const currentWord = mockData[currentIdx];

    const handleOnLearnClick = () => {
        setCurrentIdx((prev => prev +1));
    }

    const handleOnFlipClick = () => {
        if(flippedCard){
            setFlippedCard(false);
        }else{
            setFlippedCard(true);
        }
    }

    const config = LANG_CONFIG[learnLangType];
    const langData = currentWord[config.key];
    const flipLangData = currentWord[config.flipKey];


    if(isComplete){
        return (
            <div> You learned all the words! </div>
        )
    }



    return (
            <div className="h-full flex flex-col">
                <StatCard />

                <div className="flex-1 flex items-center justify-center">

                    {flippedCard ? <LearnWordCard
                        lang={config.label}
                        text={flipLangData.word}
                        pronunciation={flipLangData.romanization}
                        onLearnClick={handleOnLearnClick}
                        onFlip = {handleOnFlipClick}
                    /> : <LearnWordCard
                        lang={config.label}
                        text={langData.word}
                        pronunciation={langData.romanization}
                        onLearnClick={handleOnLearnClick}
                        onFlip = {handleOnFlipClick}
                    /> }

                </div>
        </div>
    )
}