
interface SkipButtonProps {
    setTilt: () => void;
}


export const SkipButton = ({setTilt}: SkipButtonProps) => {

    return (
        <button className="w-18 h-18 bg-gray-600 rounded-full text-white text-2xl"
                onMouseEnter={() => setTilt('left')}
                onMouseLeave={() => setTilt(null)}>
            ✗
        </button>
    )
}