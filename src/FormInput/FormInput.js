import React, {Component} from 'react';
import Form from '../Forms/Form';
import './FormInput.css';
import Modal from '../Modal/Modal';
import axios from '../axios-orders';


class FormInput extends Component {
    state = {
        orderForm: {
            front: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Topic name'
                },
                value: ''
            },
            back: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter the answer'
                },
                value: ''
            },
        },

            loading: false,
            submited: false

    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
    const cards = formData

    axios.post( '/cards.json', cards )
        .then( response => {
        this.setState( { loading: false } );
        })
        .catch( error => {this.setState( { loading: false } );
        });
        this.setState({submited:true});
        // if(this.state.submited === false){
        //     this.props.history.push('/');
        // }
    }

inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.orderForm
    };
    const updatedFormElement = {
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
}

    submitCanceler = () =>{
        this.setState({submited:false})
        //this.props.history.push( '/' );

}

render () {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
        formElementsArray.push({
            id: key,
            config: this.state.orderForm[key]
        });
    }
    let form = (
        <form onSubmit={this.orderHandler}>
        {/* {console.log(formElementsArray)} */}
        {formElementsArray.map(formElement => (
            <Form
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))
        }
            <input type="submit" value="Submit"/>
        </form>
    );
    // if ( this.state.loading ) {
    //     form = <Spinner />;
    // }
    let confirmation = <div>Thank you for signing up!</div>
    return (
        <div className='ContactData'>
            <h4>Enter your Contact Data</h4>
            {form}
            <Modal show={this.state.submited} modalClosed={this.submitCanceler}>
                {confirmation}
            </Modal>
        </div> 
);
}
}

export default FormInput;