import React, { Component } from 'react';
import './App.css';
import FlashCard from './FlashCard/FlashCard';
import Button from './Button/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Button/>
        <FlashCard/>
      </div>
    );
  }
}

export default App;
