import { FOLLOWER_ACTION_TYPES } from './follower.types';
import { createAction } from '../../utils/reducer/reducer.utils';



export const setPrizeWinner = winner => 
    createAction( FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_WINNER, winner );

export const setPrizeFollowerSuccess = drawer => 
    createAction( FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_FOLLOWER, drawer );

export const fetchPrizeFollowerFailure = (error) =>
    createAction(FOLLOWER_ACTION_TYPES.FETCH_PRIZE_DRAWER_FAILED, error);


export const fetchDrawersStartAsync = () =>  {
    return async function (dispatch) {
        try {
          const response = await fetch(`https://randomuser.me/api/?results=${ Math.floor(Math.random()*20) }`, { dataType: 'json' })
                      .then(res => res.json())
                      .then(json => { return json })
            dispatch(setPrizeFollowerSuccess(response.results))
        } catch(error) {
            dispatch(fetchPrizeFollowerFailure(error))
        }
    } 
}