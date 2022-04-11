import { FOLLOWER_ACTION_TYPES } from './follower.types'

const INITIAL_STATE = { 
    prizeDrawerList: [],
    prizeWinner:{}
};

export const followerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_FOLLOWER:
            return { ...state, prizeDrawerList: payload };
        case FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_WINNER:
            return { ...state, prizeWinner: payload };
        default:
            return state;
    }
};