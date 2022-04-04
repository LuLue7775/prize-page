import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPrizeDrawerList } from '../redux/follower/follower.selector'
import { setPrizeFollower } from '../redux/follower/follower.action'

import styled from "styled-components";

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
    <StyledList className="drawer-list">
      {
        prizeDrawers?.map( drawer => 
          <StyledDrawers key={drawer.id} > {drawer.name} </StyledDrawers>
        )
      }
    </StyledList>
  );
}

const StyledList = styled.div`
  height: calc(80% - 150px); 
  overflow-y: scroll;
  
  width:100%;
  margin:0  auto;


  @media (max-width: 480px) {
    height: calc(80% - 270px); 
    position:absolute;
    bottom:0;
  }
`

const StyledDrawers = styled.div`
  padding:0.6em;
`