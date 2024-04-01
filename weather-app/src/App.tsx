const APIKEY = '3fadf907ae0bc114220a19b4da6eb8d2';

export default async function getWeather(city: string) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${APIKEY}`;
  const response = await fetch(url);
  if (response.ok) {
    const weatherData = await response.json();
    return weatherData;
  } else {
    throw new Error('Failed to fetch weather data');
  }
}

async function App() {
  try {
    const weatherData = await getWeather('London');
    console.log(weatherData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

App();
