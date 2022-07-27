import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import CFlights from './CFlights';
import Login from './Login';
import {checkLogin} from './app/loginSlice'
import { useDispatch } from 'react-redux';
import MyNotes from './app/MyNotes';
function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(checkLogin())
    }, [])
    
  return (
    <div className="App">
      <header className="App-header">
          <Login></Login>
          <MyNotes></MyNotes>
          <CFlights></CFlights>
      </header>
    </div>
  );
}

export default App;
