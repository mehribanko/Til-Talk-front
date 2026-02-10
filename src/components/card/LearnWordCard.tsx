
import {getCardStyle} from "../../common/util/commonUtils";
import {Card} from "./Card";
import {LearnButton} from "../button/LearnButton";
import {useState} from "react";

interface LearnWordCardProps {
    lang: string;
    text: string;
    pronunciation: string;
    onLearnClick: () => void;
    onFlip?: () => void;
}


const LearnWordCard = ({lang, text, pronunciation, onLearnClick, onFlip} : LearnWordCardProps) => {

    const [tilt, setTilt]= useState<'left'| 'right' | null>(null);

    return (
        <div>
            {/* Card */}
            <div className="transition-all duration-300 ease-out  mx-12" style={getCardStyle(tilt)}>
                <Card lang={lang} text={text} pronunciation={pronunciation} onFlip={onFlip}/>
            </div>

            {/* I learn button */}
            <LearnButton setTilt={setTilt} onLearn={onLearnClick} />
        </div>
    )
}
export default LearnWordCard