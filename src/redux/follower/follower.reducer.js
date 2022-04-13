import { FOLLOWER_ACTION_TYPES } from './follower.types';

const INITIAL_STATE = {
  prizeDrawerList: [],
  prizeWinner: {},
  error: null
};

export const followerReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_FOLLOWER:
      return { ...state, prizeDrawerList: payload };
    case FOLLOWER_ACTION_TYPES.FETCH_PRIZE_DRAWER_FAILED:
      return { ...state, error: payload };
    case FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_WINNER:
      return { ...state, prizeWinner: payload };
    default:
      return state;
  }
};
