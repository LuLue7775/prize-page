import React from 'react';

import Drawer from './element/Drawer';
import styled from "styled-components";

export default function DrawerListView({drawer}) {
  return (
      <StyledDrawers key={drawer?.login?.uuid } > 
        <Drawer 
          name={drawer?.name?.first + ` ` + drawer?.name?.last } 
          picture={drawer?.picture?.thumbnail}
          account={drawer?.login?.username}
          email={drawer?.email}
        />
      
    </StyledDrawers>
  );
}

const StyledDrawers = styled.div`
  padding:10px;
  display: flex;
  justify-content:center;
`