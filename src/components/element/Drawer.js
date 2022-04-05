import React from 'react'

import styled from "styled-components";


export default function Drawer({ name, picture, account, email}) {
  return (
        <StyledWrapper>
            <StyledPicture> 
                <img src={picture} alt="drawer"/>
            </StyledPicture>
            <StyledDetail>
                <StyledName> {name} </StyledName>
                <StyledAccount> @{account} </StyledAccount>
            </StyledDetail>
        
        </StyledWrapper>
  )
}


const StyledWrapper = styled.div`

  border-radius:20px;
  width:300px;
  padding:.5em;
  display: flex;
  align-items:center;  
  justify-content:start;

  background: rgb(255,164,91);
  background: linear-gradient(41deg, rgba(255,164,91,1) 12%, rgba(255,152,63,1) 25%, rgba(255,218,139,0.9318102240896359) 57%, rgba(255,57,0,1) 100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const StyledPicture = styled.div`

    overflow:hidden;
    padding-left:2em;

    img { 
        border-radius: 50%;
    }
`
const StyledDetail = styled.div`
    display: flex;
    flex-direction:column;
    align-items:start;
    padding-left:2em;
`
const StyledName = styled.div`
  font-size:1.2em;
  font-weight:bold;
`
const StyledAccount = styled.div`
  font-size:.8em;
`

