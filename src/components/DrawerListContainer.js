import React, { useEffect, 
    useMemo, useCallback, useState, CSSProperties, ReactElement } from 'react';
import useWindowSize from '../utils/hooks/useWindowSize';
import { useSelector, useDispatch } from 'react-redux';
import { selectPrizeDrawerList } from '../redux/follower/follower.selector'
import { setPrizeFollower } from '../redux/follower/follower.action'

import Drawer from './element/Drawer';


import styled from "styled-components";


const fetchDrawers = async() => {
    const response = await fetch(`https://randomuser.me/api/?results=${ Math.floor(Math.random()*20)}`, { dataType: 'json'})
                  .then(res => res.json())
                  .then(json => { return json})
                  .catch(err => { throw(err) })
    return response 
}



export default function DrawerListContainer() {
  const dispatch = useDispatch();
  const prizeDrawers = useSelector(selectPrizeDrawerList);
  useEffect(() => {
    fetchDrawers().then( drawers =>{
        dispatch(setPrizeFollower(drawers.results))
        return drawers
    }).catch(err => console.log(err) )

  }, [])


  return (
    <StyledList className="drawer-list">
      {
        prizeDrawers?.map( drawer => 
          <StyledDrawers key={drawer?.login?.uuid } > 
              <Drawer 
                name={drawer?.name?.first + ` ` + drawer?.name?.last } 
                picture={drawer?.picture?.thumbnail}
                account={drawer?.login?.username}
                email={drawer?.email}
              />
            
          </StyledDrawers>
        )
      }
    </StyledList>
  );
}

const StyledList = styled.div`
  width:80%;
  height: calc(100% - 200px); 
  // height: 400px; 
  margin:0  auto;
  margin-bottom:50px;

  padding-top:2px;
  overflow-y: scroll;

  border-radius:20px;
  background-color:rgb(255, 207, 232, 0.5);

  @media (max-width: 480px) {
    height: calc(100% - 270px); 
  }
`

const StyledDrawers = styled.div`
  padding:10px;
  display: flex;
  justify-content:center;
`