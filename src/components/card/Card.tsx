import ReactCardFlip from 'react-card-flip';
import {FlipIcon} from "../icons/FlipIcon.tsx";
import {AudioIcon} from "../icons/AudioIcon.tsx";

const faceStyle = "w-80 h-96 py-10 px-6 bg-gradient-to-b from-gray-50 via-purple-50 to-purple-100 rounded-3xl shadow-xl ring-1 ring-purple-100 flex flex-col items-center justify-center gap-3 relative";

interface CardProps {
    isFlipped: boolean;
    lang: string;
    text: string;
    pronunciation: string;
    backLang: string;
    backText: string;
    backPronunciation: string;
    onFlip?: () => void;
}

export const Card = ({ isFlipped, lang, text, pronunciation, backLang, backText, backPronunciation, onFlip }: CardProps) => {
    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            containerStyle={{ background: 'transparent' }}
            cardStyles={{
                front: { background: 'transparent' },
                back: { background: 'transparent' },
            }}
        >
            {/* Front face */}
            <div className={faceStyle}>
                <p className="absolute top-8 text-xs text-purple-400 uppercase tracking-widest font-semibold">{lang}</p>
                <h2 className="text-4xl text-gray-900 font-bold text-center w-full break-words leading-tight">{text}</h2>
                <p className="text-gray-400 text-sm">[{pronunciation}]</p>
                <AudioIcon />
                <div className="absolute bottom-4 right-4">
                    <FlipIcon onFlip={onFlip} />
                </div>
            </div>

            {/* Back face */}
            <div className={faceStyle}>
                <p className="absolute top-8 text-xs text-purple-400 uppercase tracking-widest font-semibold">{backLang}</p>
                <h2 className="text-4xl text-gray-900 font-bold text-center w-full break-words leading-tight">{backText}</h2>
                <p className="text-gray-400 text-sm">[{backPronunciation}]</p>
                <AudioIcon />
                <div className="absolute bottom-4 right-4">
                    <FlipIcon onFlip={onFlip} />
                </div>
            </div>
        </ReactCardFlip>
    );
};
