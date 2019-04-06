import React, { Component } from 'react';
import './button.css';
class Bitton extends Component {
    render() {
        return (
        <div>
            <button class="LeftButton" onClick = {prev}>
            </button>
            <button class="RightButton" onClick = {prev}>
            </button>
        </div>
        );
    }
}

export default Bitton;