import React, { Component } from 'react';
import './FlashCard.css';
class FlashCard extends Component {
    state = {
        card : {
            front:'Front of the flashcard',
            back:'Back of the flashcard'
        },
        flipped:false
    }
    flipHandler =()=>{
        let toggle = !this.state.flipped;
        
        this.setState({flipped:toggle});
    }
    render() {
        let display = null;
        if(this.state.flipped === true){
           display = (
            <section className='back'>
                {this.state.card.back}
            </section>
          )  
        }
        else
            display = (
                <section className='front'>
                         {this.state.card.front}
                    </section>
            )
        return (
            <div>
                <article class="flashcard" onClick={this.flipHandler}>
                    <label for="flashcard-1">
                        {display}
                    </label>
                </article>
            </div>
        );
    }
}

export default FlashCard;