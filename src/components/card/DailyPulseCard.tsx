interface DailyPulseCardProps {
    done?: number;
    total?: number;
}

const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const DailyPulseCard = ({ done = 8, total = 15 }: DailyPulseCardProps) => {
    const progress = done / total;
    const offset = CIRCUMFERENCE * (1 - progress);
    const remaining = total - done;
    const isAlmostDone = progress >= 0.8;

    return (
        <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100 px-5 py-4 flex items-center gap-5 overflow-hidden relative">

            {/* Subtle background glow */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

            {/* Circular progress ring */}
            <div className="relative w-[76px] h-[76px] flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                    <defs>
                        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c084fc" />
                            <stop offset="100%" stopColor="#7c3aed" />
                        </linearGradient>
                    </defs>
                    {/* Track */}
                    <circle
                        cx="40" cy="40" r={RADIUS}
                        fill="none"
                        stroke="#ede9fe"
                        strokeWidth="7"
                    />
                    {/* Progress arc */}
                    <circle
                        cx="40" cy="40" r={RADIUS}
                        fill="none"
                        stroke="url(#pulseGradient)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 0.7s ease-out' }}
                    />
                </svg>

                {/* Center fraction */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-0">
                    <span className="text-[15px] font-bold text-gray-800 leading-none">{done}</span>
                    <div className="w-3.5 h-px bg-purple-300 my-[3px]" />
                    <span className="text-[11px] font-semibold text-purple-400 leading-none">{total}</span>
                </div>
            </div>

            {/* Text info */}
            <div className="flex flex-col gap-1 min-w-0">
                <p className="text-gray-900 font-bold text-lg leading-tight">
                    {done} <span className="text-gray-400 font-normal text-sm">words done</span>
                </p>
                <p className="text-gray-400 text-xs">
                    {remaining > 0 ? `${remaining} left to go` : 'Daily goal complete!'}
                </p>

                {/* Linear mini-bar */}
                <div className="mt-1 h-1.5 w-full bg-purple-100 rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-400 to-violet-600"
                        style={{ width: `${progress * 100}%`, transition: 'width 0.7s ease-out' }}
                    />
                </div>

                {isAlmostDone && (
                    <p className="text-[10px] text-violet-500 font-semibold mt-0.5">Almost there!</p>
                )}
            </div>
        </div>
    );
};
