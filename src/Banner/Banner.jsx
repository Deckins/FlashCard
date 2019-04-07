import React, { Component } from 'react';
import './Banner.css';
import logo from '../Image/dolphin.jpg';

const Banner = (props) => {
    return(
        <div className='banner-container'>
            {/* <img className='dolphin' src={logo}/> */}
            <div className='eng'> Welcome to FlipLet 
            <img className='dolphin' src={logo}/>
            
            </div>

        </div>
    )
    }

export default Banner