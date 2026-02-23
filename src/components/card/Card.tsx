
interface cardProps {
    lang: string;
    text : string;
    pronunciation: string;
    onFlip? : () => void;
}

export const Card = ({lang, text, pronunciation, onFlip} : cardProps) => {

    return (
        <div className="w-80 min-h-96 py-10 px-6 bg-gradient-to-b from-white via-purple-50 to-purple-100 rounded-3xl shadow-xl ring-1 ring-purple-100 flex flex-col items-center justify-center gap-3">
            <p className="text-xs text-purple-400 uppercase tracking-widest font-semibold">{lang}</p>
            <h2 className="text-4xl text-gray-900 font-bold text-center w-full break-words leading-tight">{text}</h2>
            <p className="text-gray-400 text-sm">[{pronunciation}]</p>

            <button className="mt-2 text-2xl">🎤</button>
            <button onClick={onFlip} className="text-purple-400 mt-1 hover:text-purple-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="34" fill="currentColor">
                    <path d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19zm-.3-9.29a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z"></path>
                </svg>
            </button>
        </div>
    )
}