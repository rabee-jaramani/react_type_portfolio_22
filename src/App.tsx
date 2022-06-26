import gsap from 'gsap';
import React, { useEffect } from 'react';
import Home from './home/Home';

function App() {
  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
