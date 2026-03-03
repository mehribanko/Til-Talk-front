interface CategoryBreakdownCardProps {
    beg?: number;
    mid?: number;
    adv?: number;
}

const categories = [
    { label: 'Beginner',     key: 'beg', gradient: 'from-teal-400 to-emerald-500' },
    { label: 'Intermediate', key: 'mid', gradient: 'from-amber-400 to-orange-400'  },
    { label: 'Advanced',     key: 'adv', gradient: 'from-rose-400 to-pink-500'     },
] as const;

export const CategoryBreakdownCard = ({ beg = 5, mid = 2, adv = 1 }: CategoryBreakdownCardProps) => {
    const counts = { beg, mid, adv };
    const max = Math.max(beg, mid, adv, 1);

    return (
        <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100 px-5 py-4 flex flex-col justify-between overflow-hidden relative">

            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-purple-50 rounded-full blur-2xl opacity-60 pointer-events-none" />

            {/* Today badge only */}
            <div className="flex justify-end">
                <span className="text-xs bg-purple-100 text-purple-600 font-bold px-3 py-1 rounded-full border border-purple-200">
                    Today
                </span>
            </div>

            {/* Bars */}
            <div className="flex flex-col gap-2.5">
                {categories.map(({ label, key, gradient }) => {
                    const count = counts[key];
                    return (
                        <div key={key} className="flex items-center gap-3">
                            <span className="text-sm text-gray-500 font-medium w-24 shrink-0">{label}</span>
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                                    style={{
                                        width: `${(count / max) * 100}%`,
                                        transition: 'width 0.6s ease-out',
                                    }}
                                />
                            </div>
                            <span className="text-xs font-bold text-gray-600 shrink-0">{count} words</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
