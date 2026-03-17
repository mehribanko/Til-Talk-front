import {DailyPulseCard} from "./DailyPulseCard.tsx";
import {CategoryBreakdownCard} from "./CategoryBreakdownCard.tsx";
import {DailyStreakCard} from "./DailyStreakCard.tsx";
import type {LearnedWordLevel} from "../../types/WordTypes.tsx";

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
            <DailyStreakCard />
        </div>
    )
}
