import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import CFlights from './CFlights';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CFlights></CFlights>
      </header>
    </div>
  );
}

export default App;
