interface DailyPulseCardProps {
    done?: number | null;
    total?: number | null;
}

export const DailyPulseCard = ({ done = 0, total = 15 }: DailyPulseCardProps) => {
    const safeDone = done ?? 0;
    const safeTotal = total ?? 15;
    const progress = safeTotal > 0 ? safeDone / safeTotal : 0;
    const remaining = safeTotal - safeDone;

    return (
        <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100 px-5 py-4 flex flex-col justify-between overflow-hidden relative">

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

            {/* Words done label */}
            <p className="text-gray-900 font-bold text-lg leading-tight">
                {safeDone} <span className="text-gray-400 font-normal text-sm">words done</span>
            </p>

            {/* Rectangle progress bar */}
            <div className="relative w-full h-8 bg-purple-50 rounded-lg overflow-hidden border border-purple-100">
                {/* Fill */}
                <div
                    className="absolute inset-y-0 left-0 rounded-lg bg-gradient-to-r from-purple-400 to-violet-500"
                    style={{
                        width: `${progress * 100}%`,
                        transition: 'width 0.7s ease-out',
                    }}
                />
                {/* Label inside bar */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-700 mix-blend-multiply">
                        {safeDone} / {safeTotal}
                    </span>
                </div>
            </div>

            {/* Status text */}
            <p className="text-gray-400 text-xs">
                {remaining > 0 ? `${remaining} left to go` : 'Daily goal complete!'}
            </p>
        </div>
    );
};
