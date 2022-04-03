import { FOLLOWER_ACTION_TYPES } from './follower.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setPrizeFollower = drawer => 
    createAction( FOLLOWER_ACTION_TYPES.SET_PRIZE_DRAWER_FOLLOWER, drawer );

// export const fetchPrizeStart = () => {
//     createAction( FOLLOWER_ACTION_TYPES.FETCH_PRIZE_DRAWER_START );
// }

// export const fetchPrizeSuccess = drawer => {
//     createAction( FOLLOWER_ACTION_TYPES.FETCH_PRIZE_DRAWER_SUCCESS, drawer );
// }

// export const fetchPrizeFailed = error => {
//     createAction( FOLLOWER_ACTION_TYPES.FETCH_PRIZE_DRAWER_FAILED, error );
// }

// export const fetchPrizeStartAsync = () => {
//     return async(dispatch) => {
//         dispatch(fetchPrizeStart());

//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//                         .then(res => res.json())
//                         .then(json => { return json})
//             dispatch(fetchPrizeSuccess(response));

//         } catch(error) {
//             dispatch(fetchPrizeFailed(error));
//         }

//     }
// }
