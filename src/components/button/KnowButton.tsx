interface KnowButtonProps {
    setTilt: () => void;
}

export const KnowButton = ( {setTilt }: KnowButtonProps) => {

    return (
        <button
            onMouseEnter={() => setTilt('right')}
            onMouseLeave={() => setTilt(null)}
            className="w-18 h-18 bg-purple-100 rounded-full text-red-500 text-2xl"
        >
            ✔️

        </button>
    )
}