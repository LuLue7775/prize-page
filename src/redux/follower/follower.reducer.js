import { FOLLOWER_ACTION_TYPES } from './follower.types'

const INITIAL_STATE = { 
    prizeDrawerList: [],
};

export const followerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_FOLLOWER:
            return { ...state, prizeDrawerList: payload };
        default:
            return state;
    }
};