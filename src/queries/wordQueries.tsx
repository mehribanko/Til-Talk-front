import axiosInstance from "../lib/axiosInstance.tsx";
import {transformApiData} from "../common/util/commonUtils.tsx";


const fetchLearnWords = async () => {
    const res = await axiosInstance.get(`/learn/daily`);
    return transformApiData(res.data);
}


const fetchUserDailySettings = async () => {
    const res = await axiosInstance.get('/learn/user/settings');
    return res.data;
}

const saveDailyLearnWords = async (wordNo: number) :Promise<void> => {
    await axiosInstance.post('/learn/daily/progress', {wordNo});
}


export const wordsApi ={
    fetchLearnWords,
    saveDailyLearnWords,
    fetchUserDailySettings
}