import {FlipIcon} from "./FlipIcon.tsx";

const faceStyle = "py-10 px-6 bg-gradient-to-b from-gray-50 via-purple-50 to-purple-100 rounded-3xl shadow-xl ring-1 ring-purple-100 flex flex-col items-center justify-center gap-3 relative";

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
        <div style={{ perspective: '1000px', width: '320px', height: '384px',  background: 'transparent' }}>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.55s ease',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front face */}
                <div
                    className={faceStyle}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                >
                    <p className="text-xs text-purple-400 uppercase tracking-widest font-semibold">{lang}</p>
                    <h2 className="text-4xl text-gray-900 font-bold text-center w-full break-words leading-tight">{text}</h2>
                    <p className="text-gray-400 text-sm">[{pronunciation}]</p>
                    <button className="mt-2 text-2xl">🎤</button>
                    <div className="absolute bottom-4 right-4">
                        <FlipIcon onFlip={onFlip} />
                    </div>
                </div>

                {/* Back face */}
                <div
                    className={faceStyle}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    <p className="text-xs text-purple-400 uppercase tracking-widest font-semibold">{backLang}</p>
                    <h2 className="text-4xl text-gray-900 font-bold text-center w-full break-words leading-tight">{backText}</h2>
                    <p className="text-gray-400 text-sm">[{backPronunciation}]</p>
                    <button className="mt-2 text-2xl">🎤</button>
                    <div className="absolute bottom-4 right-4">
                        <FlipIcon onFlip={onFlip} />
                    </div>
                </div>
            </div>
        </div>
    );
};
