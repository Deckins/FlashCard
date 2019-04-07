import React, { Component } from 'react';
import './App.css';
import FlashCard from './FlashCard/FlashCard';
import Button from './Button/Button';
import Banner from './Banner/Banner';

class App extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <div class="container">
          <Button/>
          <FlashCard/>
        </div>
      </div>
    );
  }
}

export default App;
