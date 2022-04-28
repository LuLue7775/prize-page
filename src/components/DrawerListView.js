import React from 'react';
import PropTypes from 'prop-types';
import Drawer from './element/Drawer';
import styled from 'styled-components';

export default function DrawerListView({ drawer }) {
  return (
    <StyledDrawers>
      <Drawer
        name={drawer?.name?.first + ` ` + drawer?.name?.last}
        picture={drawer?.picture?.thumbnail}
        account={drawer?.login?.username}
        email={drawer?.email}
      />
    </StyledDrawers>
  );
}

DrawerListView.propTypes = {
  drawer: PropTypes.object
};

const StyledDrawers = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
