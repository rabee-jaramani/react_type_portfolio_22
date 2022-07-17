import gsap from 'gsap';
import React, { useEffect } from 'react';
import Home from './home/Home';
import Menu from './menu/Menu';

function App() {
  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  return (
    <div className="App">
      <Menu/>
      <Home />
    </div>
  );
}

export default App;
