import React from 'react';
import './App.css';
import Nav from './Nav';
import NameCard from './NameCard';
import Bio from './Bio';
import Feed from './Feed'
import Friends from './Friends';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <hr/>
      <div className='main'>
        <div>
          <NameCard/>
          <Bio/>
        </div>
        <Feed/>
        <div>
          <Friends/>
        </div>
      </div>
    </div>
  );
}

export default App;
