import {DailyPulseCard} from "./DailyPulseCard.tsx";

interface StatCardProps {
    dailyLimit: number | null
}

export const StatCard = ({dailyLimit} : StatCardProps) => {
    return (
        <div className="h-32 flex gap-4 mb-8">
            <DailyPulseCard done={8} total={dailyLimit} />
            <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100"></div>
            <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100"></div>
        </div>
    )
}
