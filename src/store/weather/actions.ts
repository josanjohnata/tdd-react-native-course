import {WeatherType} from '../../types/Weather';

export enum Actions {
  START = 'WEATHER_START',
  FAILURE = 'WEATHER_FAILURE',
  SUCCESS = 'WEATHER_SUCCESS',
  RESET = 'WEATHER_RESET',
}

export type WEATHER_START_TYPE = {
  type: Actions.START;
  payload: {
    latitude: number;
    longitude: number;
  };
};

export type WEATHER_SUCCESS_TYPE = {
  type: Actions.SUCCESS;
  payload: {
    weather: WeatherType;
  };
};

export type WEATHER_FAILURE_TYPE = {
  type: Actions.FAILURE;
  payload: {
    error: string;
  };
};

export type WEATHER_RESET_TYPE = {
  type: Actions.RESET;
};

export function fetchWeather(
  latitude: number,
  longitude: number,
): WEATHER_START_TYPE {
  return {
    type: Actions.START,
    payload: {
      latitude,
      longitude,
    },
  };
}

export function fetchWeatherFailure(error: string): WEATHER_FAILURE_TYPE {
  return {
    type: Actions.FAILURE,
    payload: {
      error,
    },
  };
}

export function fetchWeatherSuccess(
  weather: WeatherType,
): WEATHER_SUCCESS_TYPE {
  return {
    type: Actions.SUCCESS,
    payload: {
      weather,
    },
  };
}

export function fetchWeatherReset(): WEATHER_RESET_TYPE {
  return {
    type: Actions.RESET,
  };
}

export type ActionTypes =
  | WEATHER_START_TYPE
  | WEATHER_FAILURE_TYPE
  | WEATHER_SUCCESS_TYPE
  | WEATHER_RESET_TYPE;
