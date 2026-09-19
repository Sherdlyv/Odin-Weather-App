const apiKey = process.env.API_KEY;


export async function getWeather(city) {
    try {
      
       const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?key=${apiKey}&unitGroup=metric`;



        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}
