interface KnowButtonProps {
    setTilt: (value: 'left' | 'right' | null) => void;
    onLearn: () => void;
}

export const LearnButton = ( {setTilt, onLearn}: KnowButtonProps) => {

    return (
        <button
            onMouseEnter={() => setTilt('left')}
            onMouseLeave={() => setTilt(null)}
            onClick={onLearn}
            className="w-18 h-18 bg-purple-100 rounded-full text-red-500 text-2xl"
        >
            🍀

        </button>
    )
}