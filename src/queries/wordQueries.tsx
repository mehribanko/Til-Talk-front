import axiosInstance from "../lib/axiosInstance.tsx";
import {transformApiData} from "../common/util/commonUtils.tsx";

const fetchLearnWords = async () => {
    const res = await axiosInstance.get(`/learn/daily`);
    return transformApiData(res.data);
}


export const wordsApi ={
    fetchLearnWords
}