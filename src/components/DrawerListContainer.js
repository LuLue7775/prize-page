import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Drawer from './element/Drawer';

import { selectPrizeDrawerList } from '../redux/follower/follower.selector'
import { setPrizeFollower } from '../redux/follower/follower.action'

import styled from "styled-components";

export default function DrawerListContainer() {
  const dispatch = useDispatch();
  const prizeDrawers = useSelector(selectPrizeDrawerList);
  useEffect(() => {
    const fetchDrawers = async() => {
        const response = await fetch(`https://randomuser.me/api/?results=${ Math.floor(Math.random()*20)}`, { dataType: 'json'})
                      .then(res => res.json())
                      .then(json => { return json})
                      .catch(err => { throw(err) })
        return response 
    }

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
  height: calc(80% - 150px); 
  overflow-y: scroll;
  overscroll:contain;
  
  width:80%;
  margin:0  auto;
  padding-top:2em;

  border-radius:20px;
  background-color:rgb(255, 207, 232, 0.5);


  @media (max-width: 480px) {
    height: calc(80% - 270px); 

  }
`

const StyledDrawers = styled.div`
  padding:0.7em;
  display: flex;
  justify-content:center;
`