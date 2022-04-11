import { FOLLOWER_ACTION_TYPES } from './follower.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setPrizeFollower = drawer => 
    createAction( FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_FOLLOWER, drawer );

export const setPrizeWinner = winner => 
    createAction( FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_WINNER, winner );

