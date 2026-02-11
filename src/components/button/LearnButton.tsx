interface KnowButtonProps {
    setTilt: (value: 'left' | 'right' | null) => void;
    onLearn: () => void;
}

export const LearnButton = ( {setTilt, onLearn}: KnowButtonProps) => {

    return (
        <button
            onMouseEnter={() => setTilt('right')}
            onMouseLeave={() => setTilt(null)}
            onClick={onLearn}
            className="
                w-20 h-20
                bg-white/80 backdrop-blur-sm
                border-2 border-purple-200
                hover:border-purple-400
                hover:bg-purple-50
                active:scale-95
                rounded-full
                text-purple-600 text-3xl
                shadow-sm hover:shadow-md
                transition-all duration-200
                flex items-center justify-center
            "
        >
            <span>✓</span>

        </button>
    )
}