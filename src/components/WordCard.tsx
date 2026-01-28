import {useState} from 'react';
import {Card} from './Card';

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

    const getCardStyle = () => {
        const base = 'transition-all duration-300 ease-out';
        switch (tilt) {
            case 'left':
                return {
                    transform: 'rotate(-12deg) translateX(-20px)',
                    boxShadow: '20px 10px 30px rgba(0,0,0,0.15)',
                };
            case 'right':
                return {
                    transform: 'rotate(12deg) translateX(20px)',
                    boxShadow: '-20px 10px 30px rgba(0,0,0,0.15)',
                };
            default:
                return {
                    transform: 'rotate(0deg)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                };
        }
    };

    return  (
        <div className="relative flex items-center justify-center gap-8">
            {/* Skip button */}
            <button className="w-14 h-14 bg-black rounded-full text-white text-2xl"
                    onMouseEnter={() => setTilt('left')}
                    onMouseLeave={() => setTilt(null)}>
                ✕
            </button>

            {/* Card */}
            <div className="transition-all duration-300 ease-out" style={getCardStyle()}>
                <Card lang={lang} text={text} pronunciation={pronunciation} onFlip={onFlip}/>
            </div>

            {/* Favorite button */}
            <button
                onMouseEnter={() => setTilt('right')}
                onMouseLeave={() => setTilt(null)}
                onClick={onFavorite}
                className="w-14 h-14 bg-red-100 rounded-full text-red-500 text-2xl"
            >
                ❤️

            </button>
        </div>
    )
}