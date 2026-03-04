import {DailyPulseCard} from "./DailyPulseCard.tsx";
import {CategoryBreakdownCard} from "./CategoryBreakdownCard.tsx";
import type {LearnedWordLevel, WordLevel} from "../../types/WordTypes.tsx";

interface StatCardProps {
    dailyLimit: number | null
    doneLearning: number | null
    levelLearnWords: LearnedWordLevel
}

export const StatCard = ({dailyLimit, doneLearning, levelLearnWords} : StatCardProps) => {
    return (
        <div className="h-32 flex gap-4 mb-8">
            <DailyPulseCard done={doneLearning} total={dailyLimit} />
            <CategoryBreakdownCard beg={levelLearnWords.begLevel} mid={levelLearnWords.midLevel} adv={levelLearnWords.advLevel} />
            <div className="flex-1 bg-white rounded-2xl shadow-sm ring-1 ring-purple-100"></div>
        </div>
    )
}
