import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Drawer({ name, picture, account }) {
  return (
    <StyledWrapper>
      <StyledPicture>
        <img src={picture} alt="drawer" />
      </StyledPicture>
      <StyledDetail>
        <StyledName> {name} </StyledName>
        <StyledAccount> @{account} </StyledAccount>
      </StyledDetail>
    </StyledWrapper>
  );
}

Drawer.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  account: PropTypes.string
};

const StyledWrapper = styled.div`
  border-radius: 20px;
  width: 300px;
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: start;

  background: rgb(255, 164, 91);
  background: linear-gradient(
    41deg,
    rgba(255, 164, 91, 1) 12%,
    rgba(255, 152, 63, 1) 25%,
    rgba(255, 218, 139, 0.9318102240896359) 57%,
    rgba(255, 57, 0, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 480px) {
    height: 20px;
    border-radius: 10px;
  }
  @media (max-height: 350px) {
    height: 20px;
    border-radius: 10px;
  }
`;

const StyledPicture = styled.div`
  overflow: hidden;
  padding-left: 2em;

  img {
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    img {
      height: 25px;
      width: 25px;
    }
  }
  @media (max-height: 350px) {
    img {
      height: 25px;
      width: 25px;
    }
  }
`;
const StyledDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 2em;
`;
const StyledName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
const StyledAccount = styled.div`
  font-size: 10px;
`;
