import React, { useEffect } from 'react';
import './App.css';
import NameEmailCard from './components/NameEmailCard/name-email-card';
import { getRandomUser } from './utils/api-call';

function App() {
  useEffect(() => {
    getRandomUser();
  }, []);
  return (
    <div className='App'>
      <div>
        <NameEmailCard />
      </div>
    </div>
  );
}

export default App;
