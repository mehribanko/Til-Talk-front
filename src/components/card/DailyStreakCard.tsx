
export const DailyStreakCard = () => {
    const streak = 7;

    return (
        <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100 px-5 py-4 flex flex-col justify-between overflow-hidden relative">
            <style>{`
                @keyframes ripple {
                    0%   { transform: scale(1);   opacity: 0.55; }
                    100% { transform: scale(2.2); opacity: 0; }
                }
                .streak-ripple {
                    animation: ripple 2.4s ease-out infinite;
                }
                .streak-ripple-2 { animation-delay: 0.8s; }
                .streak-ripple-3 { animation-delay: 1.6s; }
            `}</style>

            {/* background glow blobs */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-violet-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-100 rounded-full blur-xl opacity-40 pointer-events-none" />

            {/* streak badge */}
            <div className="flex items-center justify-center flex-1">
                <div className="relative flex items-center justify-center w-20 h-20">

                    {/* ripple waves */}
                    <div className="streak-ripple absolute w-11 h-11 rounded-full bg-gradient-to-br from-purple-300 to-violet-400" />
                    <div className="streak-ripple streak-ripple-2 absolute w-11 h-11 rounded-full bg-gradient-to-br from-purple-300 to-violet-400" />
                    <div className="streak-ripple streak-ripple-3 absolute w-11 h-11 rounded-full bg-gradient-to-br from-purple-300 to-violet-400" />

                    {/* solid inner circle */}
                    <div className="relative z-10 w-11 h-11 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl leading-none">{streak}</span>
                    </div>
                </div>
            </div>

            {/* footer */}
            <p className="text-gray-400 text-xs">
                {streak > 0 ? `${streak} day${streak !== 1 ? 's' : ''} in a row` : 'Start your streak today!'}
            </p>
        </div>
    );
};
