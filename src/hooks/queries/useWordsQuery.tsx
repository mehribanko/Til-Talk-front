import {useQuery} from "@tanstack/react-query";
import {wordsApi} from "../../queries/wordQueries.tsx";

export const useLearnWordsQuery = () => {
    return useQuery({
        queryKey: ['learnWords'],
        queryFn: wordsApi.fetchLearnWords
    })
}