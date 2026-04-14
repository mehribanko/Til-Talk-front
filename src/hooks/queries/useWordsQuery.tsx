import {useMutation, useQuery} from "@tanstack/react-query";
import {wordsApi} from "../../queries/wordQueries.tsx";

export const useLearnWordsQuery = () => {
    return useQuery({
        queryKey: ['learnWords'],
        queryFn: wordsApi.fetchLearnWords
    })
}

export const useGetDailyWordLimitQuery = () => {
    return useQuery({
        queryKey: ['dailyLimit'],
        queryFn: wordsApi.fetchDailyWordLimit
    })
}

export const useSaveLearnWordsQuery = () => {
    return useMutation({
        mutationFn: wordsApi.saveDailyLearnWords
    })
}