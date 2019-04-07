import React, { Component } from 'react';
import './App.css';
import FlashCard from './FlashCard/FlashCard';
import Button from './Image/Button';

class App extends Component {
  render() {
    return (
      <div>
        <FlashCard/>
        <Button/>
      </div>
    );
  }
}

export default App;
