import React, { Component } from 'react';
import './FlashCard.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
class FlashCard extends Component {
    state = {
        card : [
            {
                front:'Front of the flashcard',
                back:'Back of the flashcard'
            },
            {
                front:'Who is the first president',
                back:'George Washington'
            },
            {
                front:'What is the capital of China',
                back:'Beijing'
            },
            {
                front:'What color is the sky',
                back:'Blue'
            }
        ],
        flipped:false,
        incrementer:0,
        add:false,
        front:'Add your question here',
        end:'Add your answer here'
    }
    flipHandler =()=>{
        let toggle = !this.state.flipped;
        
        this.setState({flipped:toggle});
    }
    addHandler = (event) =>{
        let newdata = {'front':event.target.value, 'back':event.target.value}  
        this.state.card.push(newdata)
        console.log(this.state.card)
    }
    nextHandler = () =>{
        if(this.state.incrementer < this.state.card.length - 1){
            let value = this.state.incrementer + 1
            this.setState({incrementer: value})
        }else{
            this.setState({incrementer: 0})
        }
        if(this.state.flipped == true){
            this.setState({flipped:false})
        }
        
       
    }
    prevHandler = () =>{
        if(this.state.incrementer !== 0){
            let value = this.state.incrementer - 1
            this.setState({incrementer: value})
        }
        else{
            this.setState({incrementer: this.state.card.length-1})
        }
        if(this.state.flipped == true){
            this.setState({flipped:false})
        }
    }

    render() {
        let display = null;
        if(this.state.flipped === true){
           display = (
            <section className='back'>
                {this.state.card[this.state.incrementer].back}
            </section>
          )  
        }
        else
            display = (
                <section className='front'>
                         {this.state.card[this.state.incrementer].front}
                    </section>
            )
        return (
            <div>

                <Button Next={this.nextHandler} Prev={this.prevHandler}
                Add={this.addHandler}/>
                <form onSubmit = {this.addHandler}>
                    <input name='back' input={this.state.addQuestion} 
                    />
                    <input name='front' input={this.state.addAnswer} 
                    />
                </form>
                  
                
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