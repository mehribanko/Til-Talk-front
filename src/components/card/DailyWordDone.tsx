export const DailyWordDone = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-3xl shadow-lg ring-1 ring-purple-100 px-12 py-14 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </div>
            <div>
                <p className="text-xl font-bold text-gray-800">Daily goal complete!</p>
                <p className="text-sm text-gray-400 mt-1">You've learned all your words for today.</p>
                <p className="text-sm text-gray-400">Come back tomorrow to keep your streak.</p>
            </div>
        </div>
    )
}