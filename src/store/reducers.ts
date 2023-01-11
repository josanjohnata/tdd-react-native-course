import {combineReducers} from 'redux';
import {reducer as weather} from './weather';

export const reducers = {
  weather,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
export type StateType = ReturnType<typeof rootReducer>;
