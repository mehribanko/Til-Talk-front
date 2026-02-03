
interface cardProps {
    lang: string;
    text : string;
    pronunciation: string;
    onFlip? : () => void;
}

export const Card = ({lang, text, pronunciation, onFlip} : cardProps) => {

    return (
        <div className="w-80 h-96 bg-gradient-to-b from-white to-purple-50 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-4">
            <p className="text-gray-500">{lang}</p>
            <h2 className="text-5xl text-black font-bold">{text}</h2>
            <p className="text-gray-400">[{pronunciation}]</p>
            <button className="mt-4 text-2xl">🎤</button>
            <button onClick={onFlip} className="text-purple-400 mt-2">⇄</button>
        </div>
    )
}