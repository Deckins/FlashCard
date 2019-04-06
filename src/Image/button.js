import React, { Component } from 'react';
import './button.css';
class Bitton extends Component {
    render() {
        return (
            <button class="LeftButton" onClick = {prev}>
            </button>
            <button class="RightButton" onClick = {prev}>
            </button>
        );
    }
}

export default Bitton;