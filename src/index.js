import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { WinnerProvider } from './context/winner.context'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <WinnerProvider>
        <App />
        </WinnerProvider>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

