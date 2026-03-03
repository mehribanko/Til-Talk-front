import {DailyPulseCard} from "./DailyPulseCard.tsx";
import {CategoryBreakdownCard} from "./CategoryBreakdownCard.tsx";

interface StatCardProps {
    dailyLimit: number | null
    doneLearning: number | null
}

export const StatCard = ({dailyLimit, doneLearning} : StatCardProps) => {
    return (
        <div className="h-32 flex gap-4 mb-8">
            <DailyPulseCard done={doneLearning} total={dailyLimit} />
            <CategoryBreakdownCard beg={5} mid={2} adv={1} />
            <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100"></div>
        </div>
    )
}
