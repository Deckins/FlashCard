import React from 'react';
import './Add.css';
import './Next.css';
import './Prev.css';
import './Delete.css';
import './Restart.css';
import './Test.css';

const Button = (props) => {
    
        return(
        <div>
            <div>
                <button class="Prev" onClick={props.Prev}>Prev</button>
            </div>

            <div>
                <button class="Next" onClick={props.Next}>Next</button>
            </div>

             <div>
                <button class="Add" onClick={props.Add}>Add</button>
            </div>

            <div>
                <a href="/">
                    <button class="Restart" onClick={props.Restart}>Delete</button>
                </a>
            </div>

        </div>
        );
    }

export default Button;