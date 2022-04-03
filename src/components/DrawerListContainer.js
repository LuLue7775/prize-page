import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPrizeDrawerList } from '../redux/follower/follower.selector'
import { setPrizeFollower } from '../redux/follower/follower.action'

export default function DrawerListContainer() {
  const dispatch = useDispatch();
  const prizeDrawers = useSelector(selectPrizeDrawerList);

  useEffect(() => {
    const fetchDrawers = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
                      .then(res => res.json())
                      .then(json => { return json})
                      .catch(err => { throw(err) })
        return response 
    }

    fetchDrawers().then( drawers =>{
        dispatch(setPrizeFollower(drawers))
        return drawers
    }).catch(err => console.log(err) )

  }, [])

  return (
    prizeDrawers?.map( drawer => 
      <div key={drawer.id} > {drawer.name} </div>
    )
  );
}
