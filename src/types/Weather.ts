export type WeatherType = {
  temperature: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
  icon: string | null;
  description: string | null;
  city: string;
};

export const nullWeather: WeatherType = {
  temperature: 0,
  windSpeed: 0,
  humidity: 0,
  pressure: 0,
  icon: null,
  description: null,
  city: '',
};
