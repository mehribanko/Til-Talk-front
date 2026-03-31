const apiUrl = "/api/v1/learn"
const fetchLearnWords = async () => {
    const res = await fetch(`${apiUrl}/daily`);
    if(!res.ok) throw new Error('Failed to fetch words')
    return res.json();
}


export const wordsApi ={
    fetchLearnWords
}