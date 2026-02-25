
import {getCardStyle, getFloatAnimation} from "../../common/util/commonUtils";
import {Card} from "./Card";
import {LearnButton} from "../button/LearnButton";
import {useState, useEffect} from "react";

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

    const [tilt, setTilt] = useState<'left' | 'right' | null>(null);
    const [isFloating, setIsFloating] = useState(false);

    useEffect(() => {
        if (tilt === 'right') {
            const timer = setTimeout(() => setIsFloating(true), 300);
            return () => {
                clearTimeout(timer);
                setIsFloating(false);
            }
        }
    }, [tilt]);

    const cardStyle = isFloating
        ? getFloatAnimation()
        : getCardStyle(tilt);

    return (
        <div className="flex items-center gap-26">
            {/* Card */}
            <div className="transition-all duration-300 ease-out" style={cardStyle}>
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
