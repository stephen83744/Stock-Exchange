export const generateMarketNews = async () => {
    const response = await fetch ("https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=MARKET_INDEXES&country=us&language=en", 
        {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': ' 5a26d1f6dcmsh24dbacb61b0339fp182e4cjsn04d616440e79',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    });
    const data = await response.json();
    return data;
}


export const searchtab = async(searchText: string) =>{
    const result = await fetch (`https://real-time-finance-data.p.rapidapi.com/search?q=${searchText}&country=us&lang=en`,
    {
        method: "GET" ,
        headers:{
            'X-RapidAPI-Key': ' 5a26d1f6dcmsh24dbacb61b0339fp182e4cjsn04d616440e79',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    });
    const answer = await result.json();
    return answer;
}