// import './App.css';
import TimerView from './components/TimerView';
import DrawerListContainer from './components/DrawerListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Who's the winner?  
      </header>
      <TimerView/>
      <DrawerListContainer/>
    </div>
  );
}

export default App;
