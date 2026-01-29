import {useState} from 'react';
import {Card} from './card/Card';
import {SkipButton} from './button/SkipButton';
import {KnowButton}  from './button/KnowButton';
import {getCardStyle} from '../common/commonUtils';

interface WordCardProps {
    lang: string;
    text: string;
    pronunciation: string;
    onFavorite: () => void;
    onSkip: () => void;
    onFlip?: () => void;
}


export const WordCard = ({ lang, text, pronunciation, onFavorite, onFlip, onSkip}: WordCardProps) => {

    const [tilt, setTilt] = useState<'left' | 'right' | null>(null);


    return  (
        <div className="relative flex items-center justify-center gap-20">
            {/* Skip button */}
            <SkipButton setTilt={setTilt} />

            {/* Card */}
            <div className="transition-all duration-300 ease-out  mx-12" style={getCardStyle(tilt)}>
                <Card lang={lang} text={text} pronunciation={pronunciation} onFlip={onFlip}/>
            </div>

            {/* I Know Button button */}
            <KnowButton setTilt={setTilt} />
        </div>
    )
}