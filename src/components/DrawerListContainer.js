import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectPrizeDrawerList } from '../redux/follower/follower.selector';
import { fetchDrawersStartAsync } from '../redux/follower/follower.action';

import DrawerListView from './DrawerListView';
import styled from 'styled-components';

export default function DrawerListContainer() {
  const dispatch = useDispatch();
  const prizeDrawers = useSelector(selectPrizeDrawerList);

  useEffect(() => {
    dispatch(fetchDrawersStartAsync());
  }, []);

  return (
    <StyledList className="drawer-list">
      {prizeDrawers?.map((drawer) => (
        <DrawerListView drawer={drawer} key={drawer.login.uuid} />
      ))}
    </StyledList>
  );
}

const StyledList = styled.div`
  width: 80%;
  height: calc(100% - 200px);
  margin: auto;
  padding-top: 10px;
  overflow-y: scroll;
  border-radius: 20px;
  background-color: rgb(255, 207, 232, 0.5);
  @media (max-width: 480px) {
    height: calc(100% - 270px);
  }
`;
