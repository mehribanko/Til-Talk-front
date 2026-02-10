import LearnWordCard from "../components/card/LearnWordCard"
import {useState} from "react";
import {mockData} from "../common/mockData/mockWordList.ts";

export const LearnWordMenu = () => {

    const [currentIdx, setCurrentIdx] = useState(0);
    const isComplete = currentIdx === mockData.length;

    const currentWord = mockData[currentIdx];
    const handleOnLearnClick = () => {
        setCurrentIdx((prev => prev +1));
    }

    if(isComplete){
        return (
            <div> You learned all the words! </div>
        )
    }
    return (
        <div>
            <LearnWordCard
                lang={currentWord.lang}
                text={currentWord.korean}
                pronunciation={currentWord.romanization}
                onLearnClick = {handleOnLearnClick} />
        </div>
    )
}