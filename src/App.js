// import './App.css';
import TimerView from './components/TimerView';
import DrawerListContainer from './components/DrawerListContainer';
import WinnerModalView from './components/modal/WinnerModalView';
import styled from "styled-components";

function App() {
  return (
    <StyledAppWrapper className="App">
      <StyledHeader className="App-header">
        <StyledTitle> LUCKY DRAW  </StyledTitle>
      </StyledHeader>

      <WinnerModalView/>
      
      <StyledBody className="App-body">
        <TimerView/>
        <DrawerListContainer/>
      </StyledBody>
    </StyledAppWrapper>
  );
}

export default App;

const StyledAppWrapper = styled.div`
  text-align: center;
  background: rgb(255, 145, 154);
  height:100vh;
  overflow:hidden;

  display: grid;
  align-content: space-between;
  gap:0;
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top:1.5em;

`

const StyledTitle =  styled.h1`
  margin:0;
`
const StyledBody = styled.div`
  height:90vh;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`