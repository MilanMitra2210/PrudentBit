import React, { useState } from 'react';
import Login from './components/Login';
import Mainpage from './components/Mainpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Mainpage />
      )}
    </>
  );
}

export default App;
