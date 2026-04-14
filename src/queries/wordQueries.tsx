import axiosInstance from "../lib/axiosInstance.tsx";
import {transformApiData} from "../common/util/commonUtils.tsx";
import type {DailyUserSettingType} from "../types/WordTypes.tsx";


const fetchLearnWords = async () => {
    const res = await axiosInstance.get(`/learn/daily`);
    return transformApiData(res.data);
}

const fetchDailyWordLimit = async () :Promise<DailyUserSettingType> => {
    const res = await axiosInstance.get('/learn/daily/limit');
    return res.data;
}

const saveDailyLearnWords = async (wordId: number) :Promise<void> => {
    await axiosInstance.post('/learn/daily/word', {wordId});
}


export const wordsApi ={
    fetchLearnWords,
    fetchDailyWordLimit,
    saveDailyLearnWords
}