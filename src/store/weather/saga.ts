import {call, put, takeLatest} from 'redux-saga/effects';
import WeatherService from '../../services/WeatherService';
import {
  Actions,
  fetchWeatherFailure,
  fetchWeatherSuccess,
  WEATHER_START_TYPE,
} from './actions';

export default function* saga() {
  yield takeLatest(Actions.START, weatherStartWorker);
}

export function* weatherStartWorker(action: WEATHER_START_TYPE) {
  try {
    const weather = yield call(
      WeatherService.fetchCurrentWeather,
      action.payload.latitude,
      action.payload.longitude,
    );
    yield put(fetchWeatherSuccess(weather));
  } catch (e) {
    yield put(fetchWeatherFailure(e.message));
  }
}
