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
                <button class="Prev" onClick={this.Prev}>Prev</button>
            </div>

            <div>
                <button class="Next" onClick={this.Next}>Next</button>
            </div>

            <div>
                <button class="Add" onClick={this.Add}>Add</button>
            </div>

            <div>
                <button class="Test" onClick={this.Test}>Test</button>
            </div>

            <div>
                <button class="Restart" onClick={this.Restart}>Restart</button>
            </div>

            <div>
                <button class="Delete" onClick={this.Delete}>Delete</button>
            </div>
            
        </div>
        );
    }
}
export default Button;