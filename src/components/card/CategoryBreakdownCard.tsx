import React, { useEffect, useRef, useState } from "react";

interface CategoryBreakdownCardProps {
    beg?: number;
    mid?: number;
    adv?: number;
}

const categories = [
    { label: 'Beginner',     key: 'beg', activeBorder: 'border-teal-400',  activeNumber: 'text-teal-600',  pingColor: 'border-teal-400'  },
    { label: 'Intermediate', key: 'mid', activeBorder: 'border-amber-400', activeNumber: 'text-amber-600', pingColor: 'border-amber-400' },
    { label: 'Advanced',     key: 'adv', activeBorder: 'border-rose-400',  activeNumber: 'text-rose-500',  pingColor: 'border-rose-400'  },
] as const;

export const CategoryBreakdownCard = ({ beg = 0, mid = 0, adv = 0 }: CategoryBreakdownCardProps) => {
    const counts = { beg, mid, adv };
    const prevCounts = useRef({ beg, mid, adv });
    const [animating, setAnimating] = useState<Set<string>>(new Set());

    useEffect(() => {
        const prev = prevCounts.current;
        const triggered = new Set<string>();

        if (beg > prev.beg) triggered.add('beg');
        if (mid > prev.mid) triggered.add('mid');
        if (adv > prev.adv) triggered.add('adv');

        prevCounts.current = { beg, mid, adv };

        if (triggered.size > 0) {
            setAnimating(triggered);
            const timer = setTimeout(() => setAnimating(new Set()), 600);
            return () => clearTimeout(timer);
        }
    }, [beg, mid, adv]);

    return (
        <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100 px-4 py-4 flex flex-col overflow-hidden relative">

            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-purple-50 rounded-full blur-2xl opacity-60 pointer-events-none" />

            <div className="flex flex-1 items-center justify-around">
                {categories.map(({ label, key, activeBorder, activeNumber, pingColor }, i) => {
                    const count = counts[key];
                    const isActive = count > 0;
                    const isAnimating = animating.has(key);

                    return (
                        <React.Fragment key={key}>
                            {i > 0 && <div className="w-px h-12 bg-gray-100 self-center shrink-0" />}
                            <div className="relative flex items-center justify-center">

                                {/* Ping ring */}
                                {isAnimating && (
                                    <div
                                        className={`absolute w-20 h-20 rounded-full border-2 ${pingColor}`}
                                        style={{ animation: 'ring-ping 0.6s ease-out forwards' }}
                                    />
                                )}

                                {/* Circle */}
                                <div
                                    className={`w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center transition-colors duration-300 ${isActive ? activeBorder : 'border-gray-200'}`}
                                    style={isAnimating ? { animation: 'circle-pop 0.5s ease-out' } : undefined}
                                >
                                    <span className={`text-2xl font-bold leading-none transition-colors duration-300 ${isActive ? activeNumber : 'text-gray-300'}`}>
                                        {count}
                                    </span>
                                    <span className="text-[10px] font-medium leading-none mt-1 text-gray-400">
                                        {label}
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
