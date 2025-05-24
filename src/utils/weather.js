export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요

  const times = weatherData.hourly.time.slice(0, 12); // 처음 12시간
  const temps = weatherData.hourly.temperature_2m.slice(0, 12);
  const codes = weatherData.hourly.weather_code.slice(0, 12);

  const hourlyData = times.map((time, index) => {
    const hour = new Date(time).getHours();
    return {
      time: `${hour}시`,
      temperature: `${Math.round(temps[index])}°C`,
      code: codes[index],
    };
  });

  return hourlyData;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData) return [];
  // 밑에 코드 채워주세요
  const dates = weatherData.daily.time.slice(0, 7); // 7일 날짜 배열
  const temps = weatherData.daily.temperature_2m_max.slice(0, 7);
  const codes = weatherData.daily.weather_code.slice(0, 7);

  const dailyData = dates.map((date, index) => {
    const date1 = new Date(date);
    // 한국어 형식
    const date2 = date1.toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      weekday: "short",
    });

    return {
      date: date2,
      code: codes[index],
      temperature: `${Math.round(temps[index])}°C`,
    };
  });

  return dailyData;
};
