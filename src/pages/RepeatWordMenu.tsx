import {useState, useEffect} from "react";
import {RepeatWordCard} from "../components/card/RepeatWordCard";
import {mockData} from "../common/mockData/mockWordList";




export const RepeatWordMenu = () => {

   const [wordNum, setWordNum] = useState(0);
   const firstWordToRepeat: any = mockData[wordNum];

   const handleSkipWord = () => {
       setWordNum(wordNum+1);

       const len = mockData.length();
       if(wordNum< len){
           const nextWordToRepeat = mockData[wordNum];
           return <RepeatWordCard lang={firstWordToRepeat.lang} text={firstWordToRepeat.korean} pronunciation={firstWordToRepeat.romanization} onSkip={handleSkipWord} />
       }else{
           return "You repeated all the words!"
       }

   }

   const getFirstWordToRepeat = () => {
       return <RepeatWordCard lang={firstWordToRepeat.lang} text={firstWordToRepeat.korean} pronunciation={firstWordToRepeat.romanization} onSkip={handleSkipWord} />
   }



    return (
        <div>
            {getFirstWordToRepeat()}
        </div>
    )

}