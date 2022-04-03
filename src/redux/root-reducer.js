import { combineReducers } from 'redux';

import { followerReducer } from './follower/follower.reducer';

export const rootReducer = combineReducers({
    follower:followerReducer,
});