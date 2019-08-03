import React from 'react';
import './App.css';
import { Pokemon } from './components/Pokemon';

const App: React.FC = () => {
  return (
    <div className="App">
   <h1>list of pokemon names</h1>
   <p>contents will be available offline thanks to service workers</p>
    <Pokemon/>
    </div>
  );
}

export default App;
