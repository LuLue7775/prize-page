import { createContext, useState } from 'react'

export const WinnerContext = createContext({
    winner: {}, 
    setWinner: () => {}
});

export const WinnerProvider = ({ children }) =>  {
  const [winner, setWinner] = useState({})

  return (
    <WinnerContext.Provider value={{winner, setWinner}}>
        { children }
    </WinnerContext.Provider>
  );
};
