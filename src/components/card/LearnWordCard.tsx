
import {getCardStyle} from "../../common/util/commonUtils";
import {Card} from "./Card";
import {LearnButton} from "../button/LearnButton";
import {useState} from "react";

interface LearnWordCardProps {
    isFlipped: boolean;
    lang: string;
    text: string;
    pronunciation: string;
    backLang: string;
    backText: string;
    backPronunciation: string;
    onLearnClick: () => void;
    onFlip?: () => void;
}


const LearnWordCard = ({isFlipped, lang, text, pronunciation, backLang, backText, backPronunciation, onLearnClick, onFlip} : LearnWordCardProps) => {

    const [tilt, setTilt]= useState<'left'| 'right' | null>(null);

    return (
        <div className="flex items-center gap-26">
            {/* Card */}
            <div className="transition-all duration-300 ease-out" style={getCardStyle(tilt)}>
                <Card
                    isFlipped={isFlipped}
                    lang={lang}
                    text={text}
                    pronunciation={pronunciation}
                    backLang={backLang}
                    backText={backText}
                    backPronunciation={backPronunciation}
                    onFlip={onFlip}
                />
            </div>

            {/* I learn button */}
            <LearnButton setTilt={setTilt} onLearn={onLearnClick} />
        </div>
    )
}
export default LearnWordCard
