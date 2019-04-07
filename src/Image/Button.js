import React, { Component } from 'react';
import './Add.css';
import './Next.css';
import './Prev.css';
import './Delete.css';
import './Restart.css';
import './Test.css';

class Button extends Component {
    render() {
        
        return(
        <div>
            <div>
                <button class="Prev">Prev </button>
            </div>

            <div>
                <button class="Next">Next</button>
            </div>

            <div>
                <button class="Delete">Delete</button>
            </div>

            <div>
                <button class="Add">Add</button>
            </div>

            <div>
                <button class="Test">Test</button>
            </div>

            <div>
                <button class="Restart">Restart</button>
            </div>

    
        </div>
        );
    }
}
export default Button;