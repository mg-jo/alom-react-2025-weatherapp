import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>날씨 정보를 불러오는 중입니다...</div>;
  }

  const currentTemp = weatherData.hourly.temperature_2m.slice(0, 1);
  const currentCode = weatherData.hourly.weather_code.slice(0, 1);
  const description = getWeatherDescription(currentCode[0]);

  return (
    // 0시의 날씨를 출력..
    <CurrentWeatherWrapper>
      <Temperature>{Math.round(currentTemp[0])}°C</Temperature>
      <WeatherCode>{description}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
