import React, { Component } from 'react';
import './FlashCard.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
// import {withRouter} from 'react-router-dom'
import './Form.css';
class FlashCard extends Component {
    state = {
        card : [

            {
                front:'Who is the first president',
                back:'George Washington' 
            },
            {
                front:'What is the capital of China',
                back:'Beijing'
            },
            {
                front:'What does K stand for in the Periodic Table',
                back:'Potassium'
            }
            // {
            //     front:'What color is the sky',
            //     back:'Blue'
            // }
        ],
        flipped:false,
        incrementer:0,
        add:false,
        front:'',
        end:'',
        popup:false
    }
    flipHandler =()=>{
        if(this.state.card.length > 0){
            let toggle = !this.state.flipped;
        
        this.setState({flipped:toggle});
        }
        else return
        
    }
    addHandler = () => {
        // if (this.state.front !== '' && this.state.end !== ''){

            let newdata = {'front':this.state.front, 'back': this.state.back}
            let found = this.state.card.find(c => {
                return c.front === newdata.front &&
                    c.back === newdata.back
            })
            if (!found && newdata.front && newdata.front !== '' &&
                newdata.back && newdata.back !== '') {
                this.state.card.push(newdata)
                console.log(this.state.card)
                console.log('pass')
            }
            let toggle = !this.state.popup
            this.setState({popup:toggle})
        // }
        
    }
    nextHandler = () =>{
        if(this.state.incrementer < this.state.card.length - 1 ){
            let value = this.state.incrementer + 1
            this.setState({incrementer: value})
        }else if(this.state.card.isEmpty){
            // this.setState({incrementer: 0})
            return
        }
        if(this.state.flipped == true){
            this.setState({flipped:false})
        }
        
       
    }
    restartHandler = () =>{
        // let arr = [{front:'',back:''}]
        // this.setState({card:arr})
        // for(let i = 0; i< this.state.card.length +1; i++)
        //     this.state.card.pop()

        //     console.log(this.state.card)
        // this.props.history.push('/')
    }

    addQuestionHandler = (event) =>{
        this.setState({front:event.target.value})
    }
    addAnswerHandler =(event) =>{
        this.setState({back:event.target.value})
    }
    prevHandler = () => {
        if(this.state.incrementer !== 0 ){
            let value = this.state.incrementer - 1
            this.setState({incrementer: value})
        }
        else if(this.state.card.length == 0){
            return;
            // this.setState({incrementer: this.state.card.length-1})
        }
        if(this.state.flipped == true){
            this.setState({flipped:false})
        }
    }

    render() {
        let display = null;
        console.log(this.state.card,this.state.incrementer)
        if(this.state.flipped === true){
           display = (
            <section className='back'>
                {
                    this.state.card[this.state.incrementer].back
                }
            </section>
          )  
        }
        else
            display = (
                <section className='front'>
                    {
                        this.state.card[this.state.incrementer].front
                    }
                </section>
            )
            let addNew = null
            if(this.state.popup){
                addNew = (
                    <div class = 'something'>
                    <form onSubmit = {this.addHandler}>
                        <p>Please Enter An Questiongit </p>
                        <input name='back' style={{width:'200px',height:'100px'}} input={this.state.addQuestion}
                        onChange={this.addQuestionHandler}
                        />
                        <p>Please Provide An Answer</p>
                        <input name='front' style={{width:'200px',height:'100px'}}input={this.state.addAnswer}
                        onChange={this.addAnswerHandler}
                        />
                    </form>
                    </div>
                )
            }
           
        return (
            <div>   

                <Button Next={this.nextHandler} Prev={this.prevHandler}
                Add={this.addHandler} Restart={this.restartHandler}/> 
                  {addNew}
                
               

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