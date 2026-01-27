
interface WordCardProps {
    text: string;
    pronunciation: string;
    onFavorite: () => void;
    onFlip?: () => void;
}


export const WordCard = ({ text, pronunciation, onFavorite, onFlip}: WordCardProps) => {

    return  (
        <div className="relative flex items-center justify-center gap-8">
            {/* Skip button */}
            <button className="w-14 h-14 bg-black rounded-full text-white text-2xl">
                ✕
            </button>

            {/* Card */}
            <div className="w-80 h-96 bg-gradient-to-b from-white to-purple-50 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-4">
                <p className="text-gray-500">Korean</p>
                <h2 className="text-5xl font-bold">{text}</h2>
                <p className="text-gray-400">[{pronunciation}]</p>
                <button className="mt-4 text-2xl">🎤</button>
                <button onClick={onFlip} className="text-purple-400 mt-2">⇄</button>
            </div>

            {/* Favorite button */}
            <button
                onClick={onFavorite}
                className="w-14 h-14 bg-red-100 rounded-full text-red-500 text-2xl"
            >
                ❤️
            </button>
        </div>
    )
}