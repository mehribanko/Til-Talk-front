import {useState, useEffect} from "react";
import {RepeatWordCard} from "../components/card/RepeatWordCard";
import {mockData} from "../common/mockData/mockWordList";




export const RepeatWordMenu = () => {

   const [currIdx, setCurrIdx] = useState(0);
   const isComplete = currIdx >= mockData.length;
   const currentWord = mockData[currIdx];

   const handleSkipWord = () => {
       setCurrIdx(prev => prev + 1);
   }

   if(isComplete){
       return <div>Good Job! You repeated all words!</div>
   }


    return (
        <div>
            <RepeatWordCard lang={currentWord.lang} text={currentWord.korean} pronunciation={currentWord.romanization} onSkip={handleSkipWord} />
        </div>
    )

}